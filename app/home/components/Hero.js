"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";

function Hero() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`${isDarkMode
        ? "bg-gray-900 border-b border-gray-700 text-white"
        : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                Your Journey from Campus to Company Starts Here
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Personalized career paths, skills development, interview
                preparation and job opportunities tailored for students.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/careerplanning?page=DepartmentJobRoles"
                  className={`${isDarkMode
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-blue-100 hover:bg-blue-200"}
                    font-black px-6 py-3 rounded-md transition flex items-center justify-center text-gray-900`}
                >
                  <span className="font-black text-gray-900">Start Career</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/learn?page=IndustryCertifications"
                  className={`border-2 ${isDarkMode
                    ? "border-gray-500 hover:bg-gray-500"
                    : "border-blue-300 hover:bg-blue-100"}
                    font-black px-6 py-3 rounded-md transition flex items-center justify-center text-gray-900`}
                >
                  <span className="font-black text-gray-900">Explore Learn</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <Image
                src={"/interview.png"}
                width={800}
                height={800}
                alt="Students exploring career options"
                className={`rounded-lg ${isDarkMode ? "border border-gray-700" : "shadow-xl"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
