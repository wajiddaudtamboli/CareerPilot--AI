"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeContext } from "./ThemeContext";
import { 
  Brain, 
  Users, 
  Target, 
  Code, 
  Calculator, 
  Heart, 
  PenTool, 
  BarChart3,
  ArrowRight,
  Play,
  Star,
  Zap
} from "lucide-react";

export default function NewFeatureModules() {
  const { isDarkMode } = useContext(ThemeContext);
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const featureModules = [
    {
      id: 'aptitude',
      title: 'Aptitude Module',
      subtitle: 'Quantitative, Logical, DI Basics',
      description: 'Master quantitative aptitude, logical reasoning, and data interpretation with adaptive tests',
      icon: Calculator,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: isDarkMode 
        ? 'from-blue-500/10 to-cyan-500/10' 
        : 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-500/20',
      features: ['Adaptive Tests', 'Real-time Analytics', 'Progress Tracking'],
      route: '/api/assessment/questions?module=AptitudeModule'
    },
    {
      id: 'general',
      title: 'General Questions Module',
      subtitle: 'Life-relatable fresher questions',
      description: 'Understand personality traits and life perspectives through relatable questions',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: isDarkMode 
        ? 'from-pink-500/10 to-rose-500/10' 
        : 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-500/20',
      features: ['Personality Insights', 'Life Skills Assessment', 'Growth Mindset'],
      route: '/api/assessment/questions?module=GeneralLifeUnderstanding'
    },
    {
      id: 'workstyle',
      title: 'Work-Style Profiler',
      subtitle: 'Creative | Management | Technical | Analytical',
      description: '10 dynamic questions that drive role recommendations and career alignment',
      icon: Users,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: isDarkMode 
        ? 'from-purple-500/10 to-indigo-500/10' 
        : 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-500/20',
      features: ['Role Matching', 'Career Roadmaps', 'Team Dynamics'],
      route: '/api/assessment/questions?module=WorkStyleProfiler'
    },
    {
      id: 'techinterest',
      title: 'Tech-Interest Explorer',
      subtitle: 'Tech vs Non-Tech Alignment',
      description: '10 beginner-friendly questions to discover your technology interests and aptitude',
      icon: Code,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: isDarkMode 
        ? 'from-emerald-500/10 to-teal-500/10' 
        : 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-500/20',
      features: ['Tech Aptitude', 'Domain Preferences', 'Learning Path'],
      route: '/api/assessment/questions?module=TechInterestExplorer'
    }
  ];

  const handleModuleClick = (module) => {
    try {
      // Navigate to assessment page with module parameter
      router.push(`/assessment?module=${module.id}`);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback navigation
      window.location.href = `/assessment?module=${module.id}`;
    }
  };

  const handleStartAssessment = () => {
    try {
      router.push('/assessment');
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = '/assessment';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-6 ${
            isDarkMode
              ? "bg-gray-600/20 text-gray-300"
              : "bg-blue-100/80 text-blue-700 border border-blue-200/50"
          }`}>
            <Target className="w-5 h-5" />
            <span>Career Assessment Modules</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Discover Your{" "}
            <span className={`bg-gradient-to-r ${
              isDarkMode
                ? "from-blue-400 to-purple-400"
                : "from-blue-600 to-purple-600"
            } bg-clip-text text-transparent`}>
              Career Path
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Take our comprehensive 4-module assessment to understand your aptitude, personality, work style, and technology interests.
          </p>

          <button
            onClick={handleStartAssessment}
            className={`group font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            }`}
          >
            <Play className="w-5 h-5" />
            <span>Start Complete Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featureModules.map((module, index) => (
            <div
              key={module.id}
              className={`group relative rounded-3xl p-8 border transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                isDarkMode
                  ? `bg-gradient-to-br ${module.bgGradient} backdrop-blur-sm border-white/10 hover:border-white/20`
                  : `bg-gradient-to-br ${module.bgGradient} backdrop-blur-sm ${module.borderColor} hover:shadow-xl shadow-lg`
              }`}
              onMouseEnter={() => setHoveredCard(module.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleModuleClick(module)}
            >
              {/* Animated background effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${module.gradient} blur-xl -z-10`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.gradient} transform group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {module.title}
                    </h3>
                    <p className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {module.subtitle}
                    </p>
                  </div>

                  <p className={`leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {module.description}
                  </p>

                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient}`}></div>
                        <span className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={`pt-4 border-t ${
                    isDarkMode ? "border-white/10" : "border-gray-200"
                  }`}>
                    <button className={`text-sm font-medium group-hover:text-white transition-colors duration-300 flex items-center space-x-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      <span>Take Assessment</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                15+
              </div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Departments Supported
              </div>
            </div>
            <div className="space-y-2">
              <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                200+
              </div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Job Roles Mapped
              </div>
            </div>
            <div className="space-y-2">
              <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                300+
              </div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Roadmaps Generated
              </div>
            </div>
            <div className="space-y-2">
              <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                1000+
              </div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Active Users
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}