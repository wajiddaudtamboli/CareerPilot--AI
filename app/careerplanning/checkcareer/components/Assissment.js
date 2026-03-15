import { useState } from "react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

const Assisment = ({
  questions,
  field,
  setAssessment,
  assessment,
  setShow,
}) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleOptionSelect = (questionIndex, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleResponse = async () => {
    setLoading(true);
    const assessmentTypes = {
      1: 'passion',
      2: 'profession',
      3: 'vocation',
      4: 'mission'
    };

    const assessmentType = assessmentTypes[assessment] || 'assessment';
    const answerScoreMap = {
      Yes: 2,
      "Can't Say": 1,
      No: 0,
    };

    try {
      const maxScore = results.length * 2;
      const score = results.reduce(
        (sum, item) => sum + (answerScoreMap[item.answer] ?? 1),
        0
      );
      const scorePct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

      let level = "moderate";
      if (scorePct >= 75) level = "strong";
      if (scorePct < 45) level = "low";

      const staticResult = {
        recommendation: `Your ${assessmentType} alignment for ${field} is ${level} (${scorePct}%).`,
        what_next:
          level === "strong"
            ? `Keep momentum by taking advanced projects and role-specific learning in ${field}.`
            : level === "moderate"
            ? `Strengthen consistency with guided projects, mentorship, and weekly practice in ${field}.`
            : `Start with fundamentals and short practical tasks to validate your interest in ${field}.`,
        conclusion: `The ${assessmentType} assessment indicates ${level} compatibility with ${field}.`,
        score,
        maxScore,
        scorePct,
      };

      localStorage.setItem(`assessment_${assessment}`, JSON.stringify(staticResult));
      setAssessment((prev) => prev + 1);
      setShow(false);
      localStorage.setItem("assessment", assessment + 1);

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('assessmentUpdated'));
      }
    } catch (error) {
      console.error('Error in handleResponse:', error);

      const fallbackResult = {
        recommendation: `Assessment completed for ${field} ${assessmentType}.`,
        what_next: `Review your responses and consider seeking additional guidance.`,
        conclusion: `${assessmentType.charAt(0).toUpperCase() + assessmentType.slice(1)} assessment completed. Consider professional career counseling for detailed analysis.`
      };
      localStorage.setItem(`assessment_${assessment}`, JSON.stringify(fallbackResult));
      setAssessment((prev) => prev + 1);
      setShow(false);
      localStorage.setItem("assessment", assessment + 1);

      // Trigger parent component to refresh assessment states
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('assessmentUpdated'));
      }
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    const combinedResults = questions.map((q, index) => ({
      question: q.question,
      answer: answers[index],
    }));
    setResults(combinedResults);
    setSubmitted(true);
    console.log(combinedResults);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              Assessment {assessment}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <div className="space-y-6">
                {questions.map((q, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <p className="text-lg font-medium mb-4 text-gray-700">
                      {index + 1}. {q.question}
                    </p>
                    <div className="flex gap-4">
                      {q.options.map((option) => (
                        <Button
                          key={option}
                          onClick={() => handleOptionSelect(index, option)}
                          className={`px-6 py-2 ${
                            answers[index] === option
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    className="bg-blue-500 text-white px-8 py-3 text-base hover:bg-blue-700"
                  >
                    Submit Assessment
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <Alert className="bg-green-50 border-green-200">
                  <AlertDescription className="text-green-800">
                    Thank you for completing the assessment! Here are your
                    responses:
                  </AlertDescription>
                </Alert>
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="font-medium text-gray-700">
                      {result.question}
                    </p>
                    <p className="mt-2 text-blue-600">
                      Answer: {result.answer}
                    </p>
                  </div>
                ))}
                <Button
                  className="w-full bg-gray-600 text-white hover:bg-gray-700"
                  disabled={loading}
                  onClick={() => {
                    handleResponse();
                  }}
                >
                  {loading ? "Please Wait..." : "Start Over"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assisment;
