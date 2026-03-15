const CAREER_FIELD_CATALOG = [
  {
    field: "Computer Science and Engineering",
    categories: [
      {
        category: "Software Development",
        roles: [
          "Full Stack Developer",
          "Backend Developer",
          "Frontend Developer",
          "Mobile App Developer",
          "Software Engineer",
          "Game Developer",
          "Embedded Systems Developer",
          "AR/VR Developer",
        ],
      },
      {
        category: "Data Science & AI",
        roles: [
          "Data Scientist",
          "Machine Learning Engineer",
          "AI Engineer",
          "Data Engineer",
          "Business Intelligence Analyst",
          "Computer Vision Engineer",
          "Natural Language Processing (NLP) Engineer",
          "Deep Learning Specialist",
        ],
      },
      {
        category: "DevOps & Cloud",
        roles: [
          "DevOps Engineer",
          "Cloud Architect",
          "Site Reliability Engineer",
          "System Administrator",
          "Infrastructure Engineer",
          "Platform Engineer",
          "Cloud Security Engineer",
        ],
      },
      {
        category: "Cybersecurity",
        roles: [
          "Security Engineer",
          "Penetration Tester",
          "Security Analyst",
          "Cybersecurity Consultant",
          "Information Security Manager",
          "Incident Response Specialist",
          "Digital Forensics Analyst",
        ],
      },
      {
        category: "Research & Emerging Tech",
        roles: [
          "Blockchain Developer",
          "Quantum Computing Researcher",
          "IoT Solutions Architect",
          "Robotics Software Engineer",
          "Edge Computing Specialist",
        ],
      },
      {
        category: "Quality Assurance & Testing",
        roles: [
          "QA Engineer",
          "Automation Test Engineer",
          "Performance Tester",
          "Test Analyst",
        ],
      },
      {
        category: "IT & Technical Support",
        roles: [
          "IT Support Specialist",
          "Network Administrator",
          "Database Administrator",
          "Technical Support Engineer",
        ],
      },
    ],
  },
  {
    field: "Electrical engineering",
    categories: [
      {
        category: "Power Systems",
        roles: [
          "Power Systems Engineer",
          "Electrical Design Engineer",
          "Grid Engineer",
          "Renewable Energy Engineer",
          "Power Electronics Engineer",
        ],
      },
      {
        category: "Electronics & Communication",
        roles: [
          "Electronics Engineer",
          "RF Engineer",
          "Signal Processing Engineer",
          "Communication Systems Engineer",
          "Embedded Systems Engineer",
        ],
      },
      {
        category: "Control Systems",
        roles: [
          "Control Systems Engineer",
          "Automation Engineer",
          "Instrumentation Engineer",
          "Process Control Engineer",
          "Robotics Engineer",
        ],
      },
      {
        category: "Telecommunications",
        roles: [
          "Telecommunications Engineer",
          "Network Engineer",
          "Wireless Engineer",
          "5G/6G Engineer",
          "Satellite Communications Engineer",
        ],
      },
    ],
  },
  {
    field: "Mechanical engineering",
    categories: [
      {
        category: "Design & Manufacturing",
        roles: [
          "Mechanical Design Engineer",
          "Manufacturing Engineer",
          "Product Development Engineer",
          "CAD Engineer",
          "Quality Engineer",
        ],
      },
      {
        category: "Automotive",
        roles: [
          "Automotive Engineer",
          "Engine Design Engineer",
          "Vehicle Dynamics Engineer",
          "Chassis Engineer",
          "Powertrain Engineer",
        ],
      },
      {
        category: "Thermal & Energy",
        roles: [
          "Thermal Engineer",
          "HVAC Engineer",
          "Energy Systems Engineer",
          "Heat Transfer Engineer",
          "Refrigeration Engineer",
        ],
      },
      {
        category: "Aerospace",
        roles: [
          "Aerospace Engineer",
          "Propulsion Engineer",
          "Structural Engineer",
          "Flight Test Engineer",
          "Systems Engineer",
        ],
      },
    ],
  },
  {
    field: "Civil engineering",
    categories: [
      {
        category: "Structural Engineering",
        roles: [
          "Structural Engineer",
          "Building Design Engineer",
          "Bridge Engineer",
          "Seismic Engineer",
          "Foundation Engineer",
        ],
      },
      {
        category: "Transportation",
        roles: [
          "Transportation Engineer",
          "Highway Engineer",
          "Traffic Engineer",
          "Railway Engineer",
          "Airport Engineer",
        ],
      },
      {
        category: "Water Resources",
        roles: [
          "Water Resources Engineer",
          "Hydraulic Engineer",
          "Environmental Engineer",
          "Coastal Engineer",
          "Irrigation Engineer",
        ],
      },
      {
        category: "Construction Management",
        roles: [
          "Construction Manager",
          "Project Manager",
          "Site Engineer",
          "Planning Engineer",
          "Quantity Surveyor",
        ],
      },
    ],
  },
  {
    field: "Electronics and Telecommunication engineering",
    categories: [
      {
        category: "Communication Systems",
        roles: [
          "Communication Engineer",
          "Telecom Engineer",
          "Network Engineer",
          "5G Engineer",
          "Satellite Engineer",
        ],
      },
      {
        category: "Signal Processing",
        roles: [
          "Signal Processing Engineer",
          "DSP Engineer",
          "Image Processing Engineer",
          "Audio Engineer",
          "Radar Engineer",
        ],
      },
      {
        category: "Embedded Systems",
        roles: [
          "Embedded Systems Engineer",
          "Firmware Engineer",
          "IoT Engineer",
          "Microcontroller Engineer",
          "Hardware Engineer",
        ],
      },
      {
        category: "RF & Microwave",
        roles: [
          "RF Engineer",
          "Microwave Engineer",
          "Antenna Engineer",
          "Wireless Engineer",
          "EMC Engineer",
        ],
      },
    ],
  },
  {
    field: "Chemical engineering",
    categories: [
      {
        category: "Process Engineering",
        roles: [
          "Process Engineer",
          "Chemical Process Engineer",
          "Plant Engineer",
          "Production Engineer",
          "Process Safety Engineer",
        ],
      },
      {
        category: "Petrochemicals",
        roles: [
          "Petrochemical Engineer",
          "Refinery Engineer",
          "Oil & Gas Engineer",
          "Pipeline Engineer",
          "Drilling Engineer",
        ],
      },
      {
        category: "Pharmaceuticals",
        roles: [
          "Pharmaceutical Engineer",
          "Bioprocess Engineer",
          "Validation Engineer",
          "Quality Control Engineer",
          "Regulatory Affairs Engineer",
        ],
      },
      {
        category: "Environmental",
        roles: [
          "Environmental Engineer",
          "Waste Treatment Engineer",
          "Air Quality Engineer",
          "Sustainability Engineer",
          "Water Treatment Engineer",
        ],
      },
    ],
  },
];

const ROLE_PROFILES = {
  "full stack developer": {
    role: "Full Stack Developer",
    field: "Computer Science and Engineering",
    category: "Software Development",
    description:
      "A Full Stack Developer builds both frontend and backend components of web applications, ensuring seamless user experience and efficient server-side functionality.",
    coreResponsibilities: [
      "Design complete web applications",
      "Develop frontend interfaces using modern frameworks",
      "Build backend APIs and server logic",
      "Manage databases and data storage",
      "Optimize web application performance",
      "Debug and maintain codebase",
      "Implement authentication systems",
      "Deploy applications on cloud platforms",
      "Collaborate with designers and product teams",
      "Maintain security best practices",
    ],
    skillsAndQualifications: [
      "HTML",
      "CSS",
      "JavaScript",
      "React / Angular / Vue",
      "NodeJS",
      "Database management",
      "API development",
      "Git version control",
      "Debugging",
      "Problem solving",
    ],
    latestToolsAndTechnologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "MySQL",
      "Docker",
      "AWS",
      "GitHub",
      "Postman",
      "VS Code",
    ],
    workEnvironment: ["Software companies", "Startups", "Hybrid teams", "Remote product teams"],
    careerPath: [
      "Junior Developer",
      "Full Stack Developer",
      "Senior Developer",
      "Tech Lead",
      "Engineering Manager",
      "CTO",
    ],
    companiesThatHire: [
      "Software companies",
      "Startups",
      "FinTech",
      "EdTech",
      "Healthcare tech",
      "E-commerce platforms",
    ],
    industryRelevance: "High demand across digital products and platform businesses.",
    averageSalaryInRupees: {
      note: "Salary depends on city, skill depth, and product domain.",
      entryLevel: "India: Rs4L - Rs12L",
      midLevel: "India: Rs12L - Rs24L",
      seniorLevel: "India: Rs24L+",
    },
    roadmap: {
      title: "Career Roadmap for Full Stack Developer",
      introduction: "A practical roadmap from beginner to engineering leadership.",
      phases: [
        {
          phase: "Foundation",
          duration: "0-6 months",
          skills: ["Programming fundamentals", "Data structures and algorithms"],
          projects: ["Portfolio websites", "Basic full stack app", "REST API"],
        },
        {
          phase: "Execution",
          duration: "6-18 months",
          skills: ["React or Vue", "Node or Express", "SQL/NoSQL"],
          projects: ["Production-grade app", "Authentication system", "Cloud deployment"],
        },
        {
          phase: "Specialization",
          duration: "18+ months",
          skills: ["Microservices", "Cloud development", "System design"],
          projects: ["Scalable system design", "Domain-focused products"],
        },
      ],
      certifications: ["AWS Developer", "Google Cloud Engineer"],
    },
    assessment: {
      overview: "Understanding your compatibility with Full Stack Developer",
      passion: [
        "Do you enjoy building websites and web applications?",
        "Are you curious about how both frontend and backend systems work together?",
        "Do you like creating user interfaces that people interact with?",
        "Do you enjoy solving technical coding challenges?",
        "Are you interested in learning new programming frameworks?",
        "Do you enjoy debugging complex software issues?",
        "Are you motivated to create scalable digital products?",
        "Do you enjoy collaborating with designers and developers?",
        "Are you excited about deploying applications online?",
        "Do you enjoy improving application performance and user experience?",
      ],
      profession: [
        "Can you write clean and maintainable code?",
        "Are you comfortable learning multiple programming languages?",
        "Can you design REST APIs?",
        "Can you manage databases effectively?",
        "Are you able to debug complex system issues?",
        "Can you implement authentication and security systems?",
        "Are you able to work with cloud platforms?",
        "Can you build responsive web interfaces?",
        "Are you comfortable using Git and version control systems?",
        "Can you optimize application performance?",
      ],
      vocation: [
        "Do you want to create applications that help people solve real problems?",
        "Are you interested in developing platforms used by thousands of users?",
        "Do you want to contribute to digital transformation in businesses?",
        "Are you motivated to build scalable technology systems?",
        "Do you enjoy helping organizations digitize their operations?",
        "Are you interested in improving accessibility through technology?",
        "Do you want to build tools that improve productivity?",
        "Are you interested in creating platforms that support education and learning?",
        "Do you want to create secure and reliable software systems?",
        "Are you interested in developing platforms used globally?",
      ],
      mission: [
        "Do you want to become an expert software architect?",
        "Are you interested in building globally scalable platforms?",
        "Do you want to lead software engineering teams?",
        "Are you motivated to innovate in web technologies?",
        "Do you want to develop software products that impact millions?",
        "Are you interested in creating startup products?",
        "Do you want to contribute to open-source software communities?",
        "Are you motivated to improve global digital infrastructure?",
        "Do you want to design future internet technologies?",
        "Are you interested in becoming a technology leader?",
      ],
    },
  },
  "process engineer": {
    role: "Process Engineer",
    field: "Chemical engineering",
    category: "Process Engineering",
    description:
      "A Process Engineer designs, optimizes, and oversees industrial chemical processes to ensure safe, efficient, and cost-effective production operations in manufacturing and processing plants.",
    coreResponsibilities: [
      "Design and optimize chemical process workflows",
      "Develop and review Process Flow Diagrams (PFDs) and P&IDs",
      "Monitor production performance and process efficiency",
      "Identify and troubleshoot process deviations",
      "Perform mass and energy balance calculations",
      "Ensure compliance with process safety standards",
      "Collaborate with operations, maintenance, and quality teams",
      "Conduct process hazard analysis (HAZOP)",
      "Scale up processes from lab to plant level",
      "Document process procedures and changes",
    ],
    skillsAndQualifications: [
      "Chemical engineering fundamentals",
      "Process simulation (Aspen/HYSYS)",
      "Mass and energy balance",
      "Thermodynamics",
      "Fluid mechanics",
      "Heat and mass transfer",
      "Process safety principles",
      "P&ID interpretation",
      "Problem solving",
      "Technical communication",
    ],
    latestToolsAndTechnologies: [
      "Aspen Plus",
      "Aspen HYSYS",
      "AutoCAD (P&ID)",
      "MATLAB",
      "Microsoft Excel",
      "SAP",
      "DCS / SCADA systems",
      "HAZOP tools",
      "Python (data analysis)",
      "CAD software",
    ],
    workEnvironment: ["Oil and gas", "Petrochemicals", "Pharma plants", "Water treatment"],
    careerPath: [
      "Graduate Process Engineer",
      "Process Engineer",
      "Senior Process Engineer",
      "Lead Process Engineer",
      "Process Engineering Manager",
      "Plant Manager",
    ],
    companiesThatHire: [
      "Oil and gas",
      "Petrochemicals",
      "Pharmaceuticals",
      "Food and beverage processing",
      "Fertilizers and chemicals",
      "Water treatment plants",
    ],
    industryRelevance: "Strong and stable demand in process industries and manufacturing operations.",
    averageSalaryInRupees: {
      note: "Varies by plant type, location, and safety specialization.",
      entryLevel: "India: Rs3.5L - Rs12L",
      midLevel: "India: Rs12L - Rs20L",
      seniorLevel: "India: Rs20L+",
    },
    roadmap: {
      title: "Career Roadmap for Process Engineer",
      introduction: "A practical growth path from graduate engineer to plant leadership.",
      phases: [
        {
          phase: "Foundation",
          duration: "0-6 months",
          skills: ["Mass and energy balance", "Thermodynamics", "Fluid mechanics"],
          projects: ["Distillation simulation", "Heat exchanger design", "HAZOP exercise"],
        },
        {
          phase: "Execution",
          duration: "6-24 months",
          skills: ["Aspen Plus", "P&ID reading", "Process troubleshooting"],
          projects: ["Optimization case study", "Safety improvement initiative"],
        },
        {
          phase: "Leadership",
          duration: "24+ months",
          skills: ["Advanced process control", "Process intensification", "Safety engineering"],
          projects: ["Scale-up programs", "Cross-plant improvement programs"],
        },
      ],
      certifications: ["IChemE", "CCPSC"],
    },
    assessment: {
      overview: "Understanding your compatibility with Process Engineer",
      passion: [
        "Do you enjoy understanding how large-scale chemical plants operate?",
        "Are you curious about how raw materials are transformed into products?",
        "Do you like optimizing systems to make them faster or more efficient?",
        "Do you enjoy solving problems related to industrial processes?",
        "Are you interested in how safety is managed in chemical facilities?",
        "Do you enjoy working with simulation tools to model processes?",
        "Are you fascinated by how energy is used and recovered in plants?",
        "Do you like collaborating with operations and maintenance teams?",
        "Are you motivated by the challenge of scaling lab processes to plant level?",
        "Do you enjoy continuous improvement of industrial processes?",
      ],
      profession: [
        "Can you perform mass and energy balance calculations?",
        "Are you comfortable using Aspen Plus or HYSYS for process simulation?",
        "Can you read and interpret P&IDs and PFDs?",
        "Can you identify and troubleshoot process inefficiencies?",
        "Are you familiar with HAZOP methodology and process safety principles?",
        "Can you calculate heat exchanger and pump sizing requirements?",
        "Are you able to monitor and interpret DCS/SCADA system data?",
        "Can you write standard operating procedures (SOPs) for processes?",
        "Are you able to scale processes from pilot to full production scale?",
        "Can you apply thermodynamics to design separation processes?",
      ],
      vocation: [
        "Do you want to improve process efficiency to reduce industrial waste?",
        "Are you interested in designing cleaner and greener chemical processes?",
        "Do you want to help pharmaceutical plants produce life-saving medicines?",
        "Are you motivated to optimize water treatment plant operations?",
        "Do you want to improve food and beverage production processes?",
        "Are you interested in reducing energy consumption in chemical plants?",
        "Do you want to contribute to safer industrial operations?",
        "Are you motivated to design processes for renewable energy production?",
        "Do you want to help fertilizer plants improve food security?",
        "Are you interested in designing processes for waste-to-energy plants?",
      ],
      mission: [
        "Do you want to become a leading expert in process design and optimization?",
        "Are you interested in designing world-class chemical production facilities?",
        "Do you want to lead the process engineering function at a large corporation?",
        "Are you motivated to develop innovative process technologies?",
        "Do you want to publish research on novel process engineering methods?",
        "Are you interested in contributing to sustainable chemistry at scale?",
        "Do you want to design the next generation of zero-emission industrial plants?",
        "Are you motivated to mentor engineers and shape plant engineering culture?",
        "Do you want to drive process safety standards in your industry?",
        "Are you interested in founding a process engineering consultancy?",
      ],
    },
  },
};

function normalizeRoleKey(value) {
  return (value || "").toString().trim().toLowerCase();
}

function findFieldByName(fieldName) {
  return CAREER_FIELD_CATALOG.find((f) => f.field.toLowerCase() === (fieldName || "").toLowerCase());
}

function findFieldByRole(roleName) {
  const roleKey = normalizeRoleKey(roleName);
  for (const field of CAREER_FIELD_CATALOG) {
    for (const category of field.categories) {
      if (category.roles.some((r) => normalizeRoleKey(r) === roleKey)) {
        return field;
      }
    }
  }
  return null;
}

function buildGenericAssessment(roleName, fieldName) {
  const mk = (section) => [
    `As a fresher, are you interested in building your ${section} for ${roleName}?`,
    `Do you feel motivated to start from basics in ${roleName}?`,
    `Can you commit weekly time to learn ${roleName} concepts?`,
    `Are you open to feedback and improvement in ${roleName}?`,
    `Do you enjoy solving beginner-level problems related to ${roleName}?`,
    `Would you complete structured learning milestones for ${roleName}?`,
    `Are you ready to practice tools and workflows used in ${roleName}?`,
    `Can you collaborate with peers while learning ${roleName}?`,
    `Do you see long-term growth for yourself in ${roleName}?`,
    `Are you willing to build projects to prove your ${roleName} skills?`,
  ];

  return {
    overview: `Understanding your compatibility with ${roleName}`,
    passion: mk("passion"),
    profession: mk("professional readiness"),
    vocation: mk("social contribution alignment"),
    mission: mk("purpose and long-term impact"),
    field: fieldName,
  };
}

export function getCareerFieldCatalog() {
  return CAREER_FIELD_CATALOG;
}

export function buildJobsPayload(fieldName) {
  const field = findFieldByName(fieldName);
  if (!field) {
    return {
      branch: fieldName,
      jobRoles: [],
    };
  }

  return {
    branch: field.field,
    jobRoles: field.categories.map((c) => ({
      category: c.category,
      roles: [...c.roles],
    })),
  };
}

export function getRoleProfile(roleName, fieldName) {
  const key = normalizeRoleKey(roleName);
  const exact = ROLE_PROFILES[key];
  if (exact) return exact;

  const inferredField = fieldName || findFieldByRole(roleName)?.field || "Engineering";

  return {
    role: roleName,
    field: inferredField,
    category: "General",
    description: `${roleName} is a career path within ${inferredField}.`,
    coreResponsibilities: [
      "Learn core concepts and domain fundamentals",
      "Work on practical tasks and projects",
      "Collaborate with teams and stakeholders",
      "Use modern tools and workflows",
      "Continuously improve technical and professional skills",
    ],
    skillsAndQualifications: [
      "Foundational domain knowledge",
      "Communication",
      "Problem solving",
      "Adaptability",
      "Professional ethics",
    ],
    latestToolsAndTechnologies: ["Industry-standard tools", "Version control", "Documentation tools"],
    workEnvironment: ["Entry-level team environments", "Project-based collaboration"],
    careerPath: [
      `Junior ${roleName}`,
      roleName,
      `Senior ${roleName}`,
      "Lead",
      "Manager",
    ],
    companiesThatHire: ["Startups", "Product companies", "Service organizations", "Enterprise teams"],
    industryRelevance: `${roleName} has growing opportunities depending on specialization and market demand.`,
    averageSalaryInRupees: {
      note: "Compensation varies by location, skills, and company type.",
      entryLevel: "India: Rs3L - Rs8L",
      midLevel: "India: Rs8L - Rs16L",
      seniorLevel: "India: Rs16L+",
    },
    roadmap: {
      title: `Career Roadmap for ${roleName}`,
      introduction: `A beginner-friendly roadmap for ${roleName}.`,
      phases: [
        {
          phase: "Foundation",
          duration: "0-6 months",
          skills: ["Fundamentals", "Tool basics"],
          projects: ["Beginner project", "Practice tasks"],
        },
        {
          phase: "Growth",
          duration: "6-18 months",
          skills: ["Intermediate techniques", "Problem-solving depth"],
          projects: ["Portfolio project", "Collaboration project"],
        },
      ],
      certifications: ["Relevant beginner and intermediate certifications"],
    },
    assessment: buildGenericAssessment(roleName, inferredField),
  };
}

export function buildMoreInfoPayload(roleName, fieldName) {
  const profile = getRoleProfile(roleName, fieldName);
  return {
    role: profile.role,
    description: profile.description,
    coreResponsibilities: profile.coreResponsibilities,
    skillsAndQualifications: profile.skillsAndQualifications,
    latestToolsAndTechnologies: profile.latestToolsAndTechnologies,
    workEnvironment: profile.workEnvironment,
    careerPath: profile.careerPath,
    challengesAndRewards: {
      challenges: [
        `Keeping up with evolving expectations in ${profile.role}`,
        "Building practical experience as a fresher",
      ],
      rewards: [
        "Strong growth potential",
        "High-impact problem solving",
        "Long-term specialization options",
      ],
    },
    companiesThatHire: profile.companiesThatHire,
    industryRelevance: profile.industryRelevance,
    averageSalaryInRupees: profile.averageSalaryInRupees,
  };
}

export function buildRoadmapStoragePayload(roleName, fieldName) {
  const profile = getRoleProfile(roleName, fieldName);
  const roadmap = {
    title: profile.roadmap?.title || `Career Roadmap for ${profile.role}`,
    introduction: profile.roadmap?.introduction || `Roadmap for ${profile.role}`,
    goals: profile.careerPath || [],
    phases: profile.roadmap?.phases || [],
    certifications: profile.roadmap?.certifications || [],
  };

  const precourse = {
    title: `Prerequisites for ${profile.role}`,
    foundation_knowledge: profile.skillsAndQualifications.slice(0, 5),
    recommended_courses: [
      {
        course: `${profile.role} Fundamentals`,
        provider: "Online learning platforms",
        duration: "4-8 weeks",
        difficulty: "Beginner",
        url: "",
      },
    ],
    preparation_steps: [
      "Start with fundamentals",
      "Practice weekly",
      "Build at least one portfolio project",
      "Review and iterate with feedback",
    ],
    estimated_prep_time: "1-3 months",
    free_resources: ["Documentation", "Community content", "Open tutorials"],
    books: [`Introductory books for ${profile.role}`],
    practice_platforms: ["Project repositories", "Learning labs"],
  };

  return {
    role: profile.role,
    branch: profile.field,
    roadmap,
    precourse,
    timestamp: new Date().toISOString(),
  };
}

export function getAssessmentQuestionsForRole(roleName, assessmentNumber, fieldName) {
  const profile = getRoleProfile(roleName, fieldName);
  const sections = {
    1: "passion",
    2: "profession",
    3: "vocation",
    4: "mission",
  };

  const section = sections[assessmentNumber];
  const questions = profile.assessment?.[section] || buildGenericAssessment(profile.role, profile.field)[section];

  return questions.map((q) => ({
    question: q,
    options: ["Yes", "No", "Can't Say"],
  }));
}

export function getAssessmentOverviewLabel(roleName, fieldName) {
  const profile = getRoleProfile(roleName, fieldName);
  return profile.assessment?.overview || `Understanding your compatibility with ${profile.role}`;
}
