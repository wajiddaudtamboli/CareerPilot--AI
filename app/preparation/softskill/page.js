"use client";

import { ExternalLink, Globe } from "lucide-react";
import {
  SiLinkedin,
  SiCoursera,
  SiUdemy,
  SiSkillshare,
  SiEdx,
} from "react-icons/si";
import { Card } from "../../../components/ui/card";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";

const softSkillsPlatforms = [
  { name: "LinkedIn Learning", icon: SiLinkedin, url: "https://www.linkedin.com/learning/", color: "#0A66C2" },
  { name: "Coursera", icon: SiCoursera, url: "https://www.coursera.org/", color: "#0056D3" },
  { name: "Udemy", icon: SiUdemy, url: "https://www.udemy.com/", color: "#A435F0" },
  { name: "Skillshare", icon: SiSkillshare, url: "https://www.skillshare.com/", color: "#00FF88" },
  { name: "edX", icon: SiEdx, url: "https://www.edx.org/", color: "#02262F" },
  { name: "Toastmasters", icon: Globe, url: "https://www.toastmasters.org/", color: "#004165" },
  { name: "MindTools", icon: Globe, url: "https://www.mindtools.com/", color: "#FF6B35" },
  { name: "Alison", icon: Globe, url: "https://alison.com/", color: "#00A651" },
  { name: "FutureLearn", icon: Globe, url: "https://www.futurelearn.com/", color: "#DE3A80" },
  { name: "Communication Coach AI", icon: Globe, url: "https://www.yoodli.ai/", color: "#6366F1" }
];

// Removed features and assessment actions

const SoftSkillAssessmentPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen p-4 ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-blue-50 to-white"
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Assessment header and actions removed permanently */}

        {/* Soft Skills Learning Platforms */}
        <Card className={`border-2 shadow-2xl rounded-2xl overflow-hidden mt-8 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-blue-100"
        }`}>
          <div className={`p-6 text-center ${
            isDarkMode
              ? "bg-blue-700 text-white"
              : "bg-blue-600 text-white"
          }`}>
            <h2 className="text-2xl font-bold mb-2">Soft Skills Learning Platforms</h2>
            <p className={isDarkMode ? "text-blue-100" : "text-blue-100"}>Enhance your professional skills with these platforms</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkillsPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className={`h-full transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 hover:border-blue-500"
                        : "bg-white border-gray-200 hover:border-blue-400"
                    }`}>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-lg ${
                            isDarkMode ? "bg-gray-600" : "bg-gray-100"
                          }`} style={{ color: platform.color }}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <ExternalLink className={`w-4 h-4 group-hover:text-blue-500 ${
                            isDarkMode ? "text-gray-400" : "text-gray-400"
                          }`} />
                        </div>
                        <h3 className={`font-semibold text-sm ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}>{platform.name}</h3>
                        <p className={`text-xs truncate ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>{platform.url}</p>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SoftSkillAssessmentPage;
