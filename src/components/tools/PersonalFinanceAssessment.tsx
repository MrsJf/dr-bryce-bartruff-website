'use client';

import { useState } from 'react';

interface AssessmentCategory {
  id: string;
  title: string;
  description: string;
  score: number;
}

const ASSESSMENT_CATEGORIES: Omit<AssessmentCategory, 'score'>[] = [
  {
    id: 'budgeting',
    title: 'Budgeting & Planning',
    description: 'I create and follow a realistic monthly budget'
  },
  {
    id: 'saving',
    title: 'Saving Habits',
    description: 'I consistently save money each month'
  },
  {
    id: 'emergency',
    title: 'Emergency Fund',
    description: 'I have 3-6 months of expenses saved for emergencies'
  },
  {
    id: 'debt',
    title: 'Debt Management',
    description: 'I manage my debt responsibly and pay more than minimums'
  },
  {
    id: 'investing',
    title: 'Investment Knowledge',
    description: 'I understand basic investment principles and have investments'
  },
  {
    id: 'insurance',
    title: 'Insurance Coverage',
    description: 'I have adequate insurance coverage for my needs'
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    description: 'I regularly contribute to retirement accounts'
  },
  {
    id: 'goals',
    title: 'Financial Goals',
    description: 'I have clear, written financial goals with target dates'
  },
  {
    id: 'spending',
    title: 'Spending Control',
    description: 'I avoid impulse purchases and stick to my spending plan'
  },
  {
    id: 'income',
    title: 'Income Growth',
    description: 'I actively work to increase my income over time'
  },
  {
    id: 'knowledge',
    title: 'Financial Education',
    description: 'I regularly read about personal finance and investing'
  },
  {
    id: 'giving',
    title: 'Charitable Giving',
    description: 'I give regularly to charity as part of my financial plan'
  }
];

export default function PersonalFinanceAssessment() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const updateScore = (categoryId: string, score: number) => {
    setScores(prev => ({ ...prev, [categoryId]: score }));
  };

  const calculateResults = () => {
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / ASSESSMENT_CATEGORIES.length;
    setShowResults(true);
    return { totalScore, averageScore };
  };

  const getScoreInterpretation = (average: number) => {
    if (average >= 8) return { level: 'Excellent', color: 'text-green-600', description: 'You have strong financial habits and are well on your way to financial freedom!' };
    if (average >= 6) return { level: 'Good', color: 'text-blue-600', description: 'You have solid financial foundations with room for improvement in some areas.' };
    if (average >= 4) return { level: 'Fair', color: 'text-yellow-600', description: 'You have some good habits but need to strengthen several key areas.' };
    return { level: 'Needs Improvement', color: 'text-red-600', description: 'Focus on building stronger financial habits - start with budgeting and emergency savings.' };
  };

  const results = Object.keys(scores).length === ASSESSMENT_CATEGORIES.length ? calculateResults() : null;
  const interpretation = results ? getScoreInterpretation(results.averageScore) : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Finance Assessment</h2>
        <p className="text-lg text-gray-600">
          Rate yourself on a scale of 1-10 for each financial area. Be honest - this will help identify your strengths and areas for growth.
        </p>
      </div>

      <div className="space-y-6">
        {ASSESSMENT_CATEGORIES.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="ml-4 text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {scores[category.id] || '—'}
                </div>
                <div className="text-sm text-gray-500">/ 10</div>
              </div>
            </div>
            
            <div className="mt-4">
              <input
                type="range"
                min="1"
                max="10"
                value={scores[category.id] || 1}
                onChange={(e) => updateScore(category.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((scores[category.id] || 1) - 1) * 11.11}%, #e5e7eb ${((scores[category.id] || 1) - 1) * 11.11}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Poor (1)</span>
                <span>Average (5)</span>
                <span>Excellent (10)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {Object.keys(scores).length === ASSESSMENT_CATEGORIES.length && (
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Financial Health Score</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{results?.totalScore}</div>
              <div className="text-sm text-gray-600">Total Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{results?.averageScore.toFixed(1)}</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${interpretation?.color}`}>{interpretation?.level}</div>
              <div className="text-sm text-gray-600">Financial Health</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Assessment Results</h4>
            <p className="text-gray-700 mb-4">{interpretation?.description}</p>
            
            <div className="space-y-2">
              <h5 className="font-medium text-gray-900">Areas to Focus On:</h5>
              {ASSESSMENT_CATEGORIES
                .filter(cat => (scores[cat.id] || 0) < 6)
                .sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0))
                .slice(0, 3)
                .map(cat => (
                  <div key={cat.id} className="flex justify-between items-center text-sm">
                    <span>{cat.title}</span>
                    <span className="text-gray-500">Score: {scores[cat.id]}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Print Results
        </button>
      </div>
    </div>
  );
}