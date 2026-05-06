@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital@0;1&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 240 33% 5%;
    --foreground: 0 0% 100%;
    --card: 240 25% 10%;
    --card-foreground: 0 0% 100%;
    --popover: 240 25% 10%;
    --popover-foreground: 0 0% 100%;
    --primary: 45 65% 52%;
    --primary-foreground: 240 33% 5%;
    --secondary: 240 25% 15%;
    --secondary-foreground: 0 0% 100%;
    --muted: 240 20% 15%;
    --muted-foreground: 240 5% 65%;
    --accent: 263 70% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 20% 15%;
    --input: 240 20% 15%;
    --ring: 45 65% 52%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-void-900 text-white antialiased;
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel', serif;
  }
}

@layer utilities {
  .font-display {
    font-family: 'Cinzel', serif;
  }
  
  .font-body {
    font-family: 'Inter', sans-serif;
  }
  
  .font-quote {
    font-family: 'Playfair Display', serif;
  }
  
  .text-gradient-gold {
    @apply bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text text-transparent;
  }
  
  .glow-gold {
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
  }
  
  .glow-purple {
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
  }
  
  .card-hover {
    @apply transition-all duration-300;
  }
  
  .card-hover:hover {
    @apply -translate-y-1;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.1);
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #0A0A0F;
}

::-webkit-scrollbar-thumb {
  background: #2a2a3a;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3a3a4a;
}

/* Selection */
::selection {
  background: rgba(212, 175, 55, 0.3);
  color: white;
}

/* Focus styles */
*:focus-visible {
  outline: 1px solid #D4AF37;
  outline-offset: 2px;
}

/* Animation utilities */
@keyframes pulse-gold {
  0%, 100% {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
  }
}

.animate-pulse-gold {
  animation: pulse-gold 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Noise texture */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.03;
  z-index: 1000;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
