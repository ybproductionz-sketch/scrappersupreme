export type LawCategory = 'power' | 'strategy' | 'mindset' | 'wealth' | 'control' | 'influence';

export interface Example {
  title: string;
  content: string;
  context: 'business' | 'relationships' | 'power' | 'general' | 'wealth';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Law {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: LawCategory;
  theLife: string;
  theIsm: string;
  takeaways: string[];
  examples: Example[];
  reflection: string;
  quiz: QuizQuestion[];
}

export const laws: Law[] = [
  {
    id: 'law-1',
    number: 1,
    title: "Purse First, Ass Last",
    subtitle: "Money before emotion",
    category: 'wealth',
    theLife: "Little Bear was a pimp who understood the fundamental rule of the game: money comes before everything. When a fine ho approached him, he didn't get distracted by her beauty. Instead, he looked her in the eye and said, 'Bitch, break yourself!' She knew exactly what he meant - if she wanted to be with him, she had to show him the money first. This wasn't about being cruel; it was about establishing the foundation of their relationship. In the game, a pimp who puts emotions before finances is a pimp who won't last long.",
    theIsm: "The foundation of all power is economic. Before any relationship can be established, before any loyalty can be demanded, the financial arrangement must be clear. The person who controls the money controls the dynamic. Never let physical attraction or emotional attachment cloud your judgment about financial priorities.",
    takeaways: [
      "Financial security must precede emotional investment",
      "The person who pays holds the power",
      "Beauty without contribution is a liability",
      "Establish economic terms upfront in every relationship"
    ],
    examples: [
      {
        title: "The Business Partnership",
        content: "Before entering any business partnership, establish who brings what capital, who gets what percentage, and how profits are distributed. Emotional excitement about an idea means nothing without clear financial terms.",
        context: "business"
      },
      {
        title: "The Job Negotiation",
        content: "When negotiating a salary, discuss compensation before expressing enthusiasm for the role. Your excitement makes you weak in negotiation. Get the money right first, then bring your passion.",
        context: "business"
      }
    ],
    reflection: "In your current relationships and dealings, are you putting emotional connection before financial security? How might reversing this priority change your outcomes?",
    quiz: [
      {
        id: 'q1-1',
        question: "What does 'Purse First, Ass Last' primarily emphasize?",
        options: [
          "Physical attraction is most important",
          "Financial priorities come before emotional ones",
          "Relationships should be purely transactional",
          "Money is the only measure of success"
        ],
        correctAnswer: 1,
        explanation: "The law emphasizes that financial security and clear economic terms must be established before emotional investment or attachment."
      },
      {
        id: 'q1-2',
        question: "Why did Little Bear demand money upfront?",
        options: [
          "He was greedy",
          "To establish the power dynamic",
          "He didn't trust women",
          "It was a cultural tradition"
        ],
        correctAnswer: 1,
        explanation: "Demanding money upfront establishes who holds power in the relationship and sets clear expectations from the beginning."
      }
    ]
  },
  {
    id: 'law-2',
    number: 2,
    title: "Get a Name in the Game",
    subtitle: "Build your reputation",
    category: 'power',
    theLife: "When Ken first entered the game, nobody knew his name. He was just another young man trying to make his way. But he understood that in this world, your name is your brand, your reputation is your currency. He started small, always delivering on his word, always handling his business. Soon, people began to talk. 'That's Pimpin' Ken,' they'd say. 'He's sharp. He's reliable. He gets things done.' Your name precedes you. Build it carefully, protect it fiercely.",
    theIsm: "Your reputation is your most valuable asset. It opens doors that money cannot buy and creates opportunities that skill alone cannot generate. A good name takes years to build and seconds to destroy. Guard it with your life.",
    takeaways: [
      "Your reputation precedes you in every room",
      "Consistency builds credibility",
      "Word of mouth is the most powerful marketing",
      "Protect your name at all costs"
    ],
    examples: [
      {
        title: "The Consultant's Brand",
        content: "A consultant who consistently delivers results builds a reputation that attracts high-paying clients without advertising. Their name becomes synonymous with quality.",
        context: "business"
      },
      {
        title: "The Network Effect",
        content: "In social circles, your reputation determines who invites you, who vouches for you, and who does business with you. A good name multiplies your opportunities exponentially.",
        context: "power"
      }
    ],
    reflection: "What is your name associated with in your professional and social circles? Is this the reputation you want to build?",
    quiz: [
      {
        id: 'q2-1',
        question: "Why is your name/reputation considered valuable?",
        options: [
          "It sounds impressive",
          "It opens doors money cannot buy",
          "It's required for legal documents",
          "It makes you famous"
        ],
        correctAnswer: 1,
        explanation: "A good reputation creates opportunities and opens doors that money and skill alone cannot access."
      }
    ]
  },
  {
    id: 'law-3',
    number: 3,
    title: "Don't Chase 'Em, Replace 'Em",
    subtitle: "Abundance mindset",
    category: 'mindset',
    theLife: "Ken was young and in love with a girl named Candy. He chased her, bought her gifts, did everything to win her affection. But the more he chased, the further she ran. Then one day, he stopped. He found another girl, started giving her attention. Suddenly, Candy was interested again. But Ken had learned his lesson - never chase what is running away. There will always be another. Abundance creates attraction; desperation repels it.",
    theIsm: "The one who chases holds no power. Scarcity mindset makes you weak; abundance mindset makes you strong. When you are willing to walk away, you hold all the cards. There is always another opportunity, another relationship, another deal.",
    takeaways: [
      "Chasing demonstrates weakness",
      "Willingness to walk away is power",
      "Abundance mindset attracts opportunities",
      "Never be emotionally dependent on one option"
    ],
    examples: [
      {
        title: "The Negotiation Walk-Away",
        content: "In any negotiation, the party willing to walk away has the advantage. When you have alternatives, you never need to accept a bad deal.",
        context: "business"
      },
      {
        title: "The Dating Dynamic",
        content: "People are attracted to those who have options. When you demonstrate that you don't need any particular person, you become more desirable to everyone.",
        context: "relationships"
      }
    ],
    reflection: "In what areas of your life are you chasing too hard? What would happen if you stopped chasing and started replacing?",
    quiz: [
      {
        id: 'q3-1',
        question: "Why does chasing make you weak?",
        options: [
          "It's physically tiring",
          "It demonstrates you have no alternatives",
          "It's impolite",
          "It wastes time"
        ],
        correctAnswer: 1,
        explanation: "Chasing shows desperation and lack of alternatives, which puts you at a power disadvantage."
      }
    ]
  },
  {
    id: 'law-4',
    number: 4,
    title: "Keep a Ho in Arrears",
    subtitle: "Maintain the debt dynamic",
    category: 'control',
    theLife: "A pimp named Smooth had a problem - his girl was getting too independent. She had saved money, had options, didn't need him anymore. Smooth knew he had made a mistake. The key to control is keeping your people dependent on you. When they owe you - money, favors, their position - they must stay. Independence breeds departure; dependence ensures loyalty.",
    theIsm: "Dependency creates control. When someone owes you, they are bound to you. When they are ahead, they are free to leave. Always structure relationships so that others need you more than you need them.",
    takeaways: [
      "Dependency creates loyalty",
      "Independence threatens control",
      "Keep others slightly indebted to you",
      "Never let those under you get too far ahead"
    ],
    examples: [
      {
        title: "The Employee Incentive",
        content: "Companies offer stock options that vest over time, bonuses paid annually, and benefits that accumulate. This creates golden handcuffs that keep valuable employees from leaving.",
        context: "business"
      },
      {
        title: "The Favor Bank",
        content: "Politicians remember who helped them get elected. They remain loyal to those who put them in power because they owe their position to them.",
        context: "power"
      }
    ],
    reflection: "Who depends on you, and who do you depend on? How can you shift this balance in your favor?",
    quiz: [
      {
        id: 'q4-1',
        question: "What does 'keeping someone in arrears' mean in this context?",
        options: [
          "Paying them late",
          "Keeping them dependent on you",
          "Keeping financial records",
          "Making them angry"
        ],
        correctAnswer: 1,
        explanation: "Keeping someone in arrears means maintaining a dynamic where they owe you or depend on you, ensuring their loyalty."
      }
    ]
  },
  {
    id: 'law-5',
    number: 5,
    title: "Prey on the Weak",
    subtitle: "Target vulnerability",
    category: 'strategy',
    theLife: "Ken observed that the most successful predators don't hunt the strongest prey. They target the weak, the injured, the isolated. In the game, this meant finding women with low self-esteem, with troubled pasts, with nowhere else to turn. It sounds cruel, but nature is cruel. The lion doesn't attack the healthiest gazelle. Success comes from identifying weakness and exploiting it.",
    theIsm: "Strength respects strength, but power exploits weakness. Every person has vulnerabilities - insecurities, fears, needs. Those who understand human weakness and can address it hold immense power. This is not about cruelty; it's about understanding human nature.",
    takeaways: [
      "Identify vulnerabilities in others",
      "Weakness creates opportunity",
      "Address others' insecurities to gain control",
      "Don't waste energy on strong opponents"
    ],
    examples: [
      {
        title: "The Market Opportunity",
        content: "Successful businesses identify underserved markets - people whose needs aren't being met. They target these gaps rather than competing head-on with established players.",
        context: "business"
      },
      {
        title: "The Political Coalition",
        content: "Politicians build coalitions by identifying what different groups need and promising to deliver it. They prey on the vulnerabilities of each constituency.",
        context: "power"
      }
    ],
    reflection: "What vulnerabilities do people try to exploit in you? How can you strengthen these areas?",
    quiz: [
      {
        id: 'q5-1',
        question: "Why do successful predators target the weak?",
        options: [
          "They enjoy cruelty",
          "It's more efficient and less risky",
          "The weak deserve it",
          "It's a random choice"
        ],
        correctAnswer: 1,
        explanation: "Targeting weakness is more efficient - it requires less energy and carries less risk than attacking strength."
      }
    ]
  },
  {
    id: 'law-6',
    number: 6,
    title: "When Pimpin' Begins, Friendship Ends",
    subtitle: "Business over bonds",
    category: 'power',
    theLife: "Ken learned this lesson the hard way. He had a friend named Aquarius they called him. They came up together, shared everything, trusted each other completely. But when Ken got a new girl named Bridgette, and she started making real money, Aquarius couldn't resist. He started making moves on her, trying to turn her against Ken. In the game, friendship is a luxury you cannot afford. Money changes everything.",
    theIsm: "Friendship and business are oil and water - they don't mix. When significant money is involved, loyalty shifts. The person who trusts friendship over business fundamentals will be betrayed. Keep your friends separate from your money.",
    takeaways: [
      "Money corrupts friendships",
      "Never mix business with personal bonds",
      "Trust is expensive; verify everything",
      "In business, everyone has a price"
    ],
    examples: [
      {
        title: "The Family Business",
        content: "Family businesses often fail because blood ties are expected to override business sense. Clear contracts and boundaries are essential, even with family.",
        context: "business"
      },
      {
        title: "The Partnership Dissolution",
        content: "Best friends who start companies together often end as enemies. The business relationship exposes and amplifies every personal difference.",
        context: "business"
      }
    ],
    reflection: "Have you ever mixed friendship with business? What was the outcome?",
    quiz: [
      {
        id: 'q6-1',
        question: "Why does friendship end when pimping/business begins?",
        options: [
          "People become too busy",
          "Money changes loyalties and priorities",
          "Friends make bad business partners",
          "It's a cultural rule"
        ],
        correctAnswer: 1,
        explanation: "When significant money enters the picture, people's loyalties shift from friendship to financial self-interest."
      }
    ]
  },
  {
    id: 'law-7',
    number: 7,
    title: "Pimp the Game",
    subtitle: "Control the system",
    category: 'power',
    theLife: "Ken looked up to Don King, the boxing promoter who went from numbers runner to the most powerful man in boxing. Don King didn't just play the game - he pimped the game itself. He controlled the fighters, the promoters, the television networks. When you control the system, you don't worry about the rules - you make the rules. Ken organized the Players Ball, creating his own platform where he set the terms.",
    theIsm: "Don't just participate in systems - control them. The real power is in setting the rules, controlling the platforms, and defining the terms. When you own the game, everyone else is just playing in your arena.",
    takeaways: [
      "Don't just play the game - control it",
      "Create platforms where you set the rules",
      "Build systems that others depend on",
      "The game owner always wins"
    ],
    examples: [
      {
        title: "The Platform Owner",
        content: "Amazon doesn't just sell products - it owns the marketplace where everyone else sells. They set the rules, take a cut, and control the platform.",
        context: "business"
      },
      {
        title: "The Industry Standard",
        content: "Microsoft created Windows, the operating system that became the standard. By controlling the platform, they controlled the entire ecosystem.",
        context: "business"
      }
    ],
    reflection: "What systems are you participating in that you could instead control or create?",
    quiz: [
      {
        id: 'q7-1',
        question: "What does it mean to 'pimp the game'?",
        options: [
          "Cheat at the game",
          "Control the system itself",
          "Play better than others",
          "Quit the game"
        ],
        correctAnswer: 1,
        explanation: "Pimping the game means controlling the system, platform, or rules rather than just participating within them."
      }
    ]
  },
  {
    id: 'law-8',
    number: 8,
    title: "Don't Let Your History Be a Mystery",
    subtitle: "Build your legacy",
    category: 'power',
    theLife: "Ken's father taught him that a man is remembered by what he leaves behind. Every year, Ken throws the biggest birthday party in the game. Not because he loves parties, but because he understands legacy. When you're gone, what will people say about you? Will they remember your name? Will they tell stories of your accomplishments? A mystery man is a forgotten man. Make sure your history is known.",
    theIsm: "Legacy is immortality. The stories told about you after you're gone are your true measure. Document your wins, celebrate your successes, and ensure your contributions are remembered. An unknown history is no history at all.",
    takeaways: [
      "Your legacy is your immortality",
      "Document and celebrate your wins",
      "Make sure your contributions are known",
      "Mystery leads to being forgotten"
    ],
    examples: [
      {
        title: "The Personal Brand",
        content: "Successful people cultivate their public image deliberately. They write books, give interviews, and ensure their story is told their way.",
        context: "power"
      },
      {
        title: "The Company History",
        content: "Great companies maintain museums, publish histories, and celebrate their founding stories. This legacy builds brand value that outlives any product.",
        context: "business"
      }
    ],
    reflection: "What will people say about you when you're gone? What legacy are you building?",
    quiz: [
      {
        id: 'q8-1',
        question: "Why shouldn't your history be a mystery?",
        options: [
          "It's required by law",
          "Being unknown means being forgotten",
          "Mystery is scary",
          "People will make up stories"
        ],
        correctAnswer: 1,
        explanation: "If your history is unknown or mysterious, you won't be remembered after you're gone. Legacy requires documentation."
      }
    ]
  },
  {
    id: 'law-9',
    number: 9,
    title: "Learn the Rules",
    subtitle: "Master the fundamentals",
    category: 'strategy',
    theLife: "Ken joined the National Pimpin' Association not because he needed friends, but because he needed to learn the rules. Every game has rules - written and unwritten. The ones who succeed are those who master both. You can't win at chess if you don't know how the pieces move. You can't succeed in any game without understanding its rules. Knowledge is the foundation of power.",
    theIsm: "Every system operates by rules. The written rules are the minimum; the unwritten rules are where true power lies. Study the game, learn from those who came before, and never stop learning. Ignorance of the rules is a choice to lose.",
    takeaways: [
      "Every game has written and unwritten rules",
      "Knowledge of rules is power",
      "Learn from those who came before",
      "Never stop studying the game"
    ],
    examples: [
      {
        title: "The Corporate Ladder",
        content: "Successful executives understand both the official policies and the unwritten culture. They know who really makes decisions and how things actually get done.",
        context: "business"
      },
      {
        title: "The Legal System",
        content: "The best lawyers don't just know the law - they know the judges, the procedures, and the unwritten rules of the courtroom.",
        context: "power"
      }
    ],
    reflection: "What are the unwritten rules in your industry or social circle? Are you following them?",
    quiz: [
      {
        id: 'q9-1',
        question: "Why is learning the rules important?",
        options: [
          "To avoid breaking them",
          "To understand how to win the game",
          "It's required by law",
          "Rules are interesting"
        ],
        correctAnswer: 1,
        explanation: "Understanding the rules - both written and unwritten - is essential for succeeding in any system or game."
      }
    ]
  },
  {
    id: 'law-10',
    number: 10,
    title: "Plan Your Work and Work Your Plan",
    subtitle: "Strategic execution",
    category: 'strategy',
    theLife: "Ken never made a move without a plan. Every party, every encounter, every business deal was mapped out in advance. He knew exactly what he wanted, exactly how to get it, and exactly what he'd do if things went wrong. Most people fail not because they lack ability, but because they lack planning. A good plan executed well beats a perfect plan never executed.",
    theIsm: "Success is 90% preparation and 10% execution. The person who plans ahead controls the future. Have a vision, create a strategy, and execute with discipline. Adapt when necessary, but never operate without a plan.",
    takeaways: [
      "Success requires planning",
      "Have a clear vision and strategy",
      "Execute with discipline",
      "Adapt plans but never operate without one"
    ],
    examples: [
      {
        title: "The Business Plan",
        content: "Successful entrepreneurs don't just start businesses - they create detailed plans covering market analysis, financial projections, and execution strategies.",
        context: "business"
      },
      {
        title: "The Career Roadmap",
        content: "High achievers map out their career years in advance. They know what skills they need, what positions they want, and how to get there.",
        context: "business"
      }
    ],
    reflection: "Do you have a clear plan for your goals? Or are you operating day-to-day without direction?",
    quiz: [
      {
        id: 'q10-1',
        question: "What is the key message of this law?",
        options: [
          "Work hard every day",
          "Plan first, then execute with discipline",
          "Plans are useless",
          "Work is more important than planning"
        ],
        correctAnswer: 1,
        explanation: "The law emphasizes both planning and execution - having a strategy and then working it with discipline."
      }
    ]
  },
  {
    id: 'law-11',
    number: 11,
    title: "Avoid Gorillas and Godzillas",
    subtitle: "Know your battles",
    category: 'strategy',
    theLife: "In the game, there are different types of people. Some are smooth operators who use their minds. Others are Gorillas - violent, unpredictable, dangerous. And then there are Godzillas - the truly unhinged who will burn everything down. Ken learned to identify these types quickly and avoid them. You can't reason with a gorilla, and you can't predict a Godzilla. The only winning move is not to play.",
    theIsm: "Not every battle is worth fighting, and not every opponent can be defeated. Some people operate by rules so different from yours that engagement is suicide. Identify the irrational, the violent, and the unstable - and stay far away from them.",
    takeaways: [
      "Not all opponents can be reasoned with",
      "Avoid irrational and violent people",
      "Choose your battles wisely",
      "Sometimes the only winning move is not to play"
    ],
    examples: [
      {
        title: "The Toxic Client",
        content: "Some clients are so demanding, unreasonable, and toxic that no amount of money is worth the damage they cause. Smart businesses fire these clients.",
        context: "business"
      },
      {
        title: "The Online Troll",
        content: "Engaging with internet trolls gives them power. The best strategy is to ignore them completely rather than trying to win an unwinnable argument.",
        context: "power"
      }
    ],
    reflection: "Who are the Gorillas and Godzillas in your life? Are you engaging with them unnecessarily?",
    quiz: [
      {
        id: 'q11-1',
        question: "What should you do with Gorillas and Godzillas?",
        options: [
          "Try to reason with them",
          "Avoid them completely",
          "Fight them and win",
          "Convert them to your side"
        ],
        correctAnswer: 1,
        explanation: "Gorillas (violent) and Godzillas (unhinged) cannot be reasoned with. The only smart move is to avoid them entirely."
      }
    ]
  },
  {
    id: 'law-12',
    number: 12,
    title: "Ain't No Love in This Shit",
    subtitle: "Emotion is weakness",
    category: 'mindset',
    theLife: "Sly was a pimp who fell in love with one of his girls. He told her he loved her, treated her special, broke all the rules for her. And you know what happened? She lost respect for him. She started holding back money, talking back, eventually left him for another pimp. In the game, love is a liability. Emotions cloud judgment. The moment you catch feelings, you lose your edge.",
    theIsm: "Love and business are incompatible. Emotions make you predictable, vulnerable, and weak. The professional maintains emotional distance. This doesn't mean being cruel - it means being clear-eyed about the nature of the relationship.",
    takeaways: [
      "Emotions cloud business judgment",
      "Love makes you vulnerable",
      "Maintain professional distance",
      "Feelings are expensive in the game"
    ],
    examples: [
      {
        title: "The Bad Hire",
        content: "Managers often hire people they like personally rather than the best candidate. This emotional decision costs the company productivity and money.",
        context: "business"
      },
      {
        title: "The Bad Investment",
        content: "Investors fall in love with companies and hold on too long. Emotional attachment to investments leads to poor financial decisions.",
        context: "business"
      }
    ],
    reflection: "Where in your life are emotions clouding your business or strategic judgment?",
    quiz: [
      {
        id: 'q12-1',
        question: "Why is love/emotion considered weakness in the game?",
        options: [
          "Love is always bad",
          "Emotions cloud judgment and make you vulnerable",
          "It's against the rules",
          "Love doesn't exist"
        ],
        correctAnswer: 1,
        explanation: "Emotions, including love, make you predictable and vulnerable in situations requiring clear strategic thinking."
      }
    ]
  },
  {
    id: 'law-13',
    number: 13,
    title: "Pimp Like You're Ho-less",
    subtitle: "Independence is power",
    category: 'mindset',
    theLife: "The best pimps Ken knew operated as if they didn't need any particular girl. They had options, they had confidence, they had a life beyond the game. This attitude - of being complete regardless of who stayed or left - made them magnetic. People want what they can't have, and they definitely want what doesn't need them. Neediness repels; independence attracts.",
    theIsm: "True power comes from being complete in yourself. When you don't need anyone, everyone wants you. Operate from a position of abundance and independence. The moment you appear needy, you hand over all your power.",
    takeaways: [
      "Neediness repels opportunities",
      "Independence attracts people and power",
      "Operate from abundance, not scarcity",
      "Be complete regardless of who stays or leaves"
    ],
    examples: [
      {
        title: "The Confident Negotiator",
        content: "The best negotiators genuinely don't need the deal. This willingness to walk away gives them enormous leverage and often gets them better terms.",
        context: "business"
      },
      {
        title: "The Desirable Single",
        content: "People who are happy single often attract the best partners. Their independence signals confidence and completeness that others find attractive.",
        context: "relationships"
      }
    ],
    reflection: "In what areas of your life do you appear needy? How can you cultivate genuine independence?",
    quiz: [
      {
        id: 'q13-1',
        question: "What does 'pimp like you're ho-less' mean?",
        options: [
          "Don't have any employees",
          "Operate with independence and abundance",
          "Be lonely",
          "Fire everyone"
        ],
        correctAnswer: 1,
        explanation: "It means operating from a position of not needing anyone, which paradoxically makes you more attractive and powerful."
      }
    ]
  },
  {
    id: 'law-14',
    number: 14,
    title: "Better a Turnout Than a Burnout",
    subtitle: "Sustainability over intensity",
    category: 'mindset',
    theLife: "Ken saw too many young pimps come into the game hot - spending all their money, partying every night, burning the candle at both ends. Within months or years, they were broke, strung out, or dead. The old heads who lasted decades? They paced themselves. They understood that this is a marathon, not a sprint. Better to turn out consistent results for years than to burn bright and fade fast.",
    theIsm: "Sustainability beats intensity. The tortoise beats the hare. Pace yourself, manage your resources, and think long-term. A career that lasts decades beats a flash that lasts months. Protect your energy, your health, and your resources.",
    takeaways: [
      "Sustainability beats intensity",
      "Think long-term, not just today",
      "Pace yourself for the marathon",
      "Protect your energy and resources"
    ],
    examples: [
      {
        title: "The Startup Grind",
        content: "Startups that encourage 80-hour weeks often burn out their best people. Companies that prioritize sustainable pace retain talent longer and build better products.",
        context: "business"
      },
      {
        title: "The Athlete's Career",
        content: "The best athletes have long careers because they manage their bodies, rest properly, and avoid overtraining. Those who go all-out often have short careers.",
        context: "general"
      }
    ],
    reflection: "Are you operating sustainably, or are you at risk of burning out? What needs to change?",
    quiz: [
      {
        id: 'q14-1',
        question: "What does 'Better a Turnout Than a Burnout' mean?",
        options: [
          "It's better to quit than to fail",
          "Sustainable pace beats intense but short effort",
          "Turnout is more important than performance",
          "Burning things is bad"
        ],
        correctAnswer: 1,
        explanation: "The law emphasizes that consistent, sustainable effort over time is better than intense effort that leads to quick burnout."
      }
    ]
  },
  {
    id: 'law-15',
    number: 15,
    title: "Say What You Mean and Mean What You Say",
    subtitle: "Integrity in communication",
    category: 'power',
    theLife: "Ken's word was his bond. When he said something, people knew it would happen. This reputation meant that his threats were taken seriously and his promises were valued. A man who says one thing and does another quickly becomes a joke. But a man who speaks with conviction and follows through commands respect without having to demand it.",
    theIsm: "Your words are your weapons. Use them precisely and follow through completely. Empty threats make you weak; broken promises make you untrustworthy. Speak deliberately and execute completely. Let your consistency build your reputation.",
    takeaways: [
      "Your word is your bond",
      "Empty threats weaken you",
      "Follow-through builds reputation",
      "Speak deliberately and precisely"
    ],
    examples: [
      {
        title: "The Reliable Leader",
        content: "Leaders who consistently follow through on commitments build teams that trust them completely. This trust becomes their greatest asset.",
        context: "business"
      },
      {
        title: "The Empty Threat",
        content: "Parents who threaten consequences but never follow through lose authority. Their children learn that words don't matter, only actions do.",
        context: "general"
      }
    ],
    reflection: "Do people trust your word? When you say something, do others believe it will happen?",
    quiz: [
      {
        id: 'q15-1',
        question: "Why is saying what you mean and meaning what you say important?",
        options: [
          "It's polite",
          "It builds trust and reputation",
          "People will like you more",
          "It's required by law"
        ],
        correctAnswer: 1,
        explanation: "Following through on your words builds trust and reputation, which are essential for long-term power and influence."
      }
    ]
  },
  {
    id: 'law-16',
    number: 16,
    title: "Give Motivation and Inspiration",
    subtitle: "Lead through elevation",
    category: 'influence',
    theLife: "The best pimps Ken knew weren't just demanding - they were inspiring. They made their girls believe in something bigger than themselves. They painted pictures of success, of travel, of a life worth working for. People will work for money, but they'll die for a vision. The leader who can inspire creates followers who are devoted, not just compliant.",
    theIsm: "People need more than instructions - they need inspiration. The leader who can paint a compelling vision creates followers who are devoted, not just obedient. Motivation gets people moving; inspiration keeps them going when things get hard.",
    takeaways: [
      "Inspiration creates devotion",
      "Paint a compelling vision",
      "People work for money but die for vision",
      "Elevate those who follow you"
    ],
    examples: [
      {
        title: "The Visionary CEO",
        content: "Steve Jobs didn't just sell computers - he sold the idea of changing the world. Employees worked brutal hours not for the money, but because they believed in the vision.",
        context: "business"
      },
      {
        title: "The Movement Leader",
        content: "Martin Luther King Jr. inspired millions not with threats or payments, but with a vision of a better future that people were willing to sacrifice for.",
        context: "power"
      }
    ],
    reflection: "What vision are you offering to those who follow you? Is it compelling enough to inspire devotion?",
    quiz: [
      {
        id: 'q16-1',
        question: "Why is giving motivation and inspiration important?",
        options: [
          "It makes you popular",
          "It creates devoted followers, not just compliant ones",
          "It's easier than paying people",
          "People expect it"
        ],
        correctAnswer: 1,
        explanation: "Inspiration creates followers who are devoted and willing to go above and beyond, not just those who do the minimum."
      }
    ]
  },
  {
    id: 'law-17',
    number: 17,
    title: "Get You a Bottom Bitch",
    subtitle: "Build your foundation",
    category: 'strategy',
    theLife: "Every successful pimp had a bottom bitch - the one who was with him from the beginning, who knew the game inside and out, who could train the new girls and handle business when he wasn't around. She was his lieutenant, his foundation, his insurance policy. Without a solid foundation, the whole structure crumbles.",
    theIsm: "Every empire needs a foundation. Find your right hand, your lieutenant, your trusted second-in-command. This person should be capable, loyal, and invested in your success. With a strong foundation, you can build anything. Without it, everything is fragile.",
    takeaways: [
      "Every empire needs a foundation",
      "Find a capable and loyal lieutenant",
      "Your second-in-command is crucial",
      "Build from a solid base"
    ],
    examples: [
      {
        title: "The COO",
        content: "Every successful CEO has a strong COO who handles operations while the CEO focuses on vision. This partnership is the foundation of company success.",
        context: "business"
      },
      {
        title: "The Campaign Manager",
        content: "Successful politicians have a trusted campaign manager who handles the day-to-day while the candidate focuses on messaging and appearances.",
        context: "power"
      }
    ],
    reflection: "Who is your bottom bitch - your trusted lieutenant? Do you have a solid foundation?",
    quiz: [
      {
        id: 'q17-1',
        question: "What is the role of a 'bottom bitch'?",
        options: [
          "To make money",
          "To be the foundation and lieutenant",
          "To do all the work",
          "To be the favorite"
        ],
        correctAnswer: 1,
        explanation: "The bottom bitch is the trusted foundation - the lieutenant who handles business and supports the leader's vision."
      }
    ]
  },
  {
    id: 'law-18',
    number: 18,
    title: "Cop and Blow",
    subtitle: "Know when to exit",
    category: 'strategy',
    theLife: "Ken watched pimps who stayed too long, who didn't know when to quit, who kept pushing until the law caught up with them or a rival took them out. The smart ones knew when to cop and blow - to take what they'd earned and leave the game. There's no shame in walking away with your money, your health, and your freedom intact.",
    theIsm: "Every game has an expiration date. The wise player knows when to exit. Greed keeps people in too long. Know when you've won, take your earnings, and walk away. A smaller win you keep is better than a bigger win you lose.",
    takeaways: [
      "Every game has an expiration date",
      "Know when to exit",
      "Greed keeps people in too long",
      "A win you keep beats a bigger win you lose"
    ],
    examples: [
      {
        title: "The IPO Exit",
        content: "Smart founders sell some shares at IPO rather than holding everything. They secure their wealth instead of risking it all on future performance.",
        context: "business"
      },
      {
        title: "The Athlete's Retirement",
        content: "Athletes who retire at their peak preserve their health and legacy. Those who stay too long often damage both.",
        context: "general"
      }
    ],
    reflection: "Are you staying in any games too long? Do you have an exit strategy?",
    quiz: [
      {
        id: 'q18-1',
        question: "What does 'Cop and Blow' mean?",
        options: [
          "Steal and run",
          "Take your winnings and exit",
          "Get caught by police",
          "Spend all your money"
        ],
        correctAnswer: 1,
        explanation: "It means knowing when to take your earnings and exit the game before you lose everything."
      }
    ]
  },
  {
    id: 'law-19',
    number: 19,
    title: "Turn Ho Ends into Dividends",
    subtitle: "Invest for the future",
    category: 'wealth',
    theLife: "Ken saw pimps who spent every dollar they made on cars, clothes, and parties. They looked rich but had nothing. The smart ones invested - in property, in businesses, in things that would make money while they slept. Today's earnings should build tomorrow's wealth. Don't just make money; make money make money.",
    theIsm: "Income is not wealth. The person who spends everything they earn is a slave to their income. The person who invests creates freedom. Turn active income into passive income. Build assets that appreciate and generate returns.",
    takeaways: [
      "Income is not wealth",
      "Invest in assets, not liabilities",
      "Create passive income streams",
      "Make money work for you"
    ],
    examples: [
      {
        title: "The Investor Mindset",
        content: "Wealthy people buy assets first (stocks, real estate, businesses) and luxuries second. Poor people buy luxuries first and never accumulate assets.",
        context: "business"
      },
      {
        title: "The Business Owner",
        content: "Instead of spending profits, smart business owners reinvest in growth, creating systems that generate more revenue without more effort.",
        context: "business"
      }
    ],
    reflection: "Are you spending your earnings or investing them? What assets are you building?",
    quiz: [
      {
        id: 'q19-1',
        question: "What is the difference between income and wealth?",
        options: [
          "Income is monthly, wealth is yearly",
          "Income is what you earn, wealth is what you keep and grow",
          "There is no difference",
          "Income is legal, wealth is not"
        ],
        correctAnswer: 1,
        explanation: "Income is what you earn; wealth is what you accumulate through saving and investing."
      }
    ]
  },
  {
    id: 'law-20',
    number: 20,
    title: "Get in a Ho's Head",
    subtitle: "Master psychology",
    category: 'influence',
    theLife: "The best pimps weren't the strongest or the richest - they were the ones who understood people. They knew what their girls feared, what they dreamed, what they needed. They could read a person in minutes and know exactly how to motivate them. Power is psychological. The battle is won in the mind before it's ever fought in the world.",
    theIsm: "Understanding human psychology is the ultimate power. When you know what drives people - their fears, desires, insecurities - you can motivate them to do almost anything. The mind is the battlefield. Win there, and you win everywhere.",
    takeaways: [
      "Power is psychological",
      "Understand what drives people",
      "Read people quickly and accurately",
      "The mind is the real battlefield"
    ],
    examples: [
      {
        title: "The Sales Master",
        content: "Top salespeople don't sell products - they sell solutions to emotional needs. They understand that people buy based on emotion and justify with logic.",
        context: "business"
      },
      {
        title: "The Political Strategist",
        content: "Political campaigns are won by understanding voter psychology - what fears to tap, what hopes to inspire, what identity to appeal to.",
        context: "power"
      }
    ],
    reflection: "How well do you understand the psychology of those around you? What drives their decisions?",
    quiz: [
      {
        id: 'q20-1',
        question: "Why is getting in someone's head important?",
        options: [
          "To manipulate them",
          "To understand and influence their behavior",
          "To confuse them",
          "To win arguments"
        ],
        correctAnswer: 1,
        explanation: "Understanding psychology allows you to understand what drives people and influence their behavior effectively."
      }
    ]
  },
  {
    id: 'law-21',
    number: 21,
    title: "A Ho Without Instruction Is Headed for Self-Destruction",
    subtitle: "Guide or lose",
    category: 'strategy',
    theLife: "Ken learned early that you can't just collect people and expect them to succeed. They need training, guidance, clear expectations. A girl without instruction doesn't know the rules, doesn't know the game, doesn't know how to win. She'll make mistakes that cost everyone. The leader who doesn't teach is the leader who fails.",
    theIsm: "People need direction to succeed. Clear instruction, training, and guidance are not optional - they're essential. The investment you make in teaching others pays dividends in their performance. An untrained team is a liability.",
    takeaways: [
      "People need direction to succeed",
      "Invest in training and guidance",
      "Clear expectations prevent mistakes",
      "Teaching others is an investment"
    ],
    examples: [
      {
        title: "The Onboarding Process",
        content: "Companies with strong onboarding programs have higher retention and productivity. Employees who understand expectations perform better.",
        context: "business"
      },
      {
        title: "The Sports Coach",
        content: "Great coaches don't just recruit talent - they develop it through constant instruction, feedback, and guidance.",
        context: "general"
      }
    ],
    reflection: "Are you providing clear instruction to those who work with you? Or expecting them to figure it out?",
    quiz: [
      {
        id: 'q21-1',
        question: "Why is instruction important?",
        options: [
          "It's required by law",
          "Without guidance, people fail",
          "It shows you're the boss",
          "It takes up time"
        ],
        correctAnswer: 1,
        explanation: "Without clear instruction and guidance, people don't know how to succeed and will make costly mistakes."
      }
    ]
  },
  {
    id: 'law-22',
    number: 22,
    title: "Keep Hoes on Their Toes",
    subtitle: "Maintain uncertainty",
    category: 'control',
    theLife: "Predictability breeds complacency. Ken knew that if his girls knew exactly what to expect, they'd get comfortable, lazy, take things for granted. So he kept them guessing - sometimes generous, sometimes demanding, always unpredictable. Uncertainty keeps people alert, working hard, never getting too comfortable.",
    theIsm: "Predictability is the enemy of control. When people know exactly what to expect, they optimize for the minimum. Keep them uncertain about what's next, and they'll always give their best. A little unpredictability maintains the edge.",
    takeaways: [
      "Predictability breeds complacency",
      "Uncertainty keeps people alert",
      "Don't let others get too comfortable",
      "Strategic unpredictability maintains control"
    ],
    examples: [
      {
        title: "The Variable Reward",
        content: "Casinos use variable reward schedules to keep people gambling. The unpredictability of wins is more addictive than consistent small rewards.",
        context: "business"
      },
      {
        title: "The Manager's Review",
        content: "Managers who give feedback at unpredictable times keep employees performing consistently well, rather than just before scheduled reviews.",
        context: "business"
      }
    ],
    reflection: "Are you too predictable? How might strategic unpredictability improve your relationships or business?",
    quiz: [
      {
        id: 'q22-1',
        question: "Why should you keep people on their toes?",
        options: [
          "To be mean",
          "To prevent complacency",
          "To confuse them",
          "To show power"
        ],
        correctAnswer: 1,
        explanation: "Predictability leads to complacency. Strategic uncertainty keeps people alert and performing at their best."
      }
    ]
  },
  {
    id: 'law-23',
    number: 23,
    title: "A Ho Joins a Stable to Ruin It",
    subtitle: "Beware hidden agendas",
    category: 'strategy',
    theLife: "Ken understood that every new person who joined his stable came with their own agenda. Some wanted to learn the game. Some wanted to undermine the others. Some wanted to get close to him. A group of women sharing one man is inherently unstable - jealousy, competition, and sabotage are inevitable. The leader who doesn't watch for this is a leader who will be undermined.",
    theIsm: "Newcomers always have agendas. Some want to rise; some want to bring others down. Group dynamics are inherently unstable. Watch for the saboteurs, the jealous, and the ambitious. Protect the group's cohesion actively, or it will dissolve.",
    takeaways: [
      "Newcomers have hidden agendas",
      "Group dynamics are unstable",
      "Watch for saboteurs and jealous competitors",
      "Actively protect group cohesion"
    ],
    examples: [
      {
        title: "The Toxic Hire",
        content: "Some employees join companies specifically to undermine colleagues, steal clients, or advance at others' expense. Due diligence is essential.",
        context: "business"
      },
      {
        title: "The Political Rival",
        content: "Political allies often have hidden agendas. Today's ally might be undermining you tomorrow for their own advancement.",
        context: "power"
      }
    ],
    reflection: "What hidden agendas might exist in your team or social circle? Are you watching for them?",
    quiz: [
      {
        id: 'q23-1',
        question: "Why should you be wary of newcomers?",
        options: [
          "They're always bad",
          "They may have hidden agendas",
          "You should never trust anyone",
          "They're inexperienced"
        ],
        correctAnswer: 1,
        explanation: "Newcomers often have their own agendas that may not align with the group's best interests."
      }
    ]
  },
  {
    id: 'law-24',
    number: 24,
    title: "Set the Trend",
    subtitle: "Be the leader",
    category: 'power',
    theLife: "Ken didn't follow fashion - he created it. When he started wearing three-piece suits instead of the typical pimp attire, others followed. When he started throwing Players Balls, others copied. True leaders don't imitate; they innovate. The trendsetter is always ahead, always superior, always the one others are trying to catch up to.",
    theIsm: "Followers imitate; leaders create. When you set the trend, you define the standard. Others are always playing catch-up while you're moving forward. Innovation beats imitation every time. Be the source, not the reflection.",
    takeaways: [
      "Don't follow - lead",
      "Trendsetters define the standard",
      "Innovation beats imitation",
      "Be the source, not the reflection"
    ],
    examples: [
      {
        title: "Apple's Innovation",
        content: "Apple doesn't follow tech trends - it creates them. The iPhone, iPad, and AirPods were all category-defining products that others rushed to copy.",
        context: "business"
      },
      {
        title: "Fashion Icons",
        content: "True fashion icons create styles that others adopt. They don't follow what's in - they decide what's in.",
        context: "general"
      }
    ],
    reflection: "Are you following trends or setting them? What could you innovate in your field?",
    quiz: [
      {
        id: 'q24-1',
        question: "Why is setting trends better than following them?",
        options: [
          "It's more fun",
          "Trendsetters lead while others follow",
          "Following is illegal",
          "Trends are bad"
        ],
        correctAnswer: 1,
        explanation: "Setting trends puts you in the leadership position while others are always trying to catch up to you."
      }
    ]
  },
  {
    id: 'law-25',
    number: 25,
    title: "Grind for Your Shine",
    subtitle: "Work for success",
    category: 'mindset',
    theLife: "Ken saw young pimps who wanted the flashy cars, the expensive clothes, and the respect without putting in the work. They wanted to shine without grinding. But Ken knew that real success comes from grinding - from the late nights, the hard conversations, the constant hustle. The shine is the reward for the grind, not a substitute for it.",
    theIsm: "Success requires work. The flashy lifestyle everyone sees is built on countless hours of effort no one sees. Don't chase the appearance of success - chase the substance. The grind comes first; the shine follows.",
    takeaways: [
      "Success requires hard work",
      "The shine follows the grind",
      "Don't chase appearances",
      "Put in the work first"
    ],
    examples: [
      {
        title: "The Overnight Success",
        content: "Most 'overnight successes' spent years grinding in obscurity. The public sees the shine; they don't see the decade of work that preceded it.",
        context: "business"
      },
      {
        title: "The Athlete's Training",
        content: "Champions are made in practice, not in games. The hours of grinding when no one is watching determine success when everyone is.",
        context: "general"
      }
    ],
    reflection: "Are you putting in the grind, or just wanting the shine? What work are you avoiding?",
    quiz: [
      {
        id: 'q25-1',
        question: "What does 'Grind for Your Shine' mean?",
        options: [
          "Polish your shoes",
          "Work hard first, success follows",
          "Shine is more important than work",
          "Grinding is bad"
        ],
        correctAnswer: 1,
        explanation: "The law means you must put in the hard work (grind) before you can enjoy the rewards (shine)."
      }
    ]
  },
  {
    id: 'law-26',
    number: 26,
    title: "The Game Is to Be Sold, Not Told",
    subtitle: "Value your knowledge",
    category: 'wealth',
    theLife: "Ken learned this from the old heads. They wouldn't just give away the game - they sold it. Books, seminars, mentorship - everything had a price. Knowledge is valuable, and giving it away cheapens it. When people pay for knowledge, they value it more and use it better. Free advice is ignored; purchased wisdom is applied.",
    theIsm: "Your knowledge and experience have value. Don't give them away for free. When people invest in learning, they take it seriously. Charge for your expertise - it benefits both you and those who pay for it.",
    takeaways: [
      "Knowledge has value",
      "Don't give away expertise for free",
      "Paid knowledge is valued more",
      "Charge for your experience"
    ],
    examples: [
      {
        title: "The Consultant's Fee",
        content: "Consultants who charge premium rates are taken more seriously than those who work cheap. The price signals value.",
        context: "business"
      },
      {
        title: "The Course Creator",
        content: "People who pay for courses complete them at much higher rates than those who take free courses. Investment creates commitment.",
        context: "business"
      }
    ],
    reflection: "Are you giving away your expertise too cheaply? What knowledge could you monetize?",
    quiz: [
      {
        id: 'q26-1',
        question: "Why should the game be sold, not told?",
        options: [
          "To make money",
          "People value what they pay for",
          "Free advice is worthless",
          "Telling is illegal"
        ],
        correctAnswer: 1,
        explanation: "When people pay for knowledge, they value it more and are more likely to apply it effectively."
      }
    ]
  },
  {
    id: 'law-27',
    number: 27,
    title: "Keep Your Game on the Low",
    subtitle: "Stealth is strength",
    category: 'strategy',
    theLife: "Ken noticed that the pimps who flashed the most, talked the loudest, and showed off the hardest were the ones who got caught, robbed, or taken down. The real players moved quietly. They didn't need to advertise their success because their success spoke for itself. The less people know about your business, the safer you are.",
    theIsm: "Visibility creates vulnerability. The more people know about your moves, your money, and your methods, the more exposed you are. Move in silence. Let your results make the noise. Stealth is a form of protection.",
    takeaways: [
      "Visibility creates vulnerability",
      "Move quietly and let results speak",
      "The less people know, the safer you are",
      "Stealth is protection"
    ],
    examples: [
      {
        title: "The Silent Investor",
        content: "The best investors often keep their positions quiet until they've built their stake. Public knowledge can move markets against them.",
        context: "business"
      },
      {
        title: "The Private Billionaire",
        content: "Many ultra-wealthy people live quietly, avoiding publicity. They understand that attention brings complications.",
        context: "wealth"
      }
    ],
    reflection: "Are you showing off too much? What could you keep quieter for your own protection?",
    quiz: [
      {
        id: 'q27-1',
        question: "Why keep your game on the low?",
        options: [
          "It's more fun",
          "Visibility creates vulnerability",
          "People will be impressed",
          "It's required"
        ],
        correctAnswer: 1,
        explanation: "The more visible you are, the more exposed and vulnerable you become to competitors and threats."
      }
    ]
  },
  {
    id: 'law-28',
    number: 28,
    title: "Be a Leader",
    subtitle: "Lead by example",
    category: 'power',
    theLife: "Ken knew that leadership wasn't about barking orders - it was about setting the standard. The pimps who led by example, who worked harder than their girls, who held themselves to higher standards, were the ones who commanded real respect. Authority comes from demonstrating excellence, not demanding it.",
    theIsm: "True leadership is earned, not given. You lead by example, by demonstrating the standards you expect, by being the first to do what others won't. Authority without example is just empty demands.",
    takeaways: [
      "Lead by example, not just orders",
      "Demonstrate the standards you expect",
      "Work harder than those you lead",
      "Authority is earned through excellence"
    ],
    examples: [
      {
        title: "The CEO Who Works",
        content: "The most respected CEOs are often the first in and last out. Their work ethic sets the tone for the entire company.",
        context: "business"
      },
      {
        title: "The Military Officer",
        content: "Great military leaders lead from the front, sharing the hardships of their troops. This builds loyalty that commands cannot.",
        context: "power"
      }
    ],
    reflection: "Are you leading by example? Or just giving orders? What standard are you setting?",
    quiz: [
      {
        id: 'q28-1',
        question: "What makes a true leader?",
        options: [
          "Having the highest title",
          "Leading by example and excellence",
          "Giving the most orders",
          "Making the most money"
        ],
        correctAnswer: 1,
        explanation: "True leadership comes from demonstrating excellence and setting the standard, not just holding a position."
      }
    ]
  },
  {
    id: 'law-29',
    number: 29,
    title: "Play One Ho Against the Next",
    subtitle: "Use competition",
    category: 'strategy',
    theLife: "Ken maintained control by ensuring his girls competed for his attention, his favor, his resources. When they were focused on outdoing each other, they weren't focused on challenging him. Competition among followers keeps them working hard and prevents them from uniting against the leader. Divide and conquer is an ancient strategy for a reason.",
    theIsm: "Competition among followers benefits the leader. When people compete for your favor, they work harder and stay loyal. When they unite, they might turn on you. Strategic competition keeps everyone focused on pleasing you rather than challenging you.",
    takeaways: [
      "Competition among followers benefits the leader",
      "Prevent followers from uniting against you",
      "Use rivalry to maintain control",
      "Divide and conquer strategically"
    ],
    examples: [
      {
        title: "The Sales Competition",
        content: "Companies run sales contests to motivate teams. The competition drives performance while keeping focus on company goals.",
        context: "business"
      },
      {
        title: "The Cabinet Rivalry",
        content: "Smart political leaders encourage healthy competition among advisors. This prevents any one person from becoming too powerful.",
        context: "power"
      }
    ],
    reflection: "How might healthy competition benefit your team or relationships? Are you using it strategically?",
    quiz: [
      {
        id: 'q29-1',
        question: "Why play people against each other?",
        options: [
          "To be cruel",
          "Competition keeps followers focused on pleasing the leader",
          "It's entertaining",
          "To create chaos"
        ],
        correctAnswer: 1,
        explanation: "Strategic competition keeps followers working hard for your favor rather than uniting against you."
      }
    ]
  },
  {
    id: 'law-30',
    number: 30,
    title: "Prosperity Over Popularity",
    subtitle: "Results over image",
    category: 'wealth',
    theLife: "Ken saw pimps who were loved by everyone - the life of the party, always buying drinks, always the center of attention. But they were broke. Meanwhile, the quiet pimps who focused on their business were building real wealth. Popularity is expensive; prosperity is valuable. Don't trade real success for temporary admiration.",
    theIsm: "Popularity costs money and energy; prosperity creates both. The person focused on being liked makes decisions to please others. The person focused on success makes decisions that build wealth. Choose prosperity over popularity every time.",
    takeaways: [
      "Popularity is expensive",
      "Prosperity creates real value",
      "Don't trade success for admiration",
      "Focus on results, not image"
    ],
    examples: [
      {
        title: "The Frugal Millionaire",
        content: "Many millionaires live modestly, driving regular cars and avoiding flashy displays. They prioritize wealth building over appearance.",
        context: "wealth"
      },
      {
        title: "The Popular Startup Founder",
        content: "Founders who focus on being tech celebrities often neglect their businesses. The quiet founders build better companies.",
        context: "business"
      }
    ],
    reflection: "Are you prioritizing popularity or prosperity? What popularity expenses could you cut?",
    quiz: [
      {
        id: 'q30-1',
        question: "Why choose prosperity over popularity?",
        options: [
          "Popularity is bad",
          "Prosperity creates lasting value",
          "People are mean",
          "Money is everything"
        ],
        correctAnswer: 1,
        explanation: "Popularity is often expensive and temporary, while prosperity creates lasting value and security."
      }
    ]
  },
  {
    id: 'law-31',
    number: 31,
    title: "Look Out for Suzy Choosy",
    subtitle: "Beware the indecisive",
    category: 'strategy',
    theLife: "Ken learned to spot Suzy Choosy quickly - the woman who could never make a decision, who was always shopping around, who wanted to 'think about it.' These people waste your time, drain your energy, and rarely commit. The game rewards decisiveness. Spend your time on those who know what they want, not on those who are just browsing.",
    theIsm: "Time is your most valuable resource. Don't waste it on the indecisive, the perpetual shoppers, the ones who are 'just looking.' They consume your energy without producing results. Focus on those who are ready to commit and act.",
    takeaways: [
      "Time is your most valuable resource",
      "Avoid the perpetually indecisive",
      "Focus on those ready to commit",
      "Indecision wastes energy"
    ],
    examples: [
      {
        title: "The Tire-Kicker Client",
        content: "Salespeople learn to qualify prospects quickly. Those who are 'just looking' get minimal attention; those ready to buy get full focus.",
        context: "business"
      },
      {
        title: "The Job Shopper",
        content: "Candidates who are interviewing everywhere and 'exploring options' often waste employers' time. Serious candidates know what they want.",
        context: "business"
      }
    ],
    reflection: "Who in your life is wasting your time with indecision? How can you focus on those who are committed?",
    quiz: [
      {
        id: 'q31-1',
        question: "Why avoid Suzy Choosy types?",
        options: [
          "They're bad people",
          "They waste time without committing",
          "They ask too many questions",
          "They're too smart"
        ],
        correctAnswer: 1,
        explanation: "Indecisive people consume your time and energy without producing results or making commitments."
      }
    ]
  },
  {
    id: 'law-32',
    number: 32,
    title: "Turn a Tramp into a Champ",
    subtitle: "Develop potential",
    category: 'influence',
    theLife: "Ken's greatest skill was seeing potential where others saw trash. He could take a woman who was lost, broken, and hopeless, and transform her into a confident, successful, valuable person. This wasn't charity - it was business. A champ is worth ten times what a tramp is worth. The ability to develop people is the ability to create value.",
    theIsm: "Development creates value. The person who can take raw potential and refine it into excellence holds immense power. Don't just look for finished products - look for diamonds in the rough. The ability to develop people multiplies your power exponentially.",
    takeaways: [
      "Development creates value",
      "See potential where others see problems",
      "Transformative ability is power",
      "Look for diamonds in the rough"
    ],
    examples: [
      {
        title: "The Star Manager",
        content: "Great managers don't just hire stars - they develop them. They see potential in junior employees and grow them into leaders.",
        context: "business"
      },
      {
        title: "The Sports Coach",
        content: "Legendary coaches are known for developing raw talent into champions. Their ability to develop players defines their legacy.",
        context: "general"
      }
    ],
    reflection: "Who around you has untapped potential? How could you help develop them?",
    quiz: [
      {
        id: 'q32-1',
        question: "Why is turning a tramp into a champ valuable?",
        options: [
          "It's charitable",
          "Development creates exponential value",
          "Tramps are easier to find",
          "Champs are rare"
        ],
        correctAnswer: 1,
        explanation: "The ability to develop potential into excellence creates tremendous value and multiplies your power."
      }
    ]
  },
  {
    id: 'law-33',
    number: 33,
    title: "Bring Your People with You to the Top",
    subtitle: "Share success",
    category: 'influence',
    theLife: "Ken understood that success is sweeter when shared. The people who helped you climb deserve to enjoy the view from the top. A leader who reaches the pinnacle alone has no one to celebrate with and no one to protect them on the way down. Bring your day-ones with you. Loyalty given is loyalty returned.",
    theIsm: "Success shared is success multiplied. The people who supported you on the way up are your foundation at the top. Abandoning them isolates you and creates enemies. Reward loyalty with loyalty. The top is lonely enough - don't make it lonelier.",
    takeaways: [
      "Success is sweeter when shared",
      "Reward loyalty with loyalty",
      "Bring your supporters with you",
      "Shared success creates stronger foundations"
    ],
    examples: [
      {
        title: "The Loyal Executive Team",
        content: "Founders who bring early employees into leadership and ownership create teams that will fight for the company's success.",
        context: "business"
      },
      {
        title: "The Political Machine",
        content: "Successful politicians reward their early supporters with positions and influence. This builds a loyal network that sustains their power.",
        context: "power"
      }
    ],
    reflection: "Who helped you get where you are? Have you brought them with you?",
    quiz: [
      {
        id: 'q33-1',
        question: "Why bring people with you to the top?",
        options: [
          "It's required",
          "Shared success creates loyalty and protection",
          "You'll need their help",
          "It's the nice thing to do"
        ],
        correctAnswer: 1,
        explanation: "Bringing supporters with you creates a loyal foundation and makes success more sustainable."
      }
    ]
  },
  {
    id: 'law-34',
    number: 34,
    title: "Show Respect to Get Respect",
    subtitle: "Reciprocal honor",
    category: 'power',
    theLife: "Ken learned that respect was a two-way street. The pimps who demanded respect without giving it eventually found themselves alone and vulnerable. But those who showed respect to the game, to the old heads, to their rivals - they earned respect in return. Respect given is respect received. Disrespect invites destruction.",
    theIsm: "Respect is reciprocal. You cannot demand what you do not give. Show respect to those who came before, to those who play the game well, to those who deserve it. Respect costs nothing but earns everything. Disrespect is expensive.",
    takeaways: [
      "Respect is reciprocal",
      "You can't demand what you don't give",
      "Respect costs nothing, earns everything",
      "Disrespect invites destruction"
    ],
    examples: [
      {
        title: "The Respectful Negotiator",
        content: "Negotiators who show respect for their counterparts often get better deals. Respect creates goodwill that translates to concessions.",
        context: "business"
      },
      {
        title: "The Mentor Relationship",
        content: "Young professionals who respect experienced mentors gain wisdom and connections. Disrespect closes doors permanently.",
        context: "power"
      }
    ],
    reflection: "Are you giving the respect you want to receive? Who deserves more respect from you?",
    quiz: [
      {
        id: 'q34-1',
        question: "Why show respect to get respect?",
        options: [
          "It's polite",
          "Respect is reciprocal - you must give it to receive it",
          "People will like you",
          "It's required by law"
        ],
        correctAnswer: 1,
        explanation: "Respect works reciprocally. You cannot expect to receive what you are unwilling to give."
      }
    ]
  },
  {
    id: 'law-35',
    number: 35,
    title: "Trust Nothing but the Game",
    subtitle: "Verify everything",
    category: 'strategy',
    theLife: "Ken's closest friend betrayed him. Someone he trusted with his life turned on him for money and a woman. It taught Ken a lesson he never forgot: trust is expensive, and most people can't afford it. In the game, everyone has a price, and everyone has a weakness. Trust the game - its rules, its patterns - but never trust the players completely.",
    theIsm: "Trust is a luxury few can afford. People are driven by self-interest, and self-interest changes with circumstances. Trust systems, not individuals. Trust patterns, not promises. The game is reliable; the players are not.",
    takeaways: [
      "Trust systems, not individuals",
      "Everyone has a price",
      "Verify, don't just trust",
      "The game is reliable; players are not"
    ],
    examples: [
      {
        title: "The Contract",
        content: "Business deals rely on contracts, not handshakes. Even with friends, put agreements in writing. Trust the document, not the person.",
        context: "business"
      },
      {
        title: "The Audit",
        content: "Companies audit their finances regularly, even when they trust their accountants. Systems of verification prevent problems.",
        context: "business"
      }
    ],
    reflection: "Who do you trust too much? What verification systems should you put in place?",
    quiz: [
      {
        id: 'q35-1',
        question: "Why trust nothing but the game?",
        options: [
          "People are evil",
          "People's self-interest changes; systems are reliable",
          "Trust is illegal",
          "The game is fun"
        ],
        correctAnswer: 1,
        explanation: "While individuals may change based on circumstances, systems and patterns remain more reliable."
      }
    ]
  },
  {
    id: 'law-36',
    number: 36,
    title: "Be Internationally Known, Nationally Recognized, and Locally Accepted",
    subtitle: "Build your brand at all levels",
    category: 'power',
    theLife: "Ken built his reputation layer by layer. First, he was known and respected in his local area. Then, his reputation spread nationally through his books and media appearances. Finally, he became internationally known as the face of the game. Each level of recognition reinforced the others. A strong local foundation supports national fame, which enables international influence.",
    theIsm: "Build your brand at every level. Local acceptance is your foundation. National recognition is your platform. International fame is your legacy. Each level amplifies the others. Neglect any level, and the whole structure weakens.",
    takeaways: [
      "Build reputation at every level",
      "Local is your foundation",
      "National is your platform",
      "International is your legacy"
    ],
    examples: [
      {
        title: "The Local to Global Brand",
        content: "Many global brands started as local favorites. Starbucks began in Seattle. McDonald's started as a single restaurant. Local success enabled global expansion.",
        context: "business"
      },
      {
        title: "The Politician's Path",
        content: "Most presidents start with local office, move to state or national positions, and build recognition before running for the top job.",
        context: "power"
      }
    ],
    reflection: "At what level is your reputation strongest? Weakest? What level needs the most work?",
    quiz: [
      {
        id: 'q36-1',
        question: "Why build recognition at all three levels?",
        options: [
          "To show off",
          "Each level reinforces and amplifies the others",
          "It's required",
          "More levels mean more money"
        ],
        correctAnswer: 1,
        explanation: "Local, national, and international recognition each reinforce the others, creating a stronger overall brand."
      }
    ]
  },
  {
    id: 'law-37',
    number: 37,
    title: "Let a Ho Know",
    subtitle: "Clear communication",
    category: 'control',
    theLife: "Ken never left people guessing about where they stood. If someone was doing well, they knew it. If someone was slipping, they knew that too. Clear communication prevents misunderstandings and sets clear expectations. People can't meet expectations they don't know exist. Let people know exactly where they stand.",
    theIsm: "Clarity is kindness. Uncertainty creates anxiety and mistakes. Clear communication of expectations, performance, and consequences allows people to succeed. Don't make people guess - tell them directly where they stand.",
    takeaways: [
      "Clarity prevents misunderstanding",
      "Set clear expectations",
      "Communicate performance directly",
      "Don't make people guess"
    ],
    examples: [
      {
        title: "The Clear Manager",
        content: "Managers who give clear, direct feedback help employees improve. Vague feedback leaves people confused and underperforming.",
        context: "business"
      },
      {
        title: "The Relationship Talk",
        content: "Clear communication about relationship expectations prevents resentment. Assumptions lead to disappointment; clarity leads to alignment.",
        context: "relationships"
      }
    ],
    reflection: "Are you communicating clearly with those around you? Or leaving them to guess?",
    quiz: [
      {
        id: 'q37-1',
        question: "Why is clear communication important?",
        options: [
          "It's polite",
          "Clarity prevents misunderstandings and sets expectations",
          "People are stupid",
          "It takes less time"
        ],
        correctAnswer: 1,
        explanation: "Clear communication prevents misunderstandings and sets expectations that people can meet."
      }
    ]
  },
  {
    id: 'law-38',
    number: 38,
    title: "Wreck a Hater",
    subtitle: "Neutralize enemies",
    category: 'power',
    theLife: "When someone tried to undermine Ken, he didn't confront them immediately. He watched, gathered information, and waited. At the Super Bowl party, when the hater was at his most confident, Ken exposed him as an FBI informant with no real game experience. The revelation destroyed the man's reputation in an instant. Sometimes, the best attack is exposure.",
    theIsm: "Haters must be dealt with, but not necessarily with violence. Information is a weapon. Patience is a strategy. Wait for the right moment, then strike with precision. Exposure can be more devastating than confrontation.",
    takeaways: [
      "Haters must be neutralized",
      "Information is a weapon",
      "Patience creates opportunity",
      "Exposure can destroy enemies"
    ],
    examples: [
      {
        title: "The Corporate Rival",
        content: "When a rival spreads rumors, gathering evidence of their misconduct and revealing it at the right moment can end their career.",
        context: "business"
      },
      {
        title: "The Political Opponent",
        content: "Opposition research uncovers scandals that can end political careers. Timing the release for maximum impact is key.",
        context: "power"
      }
    ],
    reflection: "Who is undermining you? What information do you have or need about them?",
    quiz: [
      {
        id: 'q38-1',
        question: "How should you deal with haters?",
        options: [
          "Ignore them",
          "Gather information and strike strategically",
          "Fight them immediately",
          "Try to befriend them"
        ],
        correctAnswer: 1,
        explanation: "Strategic neutralization using information and patience is more effective than immediate confrontation."
      }
    ]
  },
  {
    id: 'law-39',
    number: 39,
    title: "Switch Up",
    subtitle: "Adapt and evolve",
    category: 'strategy',
    theLife: "Ken's father, Johnny Slick, was a master of adaptation. He could be the street hustler one moment and the family man the next. He taught Ken that survival requires flexibility. The person who can't adapt becomes obsolete. The game changes, the rules change, the players change - you must change too or be left behind.",
    theIsm: "Adaptation is survival. The ability to switch styles, approaches, and personas as needed is essential. Rigidity is death. The chameleon survives because it adapts to its environment. Be the chameleon.",
    takeaways: [
      "Adaptation is essential for survival",
      "Be flexible in your approach",
      "Change with the game or be left behind",
      "Multiple personas serve different situations"
    ],
    examples: [
      {
        title: "The Pivoting Startup",
        content: "Successful startups pivot when their original idea isn't working. Companies that can't adapt fail; those that can thrive.",
        context: "business"
      },
      {
        title: "The Career Changer",
        content: "People who adapt their skills to changing markets stay employed. Those who cling to obsolete skills become unemployed.",
        context: "business"
      }
    ],
    reflection: "Where are you being too rigid? What changes are you resisting that you should embrace?",
    quiz: [
      {
        id: 'q39-1',
        question: "Why is switching up important?",
        options: [
          "It's fun",
          "Adaptation is essential for survival",
          "People get bored",
          "Change is always good"
        ],
        correctAnswer: 1,
        explanation: "The ability to adapt and change is essential for survival in changing environments and circumstances."
      }
    ]
  },
  {
    id: 'law-40',
    number: 40,
    title: "Don't Down 'Em, Crown 'Em",
    subtitle: "Elevate others",
    category: 'influence',
    theLife: "Ken noticed that weak leaders put others down to feel powerful. But the truly powerful elevate others. When you crown someone - recognize their value, celebrate their wins, lift them up - they become loyal and devoted. People will do more for those who build them up than for those who tear them down.",
    theIsm: "Elevation creates devotion. When you make people feel valued and important, they reward you with loyalty and effort. Tearing people down might feel powerful, but building them up is actually more powerful. Crown, don't clown.",
    takeaways: [
      "Elevation creates loyalty",
      "Build people up, don't tear them down",
      "Recognition motivates more than criticism",
      "Crowning others increases your power"
    ],
    examples: [
      {
        title: "The Praising Manager",
        content: "Managers who recognize and celebrate their team's achievements build more motivated, loyal teams than those who only criticize.",
        context: "business"
      },
      {
        title: "The Supportive Friend",
        content: "Friends who celebrate your wins and lift you up during losses are the ones you trust and support in return.",
        context: "relationships"
      }
    ],
    reflection: "Are you crowning or clowning the people around you? How can you elevate others more?",
    quiz: [
      {
        id: 'q40-1',
        question: "Why crown instead of clown?",
        options: [
          "It's nicer",
          "Elevation creates loyalty and devotion",
          "Clowning is mean",
          "Crowning costs less"
        ],
        correctAnswer: 1,
        explanation: "Building people up creates loyalty and motivation, which increases your power and influence."
      }
    ]
  },
  {
    id: 'law-41',
    number: 41,
    title: "Keep Your Front Up Till You Come Up",
    subtitle: "Appear successful",
    category: 'strategy',
    theLife: "In Vegas, Ken was losing money at the tables but couldn't show it. His girls expected the lifestyle he'd promised. So he kept his front up - dressed sharp, acted confident, projected success. Eventually, his luck turned, and he made back his losses. If he'd shown weakness, his girls would have left, and his comeback would have been impossible.",
    theIsm: "Perception becomes reality. When you project success, people treat you as successful, which creates opportunities for actual success. Showing weakness invites abandonment. Keep your front up until the reality catches up.",
    takeaways: [
      "Perception becomes reality",
      "Project success to create success",
      "Weakness invites abandonment",
      "Keep appearances until reality catches up"
    ],
    examples: [
      {
        title: "The Startup Pitch",
        content: "Startups project confidence and success to investors even when struggling. This confidence attracts the funding needed to succeed.",
        context: "business"
      },
      {
        title: "The Job Interview",
        content: "Candidates who project confidence get hired over more qualified but nervous candidates. Perception shapes reality.",
        context: "business"
      }
    ],
    reflection: "Where do you need to keep your front up? What weakness are you showing that you should hide?",
    quiz: [
      {
        id: 'q41-1',
        question: "Why keep your front up?",
        options: [
          "To deceive people",
          "Perception creates reality and opportunity",
          "It's fun to pretend",
          "People are stupid"
        ],
        correctAnswer: 1,
        explanation: "Projecting success attracts opportunities and support that help create actual success."
      }
    ]
  },
  {
    id: 'law-42',
    number: 42,
    title: "If You Can See It, You Can Be It",
    subtitle: "Visualization creates reality",
    category: 'mindset',
    theLife: "Ken spent hours visualizing his success. He saw himself at the top, running the game, living the life he wanted. This wasn't daydreaming - it was mental preparation. When you can clearly see where you're going, you can figure out how to get there. Visualization is the first step to manifestation.",
    theIsm: "The mind creates reality. What you can visualize clearly, you can achieve. Seeing the end goal helps you map the path to get there. Every achievement starts as a thought, a vision, a dream made concrete.",
    takeaways: [
      "Visualization precedes achievement",
      "See your goal clearly",
      "Mental preparation creates physical results",
      "Every achievement starts as a vision"
    ],
    examples: [
      {
        title: "The Olympic Athlete",
        content: "Elite athletes visualize their performances in detail before competing. This mental rehearsal improves actual performance.",
        context: "general"
      },
      {
        title: "The Vision Board",
        content: "People who visualize their goals clearly are more likely to achieve them. The mind moves toward what it sees.",
        context: "general"
      }
    ],
    reflection: "Can you clearly see your goals? What does success look like for you?",
    quiz: [
      {
        id: 'q42-1',
        question: "Why is visualization important?",
        options: [
          "It's fun to daydream",
          "Seeing goals clearly helps achieve them",
          "It impresses others",
          "It's magical thinking"
        ],
        correctAnswer: 1,
        explanation: "Clear visualization of goals helps map the path to achievement and prepares the mind for success."
      }
    ]
  },
  {
    id: 'law-43',
    number: 43,
    title: "Talk Shit and Swallow Spit",
    subtitle: "Master communication",
    category: 'influence',
    theLife: "When Ken met Don King, they exchanged playful banter that entertained everyone in the room. Ken's ability to talk - to entertain, to persuade, to command attention - was one of his greatest assets. Words are weapons, tools, and currency. The person who masters communication masters the game.",
    theIsm: "Communication is power. The ability to speak well - to persuade, entertain, and command attention - is invaluable. Master words, and you master people. Great leaders are great orators. Invest in your communication skills.",
    takeaways: [
      "Communication is power",
      "Master the art of speaking",
      "Words are weapons and currency",
      "Great leaders are great orators"
    ],
    examples: [
      {
        title: "The TED Speaker",
        content: "Leaders who can communicate their vision effectively inspire action. Presentation skills are career multipliers.",
        context: "business"
      },
      {
        title: "The Sales Pitch",
        content: "Top salespeople are masters of communication. Their ability to read people and adjust their message closes deals.",
        context: "business"
      }
    ],
    reflection: "How are your communication skills? Where could you improve your ability to speak and persuade?",
    quiz: [
      {
        id: 'q43-1',
        question: "Why is communication mastery important?",
        options: [
          "It sounds good",
          "Communication is power and influence",
          "People talk too much",
          "It's easy to learn"
        ],
        correctAnswer: 1,
        explanation: "Mastering communication gives you power to persuade, influence, and command attention."
      }
    ]
  },
  {
    id: 'law-44',
    number: 44,
    title: "You Need Fire and Desire",
    subtitle: "Passion drives success",
    category: 'mindset',
    theLife: "Ken studied successful people across all fields and found one common trait: burning desire. The champions, the leaders, the winners all had an intense, burning passion for their goals. This fire carried them through obstacles, setbacks, and failures. Without fire and desire, talent is wasted. With it, ordinary people achieve extraordinary things.",
    theIsm: "Desire is the engine of achievement. Talent without passion goes nowhere. Passion without talent finds a way. The burning desire to achieve - the refusal to accept defeat - separates winners from the rest. Find your fire.",
    takeaways: [
      "Burning desire separates winners",
      "Passion drives through obstacles",
      "Talent without desire is wasted",
      "Find and fuel your fire"
    ],
    examples: [
      {
        title: "The Entrepreneur's Drive",
        content: "Successful entrepreneurs often lack formal credentials but possess intense desire. Their passion carries them through failures that stop others.",
        context: "business"
      },
      {
        title: "The Athlete's Dedication",
        content: "Many champions weren't the most talented initially, but their desire to win drove them to outwork and outlast more gifted competitors.",
        context: "general"
      }
    ],
    reflection: "What is your burning desire? What are you truly passionate about achieving?",
    quiz: [
      {
        id: 'q44-1',
        question: "Why is fire and desire important?",
        options: [
          "It feels good",
          "Burning desire drives achievement through obstacles",
          "Others expect it",
          "It's impressive"
        ],
        correctAnswer: 1,
        explanation: "Intense desire and passion are what drive people to overcome obstacles and achieve their goals."
      }
    ]
  },
  {
    id: 'law-45',
    number: 45,
    title: "Get Rid of the Word 'If'",
    subtitle: "Eliminate doubt",
    category: 'mindset',
    theLife: "Ken noticed that unsuccessful people spoke in 'ifs' - 'If I get the job,' 'If I win,' 'If things work out.' Successful people spoke in certainties. The word 'if' introduces doubt and possibility of failure. Remove it from your vocabulary. Replace 'if' with 'when.' Speak your success into existence.",
    theIsm: "Language shapes reality. The words you use affect how you think and what you achieve. 'If' creates escape routes; 'when' creates commitment. Speak with certainty, and certainty becomes reality.",
    takeaways: [
      "Language shapes reality",
      "'If' introduces doubt",
      "Speak with certainty",
      "Replace 'if' with 'when'"
    ],
    examples: [
      {
        title: "The Confident Pitch",
        content: "Entrepreneurs who say 'When we launch' get more investment than those who say 'If we launch.' Certainty attracts support.",
        context: "business"
      },
      {
        title: "The Athlete's Mindset",
        content: "Champions visualize winning, not possibly winning. Their certainty becomes self-fulfilling.",
        context: "general"
      }
    ],
    reflection: "How often do you use 'if' when talking about your goals? What would change if you used 'when' instead?",
    quiz: [
      {
        id: 'q45-1',
        question: "Why get rid of the word 'if'?",
        options: [
          "It's a bad word",
          "'If' introduces doubt; certainty creates success",
          "Grammar rules",
          "It's too short"
        ],
        correctAnswer: 1,
        explanation: "The word 'if' introduces doubt and possibility of failure. Speaking with certainty creates commitment and attracts success."
      }
    ]
  },
  {
    id: 'law-46',
    number: 46,
    title: "Move and Shake Like a Pimp Shakes",
    subtitle: "Take initiative",
    category: 'mindset',
    theLife: "Ken watched people wait for opportunities to come to them. They waited to be discovered, to be promoted, to be chosen. But the successful ones didn't wait - they moved. They created opportunities, made connections, took action. The world rewards those who move, not those who wait.",
    theIsm: "Action creates opportunity. Waiting guarantees nothing. The person who takes initiative controls their destiny. Move, shake, create, act. Don't wait for permission or opportunity - make your own.",
    takeaways: [
      "Action creates opportunity",
      "Don't wait - move",
      "Take initiative",
      "Create your own opportunities"
    ],
    examples: [
      {
        title: "The Proactive Employee",
        content: "Employees who take initiative get promoted faster than those who wait for instructions. Action demonstrates value.",
        context: "business"
      },
      {
        title: "The Networking Founder",
        content: "Founders who actively network and create opportunities raise more money and find better partners than those who wait to be approached.",
        context: "business"
      }
    ],
    reflection: "Where are you waiting instead of moving? What action could you take today?",
    quiz: [
      {
        id: 'q46-1',
        question: "What does 'move and shake' mean?",
        options: [
          "Dance well",
          "Take initiative and action",
          "Be flashy",
          "Move locations"
        ],
        correctAnswer: 1,
        explanation: "Moving and shaking means taking initiative and action rather than waiting for opportunities to come to you."
      }
    ]
  },
  {
    id: 'law-47',
    number: 47,
    title: "Pimpin' Is What You Do, Not Who You Are",
    subtitle: "Separate identity from role",
    category: 'mindset',
    theLife: "Ken explained to a young pimp that being a pimp was his occupation, not his identity. To his mother, he was her son. To his children, he was their father. To the streets, he was Pimpin' Ken. We are different people to different audiences. Don't let any single role consume your entire identity.",
    theIsm: "You are not your job. You are not your title. You are a multifaceted human being who plays different roles in different contexts. Maintaining this separation gives you perspective and prevents any single failure from defining you.",
    takeaways: [
      "You are not your job",
      "Maintain multiple identities",
      "Different roles for different contexts",
      "No single failure defines you"
    ],
    examples: [
      {
        title: "The Balanced Executive",
        content: "Leaders who maintain identities outside work - as parents, hobbyists, community members - handle setbacks better than those defined solely by their careers.",
        context: "business"
      },
      {
        title: "The Actor's Identity",
        content: "Great actors don't become their roles. They can play villains without being villains, maintaining separation between self and character.",
        context: "general"
      }
    ],
    reflection: "Are you too identified with your job or role? What other identities should you cultivate?",
    quiz: [
      {
        id: 'q47-1',
        question: "Why separate identity from role?",
        options: [
          "To be fake",
          "No single failure defines your entire self",
          "Roles are bad",
          "Identity is unimportant"
        ],
        correctAnswer: 1,
        explanation: "Separating your identity from any single role means no single failure can destroy your sense of self."
      }
    ]
  },
  {
    id: 'law-48',
    number: 48,
    title: "Don't Believe the Hype",
    subtitle: "Stay grounded",
    category: 'mindset',
    theLife: "Ken saw young men enter the game believing the movies and music - thinking pimping was glamorous, easy money, and respect. They didn't see the prison sentences, the violence, the destroyed lives. Ken wrote this book to tell the truth: most people in the game end up dead, in prison, or broken. Don't believe the hype you see in media. The reality is always different.",
    theIsm: "Media lies. Stories are sanitized. The glamorous portrayal of any lifestyle - business, crime, fame - hides the costs and the failures. Before you pursue any path, understand the real odds, the real costs, and the real outcomes. Don't let fantasy drive your decisions.",
    takeaways: [
      "Media portrays fantasy, not reality",
      "Understand real costs and odds",
      "Don't let hype drive decisions",
      "The glamorous path often has hidden costs"
    ],
    examples: [
      {
        title: "The Entrepreneur Myth",
        content: "Media portrays entrepreneurship as glamorous. The reality is long hours, high stress, and most startups fail. Understand before you jump.",
        context: "business"
      },
      {
        title: "The Celebrity Illusion",
        content: "Celebrity life looks perfect in magazines. The reality often includes loss of privacy, constant pressure, and mental health struggles.",
        context: "general"
      }
    ],
    reflection: "What hype are you believing? What is the reality behind the glamorous portrayal?",
    quiz: [
      {
        id: 'q48-1',
        question: "Why shouldn't you believe the hype?",
        options: [
          "Hype is always wrong",
          "Media portrays fantasy, hiding real costs and risks",
          "Being skeptical is cool",
          "Hype is illegal"
        ],
        correctAnswer: 1,
        explanation: "Media and stories often sanitize and glamorize paths while hiding the real costs, risks, and failure rates."
      }
    ]
  }
];

export const getLawById = (id: string): Law | undefined => {
  return laws.find(law => law.id === id);
};

export const getLawByNumber = (number: number): Law | undefined => {
  return laws.find(law => law.number === number);
};

export const getLawsByCategory = (category: LawCategory): Law[] => {
  return laws.filter(law => law.category === category);
};

export const getAllCategories = (): { id: LawCategory; name: string; description: string }[] => [
  { id: 'power', name: 'Power', description: 'Laws of authority and influence' },
  { id: 'strategy', name: 'Strategy', description: 'Tactical principles for success' },
  { id: 'mindset', name: 'Mindset', description: 'Mental frameworks for winning' },
  { id: 'wealth', name: 'Wealth', description: 'Financial and economic principles' },
  { id: 'control', name: 'Control', description: 'Maintaining authority and order' },
  { id: 'influence', name: 'Influence', description: 'Persuasion and leadership' }
];

export const getTotalQuizQuestions = (): number => {
  return laws.reduce((total, law) => total + law.quiz.length, 0);
};
