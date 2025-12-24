import requests
from bs4 import BeautifulSoup
import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time
import logging

# Set up logging
logging.basicConfig(filename='scraper.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

def download_file(url, folder, filename):
    try:
        response = requests.get(url)
        response.raise_for_status()
        filepath = os.path.join(folder, filename)
        with open(filepath, 'wb') as file:
            file.write(response.content)
        logging.info(f"Downloaded {url} to {filepath}")
    except requests.exceptions.RequestException as e:
        logging.error(f"Error downloading {url}: {e}")

def clone_website(url, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    try:
        # Set up Selenium WebDriver
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')  # Run headless Chrome
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

        # Load the page with Selenium
        driver.get(url)
        time.sleep(5)  # Wait for the page to load completely

        # Get the page source and parse with BeautifulSoup
        page_source = driver.page_source
        soup = BeautifulSoup(page_source, 'html.parser')

        # Save the HTML content
        html_filepath = os.path.join(output_folder, 'index.html')
        with open(html_filepath, 'w', encoding='utf-8') as file:
            file.write(soup.prettify())
        logging.info(f"HTML content saved to {html_filepath}")

        # Download CSS files
        for link in soup.find_all('link', rel='stylesheet'):
            css_url = link.get('href')
            if css_url:
                css_filename = os.path.basename(css_url)
                download_file(css_url, output_folder, css_filename)

        # Download JavaScript files
        for script in soup.find_all('script', src=True):
            js_url = script.get('src')
            if js_url:
                js_filename = os.path.basename(js_url)
                download_file(js_url, output_folder, js_filename)

        # Download images
        for img in soup.find_all('img', src=True):
            img_url = img.get('src')
            if img_url:
                img_filename = os.path.basename(img_url)
                download_file(img_url, output_folder, img_filename)

        # Update HTML to reflect local file paths
        for link in soup.find_all('link', rel='stylesheet'):
            css_url = link.get('href')
            if css_url:
                css_filename = os.path.basename(css_url)
                link['href'] = css_filename

        for script in soup.find_all('script', src=True):
            js_url = script.get('src')
