"use client";
import { ExternalLink, Globe } from "lucide-react";
import { SiZoom, SiGoogle } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";

const mockInterviewPlatforms = [
  { name: "Zoom", icon: SiZoom, url: "https://zoom.us/", color: "#2D8CFF" },
  { name: "Google Meet", icon: SiGoogle, url: "https://meet.google.com/", color: "#4285F4" },
  { name: "InterviewBit", icon: Globe, url: "https://www.interviewbit.com/", color: "#FF6B35" },
  { name: "Pramp", icon: Globe, url: "https://www.pramp.com/", color: "#4CAF50" },
  { name: "Gainlo", icon: Globe, url: "http://www.gainlo.co/", color: "#2196F3" },
  { name: "InterviewBuddy", icon: Globe, url: "https://interviewbuddy.in/", color: "#FF9800" },
  { name: "MeetLeet", icon: Globe, url: "https://meetleet.com/", color: "#9C27B0" },
  { name: "HireVue", icon: Globe, url: "https://www.hirevue.com/", color: "#E91E63" },
  { name: "HackerEarth Interviews", icon: Globe, url: "https://www.hackerearth.com/", color: "#2C3454" },
  { name: "iMocha", icon: Globe, url: "https://www.imocha.io/", color: "#607D8B" },
  { name: "Workday Interview", icon: Globe, url: "https://www.workday.com/", color: "#F44336" },
  { name: "Superset Interview", icon: Globe, url: "https://joinsuperset.com/", color: "#673AB7" }
];

export default function PreMockInterview() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`min-h-screen p-6 ${
      isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-blue-50"
    }`}>
      <div className="max-w-6xl mx-auto">
        <Card className={isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"}>
          <CardHeader>
            <CardTitle className={`text-2xl ${
              isDarkMode ? "text-white" : "text-blue-900"
            }`}>Mock Interview Platforms</CardTitle>
            <p className={isDarkMode ? "text-gray-300" : "text-blue-700"}>
              Practice with these platforms used by real recruiters
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockInterviewPlatforms.map((platform, index) => {
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
                      <CardContent className="p-4">
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
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

