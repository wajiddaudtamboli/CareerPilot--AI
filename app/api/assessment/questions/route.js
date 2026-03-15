import { NextResponse } from 'next/server';

// Add request validation
function validateRequest(request) {
  // Add any request validation logic here
  return true;
}

// Comprehensive 4-module career assessment dataset for 1st year engineering students
// 40 questions total (10 per module) - beginner-friendly, globally understandable, non-technical

const questionSet = {
  AptitudeModule: [
    {
      id: 1,
      question: "What is 15 + 27?",
      options: ["40", "42", "44", "46"],
      correct: 1,
      category: "mathematical_aptitude",
      difficulty: "basic",
      explanation: "15 + 27 = 42"
    },
    {
      id: 2,
      question: "If a train travels 120 km in 2 hours, what is its speed?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correct: 1,
      category: "mathematical_aptitude",
      difficulty: "basic",
      explanation: "Speed = Distance/Time = 120km/2h = 60 km/h"
    },
    {
      id: 3,
      question: "Complete the series: 2, 4, 8, 16, ?",
      options: ["24", "28", "32", "36"],
      correct: 2,
      category: "logical_reasoning",
      difficulty: "basic",
      explanation: "Each number is doubled: 2×2=4, 4×2=8, 8×2=16, 16×2=32"
    },
    {
      id: 4,
      question: "If all roses are flowers and all flowers are beautiful, then all roses are:",
      options: ["Red", "Beautiful", "Expensive", "Natural"],
      correct: 1,
      category: "logical_reasoning",
      difficulty: "intermediate",
      explanation: "Using logical deduction: roses → flowers → beautiful, therefore roses are beautiful"
    },
    {
      id: 5,
      question: "A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a red ball?",
      options: ["3/8", "5/8", "1/2", "2/3"],
      correct: 1,
      category: "mathematical_aptitude",
      difficulty: "intermediate",
      explanation: "Probability = Favorable outcomes/Total outcomes = 5/(5+3) = 5/8"
    },
    {
      id: 6,
      question: "If CAT is coded as 3120, how is DOG coded?",
      options: ["4157", "4167", "4177", "4187"],
      correct: 1,
      category: "pattern_recognition",
      difficulty: "intermediate",
      explanation: "C=3, A=1, T=20 → CAT=3120. D=4, O=15, G=7 → DOG=4157"
    },
    {
      id: 7,
      question: "Which number comes next: 1, 1, 2, 3, 5, 8, ?",
      options: ["11", "12", "13", "14"],
      correct: 2,
      category: "pattern_recognition",
      difficulty: "basic",
      explanation: "Fibonacci sequence: each number is sum of previous two (5+8=13)"
    },
    {
      id: 8,
      question: "If 'MONDAY' is written as 'MODNAY', how is 'FRIDAY' written?",
      options: ["FRIDYA", "FRIADY", "FRDAIY", "FRYDAY"],
      correct: 0,
      category: "pattern_recognition",
      difficulty: "intermediate",
      explanation: "Pattern: 4th and 5th letters are swapped (MONDAY → MODNAY, FRIDAY → FRIDYA)"
    },
    {
      id: 9,
      question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      options: ["0°", "7.5°", "15°", "22.5°"],
      correct: 1,
      category: "mathematical_aptitude",
      difficulty: "advanced",
      explanation: "At 3:15, minute hand at 90°, hour hand at 97.5°. Difference = 7.5°"
    },
    {
      id: 10,
      question: "In a group of 30 students, 18 like cricket, 12 like football, and 5 like both. How many like neither?",
      options: ["3", "5", "7", "9"],
      correct: 1,
      category: "logical_reasoning",
      difficulty: "advanced",
      explanation: "Using Venn diagram: Only cricket=13, Only football=7, Both=5, Neither=30-25=5"
    }
  ],
  GeneralLifeUnderstanding: [
    {
      id: 11,
      question: "What is the most important quality for building strong relationships?",
      options: ["Being funny", "Being wealthy", "Being honest and trustworthy", "Being popular"],
      correct: 2,
      category: "social_intelligence",
      difficulty: "basic",
      explanation: "Trust and honesty form the foundation of all meaningful relationships"
    },
    {
      id: 12,
      question: "When facing a major life decision, what should you prioritize first?",
      options: ["What others expect", "Immediate benefits", "Long-term consequences", "Easiest option"],
      correct: 2,
      category: "decision_making",
      difficulty: "intermediate",
      explanation: "Considering long-term consequences leads to better life outcomes"
    },
    {
      id: 13,
      question: "How should you handle failure or setbacks?",
      options: ["Avoid taking risks again", "Blame external factors", "Learn from mistakes and try again", "Give up on that goal"],
      correct: 2,
      category: "resilience",
      difficulty: "basic",
      explanation: "Learning from failures and persisting is key to personal growth and success"
    },
    {
      id: 14,
      question: "What is the best approach to time management as a student?",
      options: ["Study only before exams", "Prioritize tasks and plan ahead", "Work whenever you feel like it", "Focus only on easy subjects"],
      correct: 1,
      category: "self_management",
      difficulty: "basic",
      explanation: "Prioritizing and planning leads to better academic performance and less stress"
    },
    {
      id: 15,
      question: "How important is continuous learning beyond formal education?",
      options: ["Not important once you graduate", "Only important for certain careers", "Essential for personal and professional growth", "Only needed if you fail initially"],
      correct: 2,
      category: "growth_mindset",
      difficulty: "intermediate",
      explanation: "Lifelong learning is crucial in today's rapidly changing world"
    },
    {
      id: 16,
      question: "What role does empathy play in personal and professional success?",
      options: ["It makes you weak", "It's not relevant to success", "It helps build better relationships and teamwork", "It's only important for certain professions"],
      correct: 2,
      category: "emotional_intelligence",
      difficulty: "intermediate",
      explanation: "Empathy enhances communication, collaboration, and leadership abilities"
    },
    {
      id: 17,
      question: "How should you approach goal setting?",
      options: ["Set only easy goals to ensure success", "Set unrealistic goals to motivate yourself", "Set specific, measurable, and achievable goals", "Don't set goals, just go with the flow"],
      correct: 2,
      category: "goal_orientation",
      difficulty: "basic",
      explanation: "SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) are most effective"
    },
    {
      id: 18,
      question: "What is the best way to handle criticism?",
      options: ["Ignore it completely", "Get defensive immediately", "Listen objectively and learn from it", "Take it personally and feel hurt"],
      correct: 2,
      category: "emotional_maturity",
      difficulty: "intermediate",
      explanation: "Constructive handling of criticism leads to personal improvement"
    },
    {
      id: 19,
      question: "How important is work-life balance?",
      options: ["Not important, work should be everything", "Only important later in life", "Essential for long-term happiness and productivity", "It's a luxury only some can afford"],
      correct: 2,
      category: "life_philosophy",
      difficulty: "intermediate",
      explanation: "Balance prevents burnout and ensures sustainable success and well-being"
    },
    {
      id: 20,
      question: "What is the key to effective communication?",
      options: ["Speaking loudly and confidently", "Using complex words", "Listening actively and expressing clearly", "Agreeing with everyone"],
      correct: 2,
      category: "communication_skills",
      difficulty: "basic",
      explanation: "Active listening and clear expression are fundamental communication skills"
    }
  ],
  WorkStyleProfiler: [
    {
      id: 21,
      question: "When working on a group project, you prefer to:",
      options: ["Lead the entire project", "Focus on your assigned part only", "Collaborate and support team members", "Work independently and merge later"],
      correct: 2,
      category: "collaboration_style",
      difficulty: "basic",
      explanation: "Collaborative approach typically yields better team results and relationships"
    },
    {
      id: 22,
      question: "How do you handle tight deadlines?",
      options: ["Panic and stress out", "Plan and prioritize systematically", "Work longer hours without breaks", "Ask for deadline extension"],
      correct: 1,
      category: "pressure_management",
      difficulty: "basic",
      explanation: "Systematic planning and prioritization are most effective under pressure"
    },
    {
      id: 23,
      question: "Your ideal work environment is:",
      options: ["Quiet and organized", "Dynamic and interactive", "Flexible and adaptable", "Structured with clear guidelines"],
      correct: -1,
      category: "work_environment",
      difficulty: "basic",
      explanation: "This identifies your preferred work environment for better job matching"
    },
    {
      id: 24,
      question: "When learning something new, you prefer:",
      options: ["Reading detailed manuals", "Learning by doing", "Watching demonstrations", "Discussing with others"],
      correct: -1,
      category: "learning_style",
      difficulty: "basic",
      explanation: "Understanding your learning style helps optimize your professional development"
    },
    {
      id: 25,
      question: "How do you approach problem-solving?",
      options: ["Jump in and start working immediately", "Analyze the problem thoroughly first", "Seek advice from others", "Break it into smaller parts"],
      correct: 3,
      category: "problem_solving",
      difficulty: "intermediate",
      explanation: "Breaking complex problems into manageable parts is a proven effective strategy"
    },
    {
      id: 26,
      question: "Your communication style at work is typically:",
      options: ["Direct and to-the-point", "Diplomatic and considerate", "Detailed and thorough", "Casual and friendly"],
      correct: -1,
      category: "communication_preference",
      difficulty: "basic",
      explanation: "Different communication styles suit different roles and organizational cultures"
    },
    {
      id: 27,
      question: "When facing a conflict with a colleague, you would:",
      options: ["Avoid the conflict entirely", "Confront them immediately", "Try to understand their perspective first", "Ask a supervisor to intervene"],
      correct: 2,
      category: "conflict_resolution",
      difficulty: "intermediate",
      explanation: "Understanding different perspectives is key to effective conflict resolution"
    },
    {
      id: 28,
      question: "How do you prefer to receive feedback?",
      options: ["In writing for reference", "Face-to-face discussion", "With specific examples", "All of the above"],
      correct: 3,
      category: "feedback_preference",
      difficulty: "basic",
      explanation: "Comprehensive feedback (written, verbal, with examples) is most effective for growth"
    },
    {
      id: 29,
      question: "Your approach to innovation and change is:",
      options: ["Embrace new ideas enthusiastically", "Prefer proven traditional methods", "Analyze benefits before adopting", "Wait and see how others handle it"],
      correct: 2,
      category: "adaptability",
      difficulty: "intermediate",
      explanation: "Thoughtful analysis of new approaches balances innovation with practicality"
    },
    {
      id: 30,
      question: "When delegating tasks, you prefer to:",
      options: ["Give detailed step-by-step instructions", "Provide the goal and let them figure it out", "Check progress frequently", "Set milestones and review periodically"],
      correct: 3,
      category: "leadership_style",
      difficulty: "intermediate",
      explanation: "Milestone-based delegation balances autonomy with accountability"
    }
  ],
  TechInterestExplorer: [
    {
      id: 31,
      question: "Which type of technology problem excites you most?",
      options: ["Creating user-friendly mobile apps", "Analyzing large datasets for insights", "Building websites and web applications", "Automating repetitive tasks"],
      correct: -1,
      category: "technology_interest",
      difficulty: "basic",
      explanation: "This helps identify your natural inclination toward different tech domains"
    },
    {
      id: 32,
      question: "When you hear 'Artificial Intelligence', what interests you most?",
      options: ["Making computers understand human language", "Creating smart recommendation systems", "Developing autonomous vehicles", "All of these sound fascinating"],
      correct: -1,
      category: "ai_interest",
      difficulty: "basic",
      explanation: "Different AI applications appeal to different interests and career paths"
    },
    {
      id: 33,
      question: "What aspect of software development appeals to you?",
      options: ["Designing beautiful user interfaces", "Writing efficient code logic", "Testing and debugging programs", "Managing software projects"],
      correct: -1,
      category: "development_interest",
      difficulty: "basic",
      explanation: "Software development has many specializations matching different skills and interests"
    },
    {
      id: 34,
      question: "Which emerging technology field intrigues you most?",
      options: ["Virtual/Augmented Reality", "Blockchain and Cryptocurrency", "Internet of Things (IoT)", "Quantum Computing"],
      correct: -1,
      category: "emerging_tech",
      difficulty: "basic",
      explanation: "Emerging technologies offer exciting career opportunities in various domains"
    },
    {
      id: 35,
      question: "In cybersecurity, what interests you most?",
      options: ["Protecting systems from hackers", "Investigating digital crimes", "Educating people about online safety", "Developing secure software"],
      correct: -1,
      category: "security_interest",
      difficulty: "basic",
      explanation: "Cybersecurity offers diverse career paths from technical to educational roles"
    },
    {
      id: 36,
      question: "What type of data work appeals to you?",
      options: ["Finding patterns in business data", "Creating visual charts and dashboards", "Collecting and organizing information", "Using data to predict future trends"],
      correct: -1,
      category: "data_interest",
      difficulty: "basic",
      explanation: "Data science encompasses analysis, visualization, engineering, and predictive modeling"
    },
    {
      id: 37,
      question: "Which technology career sounds most exciting?",
      options: ["Tech startup entrepreneur", "Research and development scientist", "Technology consultant", "Product manager at tech company"],
      correct: -1,
      category: "career_aspiration",
      difficulty: "basic",
      explanation: "Technology careers span from hands-on technical work to business and strategy roles"
    },
    {
      id: 38,
      question: "What motivates you most about technology?",
      options: ["Solving complex problems", "Creating things people will use", "Understanding how things work", "Making life easier for others"],
      correct: -1,
      category: "motivation",
      difficulty: "basic",
      explanation: "Understanding your motivation helps align with the right technology career path"
    },
    {
      id: 39,
      question: "Which technology learning approach appeals to you?",
      options: ["Hands-on coding and building projects", "Reading about theoretical concepts", "Watching tutorial videos", "Learning from peers in study groups"],
      correct: -1,
      category: "learning_preference",
      difficulty: "basic",
      explanation: "Different learning styles suit different technology education paths"
    },
    {
      id: 40,
      question: "What technology impact do you want to make?",
      options: ["Improve healthcare through tech", "Enhance education with digital tools", "Create entertainment and gaming experiences", "Develop sustainable and green technologies"],
      correct: -1,
      category: "impact_aspiration",
      difficulty: "basic",
      explanation: "Technology can create positive impact across all sectors of society"
    }
  ]
};

export async function GET(request) {
  try {
    // Validate request
    if (!validateRequest(request)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid request'
      }, { status: 400 });
    }

    const { searchParams } = new URL(request.url);
    const moduleKey = searchParams.get('module');

    if (moduleKey && questionSet[moduleKey]) {
      return NextResponse.json({
        success: true,
        module: moduleKey,
        questions: questionSet[moduleKey]
      });
    }
    
    return NextResponse.json({
      success: true,
      allModules: questionSet
    });
  } catch (error) {
    console.error('Assessment API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch questions',
      details: error.message
    }, { status: 500 });
  }
}