'use client';

import { useState } from 'react';

interface BudgetGuideline {
  category: string;
  lowIncome: number;  // &lt;$30k
  midIncome: number;  // $30k-$75k
  highIncome: number; // &gt;$75k
  description: string;
}

const BUDGET_GUIDELINES: BudgetGuideline[] = [
  {
    category: 'Giving/Tithe',
    lowIncome: 5,
    midIncome: 10,
    highIncome: 10,
    description: 'Charitable giving and tithing'
  },
  {
    category: 'Savings',
    lowIncome: 5,
    midIncome: 10,
    highIncome: 15,
    description: 'Emergency fund and long-term savings'
  },
  {
    category: 'Housing',
    lowIncome: 35,
    midIncome: 30,
    highIncome: 25,
    description: 'Rent/mortgage, utilities, maintenance'
  },
  {
    category: 'Food',
    lowIncome: 15,
    midIncome: 12,
    highIncome: 10,
    description: 'Groceries and dining out'
  },
  {
    category: 'Transportation',
    lowIncome: 15,
    midIncome: 15,
    highIncome: 12,
    description: 'Car payment, gas, insurance, maintenance'
  },
  {
    category: 'Clothing',
    lowIncome: 5,
    midIncome: 4,
    highIncome: 3,
    description: 'Clothing and personal items'
  },
  {
    category: 'Medical/Health',
    lowIncome: 5,
    midIncome: 5,
    highIncome: 5,
    description: 'Insurance premiums, medical expenses'
  },
  {
    category: 'Personal',
    lowIncome: 5,
    midIncome: 5,
    highIncome: 5,
    description: 'Personal care, phone, miscellaneous'
  },
  {
    category: 'Recreation/Entertainment',
    lowIncome: 5,
    midIncome: 6,
    highIncome: 8,
    description: 'Entertainment, hobbies, vacation'
  },
  {
    category: 'Debt Payments',
    lowIncome: 5,
    midIncome: 3,
    highIncome: 2,
    description: 'Credit cards, loans (excluding mortgage)'
  }
];

export default function BudgetPercentageGuide() {
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [currentBudget, setCurrentBudget] = useState<Record<string, number>>({});

  const income = parseFloat(monthlyIncome) || 0;
  const annualIncome = income * 12;
  
  const getIncomeCategory = () => {
    if (annualIncome < 30000) return 'low';
    if (annualIncome <= 75000) return 'mid';
    return 'high';
  };

  const incomeCategory = getIncomeCategory();
  
  const getRecommendedPercentage = (guideline: BudgetGuideline) => {
    switch (incomeCategory) {
      case 'low': return guideline.lowIncome;
      case 'mid': return guideline.midIncome;
      case 'high': return guideline.highIncome;
      default: return guideline.midIncome;
    }
  };

  const updateCurrentBudget = (category: string, amount: number) => {
    setCurrentBudget(prev => ({ ...prev, [category]: amount }));
  };

  const totalCurrentPercentage = Object.values(currentBudget).reduce((sum, amount) => {
    return sum + (income > 0 ? (amount / income) * 100 : 0);
  }, 0);

  const getVarianceColor = (current: number, recommended: number) => {
    const variance = Math.abs(current - recommended);
    if (variance <= 2) return 'text-green-600';
    if (variance <= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getIncomeLabel = () => {
    switch (incomeCategory) {
      case 'low': return 'Lower Income (&lt;$30k annually)';
      case 'mid': return 'Middle Income ($30k-$75k annually)';
      case 'high': return 'Higher Income (&gt;$75k annually)';
      default: return 'Enter your income to see guidelines';
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Budget Percentage Guide</h2>
        <p className="text-lg text-gray-600">
          Compare your spending to recommended percentages based on your income level.
        </p>
      </div>

      {/* Income Input */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="max-w-md mx-auto">
          <label className="block text-lg font-semibold text-gray-900 mb-2">
            Your Monthly Take-Home Income
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="5000"
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          {income > 0 && (
            <div className="mt-2 text-center">
              <div className="text-sm text-gray-600">
                Annual Income: ${(income * 12).toLocaleString()}
              </div>
              <div className="font-medium text-blue-600">{getIncomeLabel()}</div>
            </div>
          )}
        </div>
      </div>

      {income > 0 && (
        <>
          {/* Guidelines Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h3 className="text-xl font-bold text-gray-900">Recommended Budget Percentages</h3>
              <p className="text-sm text-gray-600 mt-1">Based on your income category: {getIncomeLabel()}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recommended %
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recommended $
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Your Current $
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Your %
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {BUDGET_GUIDELINES.map((guideline) => {
                    const recommendedPercentage = getRecommendedPercentage(guideline);
                    const recommendedAmount = (income * recommendedPercentage) / 100;
                    const currentAmount = currentBudget[guideline.category] || 0;
                    const currentPercentage = income > 0 ? (currentAmount / income) * 100 : 0;
                    const variance = currentPercentage - recommendedPercentage;
                    
                    return (
                      <tr key={guideline.category} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{guideline.category}</div>
                            <div className="text-xs text-gray-500">{guideline.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm font-medium text-blue-600">
                            {recommendedPercentage}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm text-gray-900">
                            ${recommendedAmount.toFixed(0)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="relative">
                            <span className="absolute left-1 top-1 text-gray-400 text-xs">$</span>
                            <input
                              type="number"
                              value={currentAmount || ''}
                              onChange={(e) => updateCurrentBudget(guideline.category, parseFloat(e.target.value) || 0)}
                              className="w-20 pl-4 pr-1 py-1 border border-gray-300 rounded text-sm text-center"
                              placeholder="0"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`text-sm font-medium ${getVarianceColor(currentPercentage, recommendedPercentage)}`}>
                            {currentPercentage.toFixed(1)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {currentAmount > 0 && (
                            <div className="text-xs">
                              {Math.abs(variance) <= 2 ? (
                                <span className="text-green-600 font-medium">✓ On Track</span>
                              ) : variance > 2 ? (
                                <span className="text-red-600 font-medium">↑ {variance.toFixed(1)}% High</span>
                              ) : (
                                <span className="text-yellow-600 font-medium">↓ {Math.abs(variance).toFixed(1)}% Low</span>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">${income.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Monthly Income</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  ${Object.values(currentBudget).reduce((sum, amount) => sum + amount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Budgeted</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className={`text-2xl font-bold ${totalCurrentPercentage <= 100 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalCurrentPercentage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Percentage Allocated</div>
              </div>
            </div>

            {totalCurrentPercentage > 100 && (
              <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">⚠️ Over Budget</h4>
                <p className="text-red-700">
                  You've allocated {totalCurrentPercentage.toFixed(1)}% of your income. 
                  Consider reducing expenses in categories that are above recommended percentages.
                </p>
              </div>
            )}

            {totalCurrentPercentage < 100 && Object.keys(currentBudget).length > 5 && (
              <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">✓ Under Budget</h4>
                <p className="text-green-700">
                  You have {(100 - totalCurrentPercentage).toFixed(1)}% ({((100 - totalCurrentPercentage) * income / 100).toFixed(0)} dollars) unallocated. 
                  Consider increasing savings or paying down debt with this surplus.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Print Budget Guide
        </button>
      </div>
    </div>
  );
}