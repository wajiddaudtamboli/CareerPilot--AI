"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Target, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export default function SyllabusOutline({ courseData }) {
  const [expandedChapters, setExpandedChapters] = useState({});

  if (!courseData) {
    return (
      <div className="p-6 text-center text-gray-500">
        No course data available
      </div>
    );
  }

  const handleStartTest = () => {
    // Save the topic for the test
    localStorage.setItem('selectedTopic', courseData.courseTitle || 'General Topics');
    
    // Navigate to TestAbility component
    window.location.href = '/learn?page=TestAbility';
  };

  const toggleChapter = (index) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      {/* Course Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {courseData.courseTitle || "Study Material"}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {courseData.courseSummary || "Comprehensive learning material"}
        </p>
        
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">Study Material Ready</h3>
                  <p className="text-blue-700 text-sm">Review the course content below</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-900">Test Your Knowledge</h3>
                  <p className="text-green-700 text-sm">Take a 20-question assessment</p>
                </div>
                <Button 
                  onClick={handleStartTest}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
                >
                  Start Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Test Info */}
        <Card className="bg-yellow-50 border-yellow-200 mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <span className="text-yellow-800 font-medium">20 Minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-yellow-600" />
                <span className="text-yellow-800 font-medium">20 Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-yellow-600" />
                <span className="text-yellow-800 font-medium">Multiple Choice</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Course Chapters
        </h2>

        {courseData.chapters && Array.isArray(courseData.chapters) ? (
          courseData.chapters.map((chapter, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader
                className="cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
                onClick={() => toggleChapter(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Chapter {index + 1}: {chapter.chapterTitle || "Untitled"}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {chapter.chapterSummary || "No summary available"}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedChapters[index] ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </CardHeader>

              {/* Topics - Expanded View */}
              {expandedChapters[index] && (
                <CardContent className="pt-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Topics:</h4>
                    {chapter.topics && Array.isArray(chapter.topics) ? (
                      <ul className="space-y-2">
                        {chapter.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex items-start text-gray-700"
                          >
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm font-semibold mr-3 flex-shrink-0">
                              {topicIndex + 1}
                            </span>
                            <span className="pt-0.5">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No topics listed</p>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))
        ) : (
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <p className="text-yellow-800">
                Chapters data not available in the expected format
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Empty State */}
      {(!courseData.chapters || courseData.chapters.length === 0) && (
        <Card className="bg-blue-50 border-blue-200 text-center py-8">
          <CardContent>
            <p className="text-blue-800 text-lg">
              No chapters available yet. Please try generating study material
              again.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
