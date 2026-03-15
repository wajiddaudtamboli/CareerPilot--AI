"use client";
import React, { useState } from "react";
import {
  Book,
  Brain,
  CheckSquare,
  Code,
  Compass,
  Library,
  Target,
} from "lucide-react";
import { AiCodingRoundQuestion } from "../../../config/AiModels";
import CodingAssessment from "./CodeExam";

export default function CodingRound() {
  const [questions, setQuestions] = useState("");
  const [exam, setExam] = useState(false);
  const round = {
    codingRound: {
      define:
        "Coding interviews are a form of technical interviews used to assess a potential software engineer candidate's competencies through presenting them with programming problems. Typically, coding interviews focus on data structures and algorithms, while other technical rounds may encompass system design (especially for middle to senior level candidates). A coding interview round is typically 30 - 45 minutes. You will be given a technical question (or questions) by the interviewer and will be expected to write code in a real-time collaborative editor such as CodePen or CoderPad (phone screen/virtual onsite) or on a whiteboard (onsite) to solve the problem within the given time.",
      evaluation: {
        criteria: [
          {
            name: "Communication",
            description:
              "Asking clarifying questions and communicating the approach and tradeoffs clearly so the interviewer can follow without difficulty.",
          },
          {
            name: "Problem Solving",
            description:
              "Understanding the problem and approaching it systematically, logically, and accurately. Discussing multiple potential approaches and tradeoffs. Accurately determining time and space complexity and optimizing them.",
          },
          {
            name: "Technical Competency",
            description:
              "Translating discussed solutions into working code without significant struggle. Ensuring clean, correct implementation with a strong knowledge of language constructs.",
          },
          {
            name: "Testing",
            description:
              "Ability to test code against normal and corner cases, identifying and self-correcting issues effectively.",
          },
        ],
      },
      type: [
        {
          type: "Online Coding Assessment",
          description:
            "An automated test conducted on platforms like HackerRank or LeetCode to evaluate problem-solving and coding skills in a time-bound manner.",
        },
        {
          type: "Whiteboard Coding",
          description:
            "A traditional interview method where candidates solve problems on a whiteboard or shared document, focusing on logical thinking and communication.",
        },
        {
          type: "Pair Programming",
          description:
            "A collaborative round where candidates solve a problem with the interviewer, focusing on teamwork, coding approach, and real-time problem-solving.",
        },
        {
          type: "Take-Home Assignment",
          description:
            "A project or coding task given to candidates to complete within a specified timeline, allowing for detailed evaluation of their skills.",
        },
        {
          type: "Debugging Round",
          description:
            "Candidates are given a buggy codebase and are required to identify and fix errors efficiently.",
        },
        {
          type: "Code Review Round",
          description:
            "Candidates review a pre-written codebase and provide constructive feedback, demonstrating understanding of best practices and code quality.",
        },
        {
          type: "Live Coding Challenge",
          description:
            "A real-time coding session where candidates solve a problem in an IDE or online coding platform while explaining their thought process.",
        },
        {
          type: "Competitive Programming Style",
          description:
            "A round that mimics a competitive programming contest, focusing on solving multiple problems of varying difficulty levels within a limited time.",
        },
        {
          type: "System Design Focused",
          description:
            "Involves designing a scalable, maintainable system or feature, often paired with coding tasks. Common in interviews for senior or backend roles.",
        },
        {
          type: "Optimization Problem Round",
          description:
            "Focuses on solving a problem with constraints, requiring the candidate to optimize time and space complexity.",
        },
      ],
      skills: [
        {
          skill: "Algorithms",
          description:
            "Focusing on sorting, searching, dynamic programming, greedy algorithms, and graph traversal techniques.",
        },
        {
          skill: "System Design (optional)",
          description:
            "Designing scalable, maintainable systems by focusing on architectural patterns and tradeoffs (for senior roles).",
        },
        {
          skill: "Code Optimization",
          description:
            "Writing efficient code with optimal time and space complexity to solve problems.",
        },
        {
          skill: "Debugging",
          description:
            "Identifying and resolving errors in code effectively under time constraints.",
        },
      ],
      allowedLanguages: [
        {
          language: "Python",

          reason:
            "Known for simplicity and quick prototyping, often preferred in interviews.",
        },
        {
          language: "Java",

          reason:
            "Widely used in enterprise applications and has strong library support.",
        },
        {
          language: "C++",

          reason:
            "Ideal for algorithmic problems due to STL (Standard Template Library) support.",
        },
        {
          language: "JavaScript",

          reason:
            "Common for front-end and full-stack roles; useful for solving algorithmic challenges.",
        },
        {
          language: "Ruby",

          reason:
            "Simple syntax, though less commonly used in technical interviews.",
        },
        {
          language: "C#",

          reason:
            "Preferred for roles involving Microsoft technologies or .NET frameworks.",
        },
      ],
      resources: {
        books: [
          {
            title: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            description:
              "A comprehensive guide to cracking coding interviews with over 189 programming questions.",
          },
          {
            title: "Elements of Programming Interviews",
            author: "Adnan Aziz, Tsung-Hsien Lee, Amit Prakash",
            description:
              "Focuses on practical problem-solving and interview preparation.",
          },
          {
            title: "Introduction to Algorithms",
            author:
              "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
            description:
              "A foundational book on algorithms with detailed explanations.",
          },
          {
            title: "Programming Pearls",
            author: "Jon Bentley",
            description:
              "A classic book focusing on problem-solving strategies and algorithms.",
          },
          {
            title: "The Algorithm Design Manual",
            author: "Steven S. Skiena",
            description:
              "A practical guide to designing algorithms with problem examples.",
          },
          {
            title: "Competitive Programming",
            author: "Steven Halim, Felix Halim",
            description:
              "Best suited for competitive programming with clear explanations and sample problems.",
          },
        ],
        websites: [
          {
            name: "LeetCode",
            url: "https://leetcode.com",
            description:
              "Popular platform for practicing coding problems with difficulty levels.",
          },
          {
            name: "HackerRank",
            url: "https://hackerrank.com",
            description:
              "A platform used by companies to conduct online coding assessments.",
          },
          {
            name: "GeeksforGeeks",
            url: "https://geeksforgeeks.org",
            description:
              "Provides tutorials and coding problems for various topics.",
          },
          {
            name: "Codeforces",
            url: "https://codeforces.com",
            description: "Best for competitive programming and contests.",
          },
          {
            name: "TopCoder",
            url: "https://topcoder.com",
            description:
              "A pioneer in coding competitions, offering challenging problems.",
          },
          {
            name: "InterviewBit",
            url: "https://interviewbit.com",
            description:
              "Covers coding problems and system design questions for interview preparation.",
          },
          {
            name: "AlgoExpert",
            url: "https://algoexpert.io",
            description:
              "Platform offering curated coding interview questions with video explanations.",
          },
          {
            name: "Project Euler",
            url: "https://projecteuler.net",
            description:
              "A series of challenging mathematical/computational problems.",
          },
          {
            name: "Exercism",
            url: "https://exercism.org",
            description:
              "Offers coding practice in multiple languages with mentorship options.",
          },
        ],
        courses: [
          {
            platform: "Udemy",
            title: "Master the Coding Interview: Data Structures + Algorithms",
            description:
              "A detailed course covering DS & Algo for coding interviews.",
            url: "https://www.udemy.com",
          },
          {
            platform: "Coursera",
            title: "Algorithms Specialization",
            description:
              "Learn algorithms in depth with assignments and projects.",
            url: "https://www.coursera.org",
          },
          {
            platform: "Educative",
            title: "Grokking the Coding Interview",
            description:
              "Covers coding patterns and problems commonly seen in interviews.",
            url: "https://www.educative.io",
          },
          {
            platform: "Pluralsight",
            title: "Algorithms and Data Structures in Python",
            description:
              "A beginner-friendly course focusing on algorithms and data structures.",
            url: "https://www.pluralsight.com",
          },
          {
            platform: "edX",
            title: "CS50's Introduction to Computer Science",
            description:
              "Harvard's famous CS50 course introducing computer science fundamentals.",
            url: "https://cs50.harvard.edu/x",
          },
          {
            platform: "YouTube",
            title: "Abdul Bari's Algorithm and Data Structures",
            description:
              "Popular free tutorials on algorithms and data structures.",
            url: "https://www.youtube.com",
          },
        ],
        tools: [
          {
            tool: "CodePen",
            description:
              "A collaborative coding tool for front-end interviews.",
            url: "https://codepen.io",
          },
          {
            tool: "CoderPad",
            description:
              "A real-time collaborative editor used in coding interviews.",
            url: "https://coderpad.io",
          },
          {
            tool: "Pramp",
            description:
              "A mock interview platform with peer-to-peer feedback.",
            url: "https://www.pramp.com",
          },
          {
            tool: "Replit",
            description:
              "An online IDE supporting multiple languages, often used for live coding.",
            url: "https://replit.com",
          },
          {
            tool: "CodeChef IDE",
            description:
              "An online compiler used in competitive programming and practice.",
            url: "https://www.codechef.com/ide",
          },
          {
            tool: "Excalidraw",
            description:
              "Great for creating mockups or whiteboard-style interview solutions.",
            url: "https://excalidraw.com",
          },
          {
            tool: "Overleaf",
            description:
              "A collaborative tool for writing technical documentation during interviews.",
            url: "https://www.overleaf.com",
          },
          {
            tool: "CodeSignal",
            description:
              "Used by companies for coding assessments and practice.",
            url: "https://codesignal.com",
          },
          {
            tool: "GitHub Copilot",
            description: "AI-powered code assistant for faster coding.",
            url: "https://github.com/features/copilot",
          },
          {
            tool: "Visual Studio Code",
            description:
              "Popular IDE for coding, debugging, and pair programming.",
            url: "https://code.visualstudio.com",
          },
          {
            tool: "Google Colab",
            description:
              "An online notebook for Python, useful for algorithms and ML-based interview problems.",
            url: "https://colab.research.google.com",
          },
        ],
      },
    },
  };

  const sections = [
    { id: "overview", icon: <Compass />, label: "Overview" },
    { id: "types", icon: <Code />, label: "Interview Types" },
    { id: "evaluation", icon: <Target />, label: "Evaluation" },
    { id: "preparation", icon: <CheckSquare />, label: "Preparation" },
    { id: "skills", icon: <Brain />, label: "Skills" },
    { id: "languages", icon: <Library />, label: "Languages" },
    { id: "resources", icon: <Book />, label: "Resources" },
  ];

  const StartInterview = async () => {
    const Prompt = `generate 5 question for coding round in "python",include question,input,output,time requered to complete ,level.in json formate.`;
    try {
      const result = await AiCodingRoundQuestion.sendMessage(Prompt);
      const responseText = result.response.text();
      console.log(responseText);
      setQuestions(JSON.parse(responseText));
      setExam(true);
    } catch (error) {
      console.log(error);
    }
  };
  return exam ? (
    <CodingAssessment stateExam={setExam} questions={questions} />
  ) : null;
}
