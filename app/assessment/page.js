"use client";
import { useContext, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ThemeContext } from "../components/ThemeContext";
import ErrorBoundary from "../components/ErrorBoundary";
import { Calculator, Heart, Users, Code, ArrowRight, CheckCircle } from "lucide-react";

function AssessmentContent() {
  const { isDarkMode } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const moduleParam = searchParams.get('module');
  // Map query param to API dataset key
  const moduleKeyMap = {
    aptitude: 'AptitudeModule',
    general: 'GeneralLifeUnderstanding',
    workstyle: 'WorkStyleProfiler',
    techinterest: 'TechInterestExplorer'
  };
  const apiModuleKey = moduleParam ? moduleKeyMap[moduleParam] : null;
  // Holds normalized module questions object { AptitudeModule: [...], ... }
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);

  const moduleIcons = {
    aptitude: Calculator,
    general: Heart,
    workstyle: Users,
    techinterest: Code
  };

  const moduleNames = {
    aptitude: 'Aptitude Module',
    general: 'General Life Understanding',
    workstyle: 'Work Style Profiler',
    techinterest: 'Tech Interest Explorer'
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const endpoint = apiModuleKey ? `/api/assessment/questions?module=${apiModuleKey}` : '/api/assessment/questions';
        const response = await fetch(endpoint);
        const data = await response.json();
        if (data.allModules) {
          setQuestions(data.allModules);
        } else if (data.module && Array.isArray(data.questions)) {
          setQuestions({ [data.module]: data.questions });
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [apiModuleKey]);

  if (loading) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Loading assessment...</p>
        </div>
      </div>
    );
  }

  const IconComponent = moduleParam ? moduleIcons[moduleParam] : Calculator;

  // If specific module requested and loaded, render interactive assessment component
  if (!loading && apiModuleKey && questions[apiModuleKey]) {
    return <ModuleAssessment 
      moduleParam={moduleParam}
      moduleDisplayName={moduleNames[moduleParam]}
      isDarkMode={isDarkMode}
      questions={questions[apiModuleKey]}
    />;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
            isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
          }`}>
            <IconComponent className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {moduleParam ? moduleNames[moduleParam] : 'Career Assessment'}
          </h1>
          
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {moduleParam 
              ? `Complete your ${moduleNames[moduleParam]} assessment`
              : 'Discover your career path through comprehensive assessment'
            }
          </p>
        </div>

        <div className={`rounded-2xl p-8 ${
          isDarkMode 
            ? 'bg-gray-900/50 border border-gray-800' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Assessment data loaded successfully
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Total Questions Available
                </h3>
                <p className={`text-3xl font-bold text-blue-500`}>
                  {questions.AptitudeModule?.length + 
                   questions.GeneralLifeUnderstanding?.length + 
                   questions.WorkStyleProfiler?.length + 
                   questions.TechInterestExplorer?.length || 40}
                </p>
              </div>
              
              <div className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Modules Available
                </h3>
                <p className={`text-3xl font-bold text-green-500`}>4</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Module Breakdown:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Aptitude Module
                  </span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {questions.AptitudeModule?.length || 10} questions
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    General Life Understanding
                  </span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {questions.GeneralLifeUnderstanding?.length || 10} questions
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Work Style Profiler
                  </span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {questions.WorkStyleProfiler?.length || 10} questions
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Tech Interest Explorer
                  </span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {questions.TechInterestExplorer?.length || 10} questions
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Select a module from the portal to begin.</p>
              <a href="/assessment?module=aptitude" className={`inline-block group font-semibold text-sm px-5 py-2 rounded-full mr-2 transition-all ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>Aptitude</a>
              <a href="/assessment?module=general" className={`inline-block group font-semibold text-sm px-5 py-2 rounded-full mr-2 transition-all ${isDarkMode ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-purple-600 text-white hover:bg-purple-500'}`}>General</a>
              <a href="/assessment?module=workstyle" className={`inline-block group font-semibold text-sm px-5 py-2 rounded-full mr-2 transition-all ${isDarkMode ? 'bg-green-600 text-white hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-500'}`}>Work Style</a>
              <a href="/assessment?module=techinterest" className={`inline-block group font-semibold text-sm px-5 py-2 rounded-full transition-all ${isDarkMode ? 'bg-pink-600 text-white hover:bg-pink-500' : 'bg-pink-600 text-white hover:bg-pink-500'}`}>Tech Interest</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive module assessment component
function ModuleAssessment({ moduleParam, moduleDisplayName, isDarkMode, questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // id -> selected option index
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  const handleSelect = (optionIdx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIdx }));
  };

  const next = () => setCurrentIndex(i => Math.min(i + 1, total - 1));
  const prev = () => setCurrentIndex(i => Math.max(i - 1, 0));

  const onSubmit = () => {
    setSubmitted(true);
  };

  // Compute score only for questions with correct >= 0
  const scoredQuestions = questions.filter(q => q.correct >= 0);
  const score = scoredQuestions.reduce((acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0), 0);
  const preferences = questions.filter(q => q.correct === -1).map(q => ({ question: q.question, choice: q.options[answers[q.id]] || null }));
  const unanswered = questions.filter(q => answers[q.id] == null).length;

  if (submitted) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'} py-10 px-4`}> 
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{moduleDisplayName} - Results</h1>
          <div className={`rounded-xl p-6 mb-6 ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow'}`}>
            <p className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Score: {score} / {scoredQuestions.length}</p>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unanswered: {unanswered}</p>
          </div>
          {preferences.length > 0 && (
            <div className={`rounded-xl p-6 mb-6 ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow'}`}>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Your Preferences</h2>
              <ul className="space-y-3">
                {preferences.map((p, idx) => (
                  <li key={idx} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-medium">Q: {p.question}</span><br />
                    <span className="text-sm">Selected: {p.choice || 'No selection'}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <a href="/assessment" className={`inline-block px-6 py-3 rounded-full font-medium ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>Back to Modules</a>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'} py-10 px-4`}>
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{moduleDisplayName}</h1>
        <div className={`rounded-xl p-6 mb-6 ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow'}`}>
          <div className="flex justify-between items-center mb-4">
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Question {currentIndex + 1} / {total}</span>
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Answered: {Object.keys(answers).length}</span>
          </div>
          <p className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentQuestion.question}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => {
              const selected = answers[currentQuestion.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition ${selected ? (isDarkMode ? 'bg-blue-600 border-blue-500 text-white' : 'bg-blue-600 border-blue-600 text-white') : (isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700' : 'bg-gray-50 border-gray-300 hover:bg-gray-100')}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button onClick={prev} disabled={currentIndex === 0} className={`px-5 py-2 rounded-full text-sm font-medium ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : (isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300')}`}>Previous</button>
            {currentIndex < total - 1 && (
              <button onClick={next} className={`px-5 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>Next</button>
            )}
            {currentIndex === total - 1 && (
              <button onClick={onSubmit} className={`px-6 py-2 rounded-full text-sm font-semibold ${isDarkMode ? 'bg-green-600 text-white hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-500'}`}>Submit</button>
            )}
          </div>
        </div>
        <a href="/assessment" className={`inline-block px-4 py-2 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Back</a>
      </div>
    </div>
  );
}

export default function AssessmentPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <AssessmentContent />
      </Suspense>
    </ErrorBoundary>
  );
}