"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { ThemeContext } from "../../components/ThemeContext";
import { 
  Brain, 
  Users, 
  Target, 
  Code, 
  Calculator, 
  Heart, 
  ArrowRight,
  Play,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

export default function ModernAssessmentPortal() {
  const { isDarkMode } = useContext(ThemeContext);
  const router = useRouter();

  const assessmentModules = [
    {
      id: 'aptitude',
      title: 'Aptitude Assessment',
      description: 'Quantitative, Logical, and Data Interpretation skills evaluation',
      icon: Calculator,
      duration: '25 min',
      questions: '10 Questions',
      difficulty: 'Adaptive',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'general',
      title: 'General Life Understanding', 
      description: 'Personality traits and life perspective assessment',
      icon: Heart,
      duration: '20 min',
      questions: '10 Questions',
      difficulty: 'Beginner',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'workstyle',
      title: 'Work-Style Profiler',
      description: 'Discover your work preferences and collaboration style',
      icon: Users,
      duration: '15 min',
      questions: '10 Questions',
      difficulty: 'Intermediate',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'techinterest',
      title: 'Tech-Interest Explorer',
      description: 'Evaluate your technology aptitude and interests',
      icon: Code,
      duration: '20 min',
      questions: '10 Questions',
      difficulty: 'Beginner',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const handleStartAssessment = (moduleId) => {
    router.push(`/assessment?module=${moduleId}`);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career Assessment Portal
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover your strengths and career path through our comprehensive 4-module assessment system
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-lg'}`}>
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
              <Clock className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Duration</h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">80 min</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Time</p>
          </div>

          <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-lg'}`}>
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
              <Target className={`w-8 h-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Modules</h3>
            <p className="text-3xl font-bold text-purple-500 mb-1">4</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Assessment Areas</p>
          </div>

          <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-lg'}`}>
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <CheckCircle className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Questions</h3>
            <p className="text-3xl font-bold text-green-500 mb-1">40</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Questions</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {assessmentModules.map((module, index) => (
            <div key={module.id} className={`group rounded-3xl p-8 border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
              isDarkMode
                ? 'bg-gray-900/50 border-gray-800 hover:border-gray-600'
                : 'bg-white border-gray-200 hover:shadow-xl shadow-lg'
            }`}>
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.gradient}`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="text-sm font-medium">{module.duration}</div>
                  <div className="text-xs">{module.questions}</div>
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {module.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {module.description}
              </p>

              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {module.difficulty}
                </span>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${
                      star <= 4 ? 'text-yellow-400 fill-current' : isDarkMode ? 'text-gray-600' : 'text-gray-300'
                    }`} />
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleStartAssessment(module.id)}
                className={`w-full group/btn bg-gradient-to-r ${module.gradient} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2`}
              >
                <Play className="w-5 h-5" />
                <span>Start Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 p-12 rounded-3xl ${
          isDarkMode
            ? 'bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700'
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Start Your Career Assessment?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Complete all 4 modules to get a comprehensive career analysis and personalized recommendations
          </p>
          <button
            onClick={() => router.push('/assessment')}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Target className="w-6 h-6" />
            <span>Begin Complete Assessment</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}