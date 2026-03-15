import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Progress } from '../../../components/ui/progress';
import { CheckCircle2, XCircle, Clock, Trophy, ArrowLeft, RotateCcw } from 'lucide-react';
import { Badge } from '../../../components/ui/badge';

const TestAbility = () => {
  const [currentMode, setCurrentMode] = useState('loading'); // loading, test, results
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes
  const [topic, setTopic] = useState('');
  const [testStarted, setTestStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load topic from localStorage when component mounts
  useEffect(() => {
    const savedTopic = localStorage.getItem('selectedTopic');
    const courseData = localStorage.getItem('courseOutline');
    
    if (savedTopic) {
      setTopic(savedTopic);
    } else if (courseData) {
      try {
        const course = JSON.parse(courseData);
        setTopic(course.courseTitle || 'General Topics');
      } catch (error) {
        console.error('Error parsing course data:', error);
        setTopic('General Topics');
      }
    } else {
      setTopic('General Topics');
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0 && currentMode === 'test') {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, timeLeft, currentMode]);

  // Generate questions using Gemini API
  const generateQuestions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Generate 20 unique multiple-choice questions about "${topic}". 
          
          Requirements:
          - Questions should test understanding, application, and analysis
          - Mix of difficulty levels (easy, medium, hard)
          - 4 options per question (A, B, C, D)
          - Include clear explanations for correct answers
          - Cover different aspects of the topic
          
          Return as JSON with this structure:
          {
            "questions": [
              {
                "question": "Question text",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correct_answer": "Option A",
                "explanation": "Detailed explanation why this is correct",
                "difficulty": "easy|medium|hard",
                "category": "subcategory of the topic"
              }
            ]
          }`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate questions');
      }

      const data = await response.json();
      
      // Parse the response
      let questionsData;
      try {
        if (typeof data.response === 'string') {
          // Remove markdown formatting if present
          const cleanedResponse = data.response
            .replace(/```json\s*/g, '')
            .replace(/```\s*/g, '')
            .trim();
          questionsData = JSON.parse(cleanedResponse);
        } else {
          questionsData = data.response;
        }
      } catch (parseError) {
        console.error('Error parsing questions:', parseError);
        throw new Error('Failed to parse generated questions');
      }

      if (questionsData.questions && Array.isArray(questionsData.questions)) {
        setQuestions(questionsData.questions);
        setCurrentMode('test');
        setTestStarted(true);
      } else {
        throw new Error('Invalid questions format received');
      }

    } catch (error) {
      console.error('Error generating questions:', error);
      setError(error.message || 'Failed to generate questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle starting the test
  const handleStartTest = () => {
    if (!topic) {
      setError('No topic selected. Please select a topic first.');
      return;
    }
    generateQuestions();
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // Navigate to previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Jump to specific question
  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Submit test and calculate results
  const handleSubmitTest = () => {
    setCurrentMode('results');
    setTestStarted(false);
  };

  // Calculate score
  const calculateScore = () => {
    let correct = 0;
    let attempted = 0;
    
    questions.forEach((question, index) => {
      const userAnswer = selectedAnswers[index];
      if (userAnswer) {
        attempted++;
        if (userAnswer === question.correct_answer) {
          correct++;
        }
      }
    });

    return {
      correct,
      total: questions.length,
      attempted,
      percentage: questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0
    };
  };

  // Restart test
  const handleRestartTest = () => {
    setCurrentMode('loading');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeLeft(20 * 60);
    setTestStarted(false);
    setQuestions([]);
    setError(null);
  };

  // Go back to learning
  const handleBackToLearning = () => {
    // Navigate back to Recall mode
    window.location.href = '/learn?page=Recall';
  };

  // Format time display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const score = currentMode === 'results' ? calculateScore() : null;

  // Loading state
  if (currentMode === 'loading') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-800">
              Test Your Knowledge
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Ready to test what you've learned about <span className="font-semibold text-blue-600">{topic}</span>?
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">20</div>
                <div className="text-sm text-gray-600">Questions</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">20</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">MCQ</div>
                <div className="text-sm text-gray-600">Format</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Test Instructions:</h3>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  You have 20 minutes to complete 20 questions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Each question has 4 options, select the best answer
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  You can navigate between questions freely
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Submit when done or time runs out
                </li>
              </ul>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <Button 
                onClick={handleStartTest} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                disabled={loading}
              >
                {loading ? 'Generating Questions...' : 'Start Test'}
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleBackToLearning}
                className="ml-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Learning
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Test in progress
  if (currentMode === 'test') {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Progress</CardTitle>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span className={`font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-green-600'}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={(Object.keys(selectedAnswers).length / questions.length) * 100} 
                  className="mb-4" 
                />
                <p className="text-sm text-gray-600 mb-4">
                  {Object.keys(selectedAnswers).length} of {questions.length} answered
                </p>
                
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionNavigation(index)}
                      className={`w-8 h-8 text-xs rounded ${
                        currentQuestionIndex === index
                          ? 'bg-blue-600 text-white'
                          : selectedAnswers[index]
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <Button 
                  onClick={handleSubmitTest}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                >
                  Submit Test
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant={
                        currentQuestion?.difficulty === 'easy' ? 'secondary' :
                        currentQuestion?.difficulty === 'medium' ? 'default' : 'destructive'
                      }>
                        {currentQuestion?.difficulty || 'Medium'}
                      </Badge>
                      {currentQuestion?.category && (
                        <Badge variant="outline">{currentQuestion.category}</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <h3 className="text-lg font-medium leading-relaxed">
                    {currentQuestion?.question}
                  </h3>

                  <div className="space-y-3">
                    {currentQuestion?.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        className={`w-full p-4 text-left border rounded-lg transition-all ${
                          selectedAnswers[currentQuestionIndex] === option
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium mr-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <Button
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestionIndex === 0}
                      variant="outline"
                    >
                      Previous
                    </Button>

                    <span className="text-sm text-gray-500">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>

                    <Button
                      onClick={handleNextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Results page
  if (currentMode === 'results') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-800">
              Test Results
            </CardTitle>
            <p className="text-gray-600">Here's how you performed on {topic}</p>
          </CardHeader>
          <CardContent>
            {/* Score Summary */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full text-4xl font-bold mb-4 ${
                score.percentage >= 80 ? 'bg-green-100 text-green-800' :
                score.percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {score.percentage}%
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{score.correct}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{score.total - score.correct}</div>
                  <div className="text-sm text-gray-600">Incorrect</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{score.attempted}</div>
                  <div className="text-sm text-gray-600">Attempted</div>
                </div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="text-center mb-8">
              <div className={`p-4 rounded-lg ${
                score.percentage >= 80 ? 'bg-green-50 text-green-800' :
                score.percentage >= 60 ? 'bg-yellow-50 text-yellow-800' :
                'bg-red-50 text-red-800'
              }`}>
                {score.percentage >= 80 ? (
                  <>
                    <Trophy className="w-6 h-6 inline mr-2" />
                    Excellent! You have a strong understanding of {topic}.
                  </>
                ) : score.percentage >= 60 ? (
                  'Good job! You have a decent understanding, but there\'s room for improvement.'
                ) : (
                  'Keep studying! Focus on the areas where you made mistakes.'
                )}
              </div>
            </div>

            {/* Detailed Results */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Review Your Answers</h3>
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct_answer;
                const wasAttempted = userAnswer !== undefined;

                return (
                  <Card key={index} className={`border-l-4 ${
                    !wasAttempted ? 'border-gray-300' :
                    isCorrect ? 'border-green-500' : 'border-red-500'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Question {index + 1}</h4>
                        <div className="flex items-center">
                          {!wasAttempted ? (
                            <Badge variant="secondary">Not Attempted</Badge>
                          ) : isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{question.question}</p>
                      
                      <div className="space-y-2">
                        {wasAttempted && (
                          <div>
                            <span className="text-sm font-medium">Your answer: </span>
                            <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                              {userAnswer}
                            </span>
                          </div>
                        )}
                        
                        <div>
                          <span className="text-sm font-medium">Correct answer: </span>
                          <span className="text-green-600">{question.correct_answer}</span>
                        </div>
                        
                        {question.explanation && (
                          <div className="p-3 bg-blue-50 rounded text-sm">
                            <span className="font-medium">Explanation: </span>
                            {question.explanation}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={handleRestartTest}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Take Test Again
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleBackToLearning}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Learning
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default TestAbility;