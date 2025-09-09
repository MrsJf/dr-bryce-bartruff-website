'use client';

import { useState } from 'react';

interface BudgetReviewItem {
  id: string;
  category: string;
  currentBudget: number;
  actualExpense: number;
  comments: string;
  adjustedBudget: number;
}

const DEFAULT_CATEGORIES = [
  'Tithe/Giving',
  'Savings',
  'Housing (Rent/Mortgage)',
  'Utilities',
  'Food/Groceries',
  'Transportation',
  'Insurance',
  'Medical Expenses',
  'Debt Reduction',
  'Clothing',
  'Personal Care',
  'Entertainment & Recreation',
  'Miscellaneous'
];

export default function BudgetReviewSystem() {
  const [reviewItems, setReviewItems] = useState<BudgetReviewItem[]>(
    DEFAULT_CATEGORIES.map((category, index) => ({
      id: index.toString(),
      category,
      currentBudget: 0,
      actualExpense: 0,
      comments: '',
      adjustedBudget: 0
    }))
  );

  const [reviewMonth, setReviewMonth] = useState(new Date().toISOString().slice(0, 7));

  const updateItem = (id: string, field: keyof BudgetReviewItem, value: string | number) => {
    setReviewItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          // Auto-calculate adjusted budget if not manually set
          if (field === 'actualExpense' && updated.adjustedBudget === 0) {
            updated.adjustedBudget = updated.actualExpense;
          }
          return updated;
        }
        return item;
      })
    );
  };

  const addCustomCategory = () => {
    const newItem: BudgetReviewItem = {
      id: Date.now().toString(),
      category: 'Custom Category',
      currentBudget: 0,
      actualExpense: 0,
      comments: '',
      adjustedBudget: 0
    };
    setReviewItems([...reviewItems, newItem]);
  };

  const removeItem = (id: string) => {
    setReviewItems(prev => prev.filter(item => item.id !== id));
  };

  const totalCurrentBudget = reviewItems.reduce((sum, item) => sum + item.currentBudget, 0);
  const totalActualExpense = reviewItems.reduce((sum, item) => sum + item.actualExpense, 0);
  const totalAdjustedBudget = reviewItems.reduce((sum, item) => sum + item.adjustedBudget, 0);
  const budgetVariance = totalActualExpense - totalCurrentBudget;
  const adjustmentChange = totalAdjustedBudget - totalCurrentBudget;

  const getVarianceColor = (current: number, actual: number) => {
    const diff = actual - current;
    if (Math.abs(diff) <= current * 0.1) return 'text-green-600'; // Within 10%
    if (diff > 0) return 'text-red-600'; // Over budget
    return 'text-blue-600'; // Under budget
  };

  const exportData = () => {
    const csvContent = [
      ['Category', 'Current Budget', 'Actual Expense', 'Difference', 'Comments', 'Adjusted Budget'],
      ...reviewItems.map(item => [
        item.category,
        item.currentBudget.toString(),
        item.actualExpense.toString(),
        (item.actualExpense - item.currentBudget).toString(),
        item.comments,
        item.adjustedBudget.toString()
      ]),
      ['TOTAL', totalCurrentBudget.toString(), totalActualExpense.toString(), budgetVariance.toString(), '', totalAdjustedBudget.toString()]
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `budget-review-${reviewMonth}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Budget Review System</h2>
        <p className="text-lg text-gray-600">
          The proven 5-column method to create budgets that actually work. Compare planned vs. actual spending and adjust accordingly.
        </p>
      </div>

      {/* Header Controls */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Review Month
            </label>
            <input
              type="month"
              value={reviewMonth}
              onChange={(e) => setReviewMonth(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-x-2">
            <button
              onClick={addCustomCategory}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Add Category
            </button>
            <button
              onClick={exportData}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Budget Review Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h3 className="text-xl font-bold text-gray-900">Monthly Budget Review</h3>
          <p className="text-sm text-gray-600 mt-1">
            For: {new Date(reviewMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget Category
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Budget
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actual Expense
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difference
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comments/Reasons
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Adjusted Budget
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviewItems.map((item) => {
                const difference = item.actualExpense - item.currentBudget;
                const varianceColor = getVarianceColor(item.currentBudget, item.actualExpense);
                
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) => updateItem(item.id, 'category', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded text-sm font-medium"
                      />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="relative">
                        <span className="absolute left-1 top-2 text-gray-400 text-xs">$</span>
                        <input
                          type="number"
                          value={item.currentBudget || ''}
                          onChange={(e) => updateItem(item.id, 'currentBudget', parseFloat(e.target.value) || 0)}
                          className="w-24 pl-4 pr-1 py-2 border border-gray-300 rounded text-sm text-center"
                          placeholder="0"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="relative">
                        <span className="absolute left-1 top-2 text-gray-400 text-xs">$</span>
                        <input
                          type="number"
                          value={item.actualExpense || ''}
                          onChange={(e) => updateItem(item.id, 'actualExpense', parseFloat(e.target.value) || 0)}
                          className="w-24 pl-4 pr-1 py-2 border border-gray-300 rounded text-sm text-center"
                          placeholder="0"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`font-medium text-sm ${varianceColor}`}>
                        {difference > 0 ? '+' : ''}${difference.toFixed(0)}
                      </span>
                      {item.currentBudget > 0 && (
                        <div className="text-xs text-gray-500">
                          ({((difference / item.currentBudget) * 100).toFixed(0)}%)
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <textarea
                        value={item.comments}
                        onChange={(e) => updateItem(item.id, 'comments', e.target.value)}
                        placeholder="Explain variance or seasonal adjustments..."
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none"
                        rows={2}
                      />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="relative">
                        <span className="absolute left-1 top-2 text-gray-400 text-xs">$</span>
                        <input
                          type="number"
                          value={item.adjustedBudget || ''}
                          onChange={(e) => updateItem(item.id, 'adjustedBudget', parseFloat(e.target.value) || 0)}
                          className="w-24 pl-4 pr-1 py-2 border border-gray-300 rounded text-sm text-center"
                          placeholder="0"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      {item.id.length > 1 && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-600"
                          title="Remove category"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              
              {/* Totals Row */}
              <tr className="bg-gray-100 font-bold">
                <td className="px-4 py-4 text-sm">TOTAL</td>
                <td className="px-4 py-4 text-center text-sm">${totalCurrentBudget.toLocaleString()}</td>
                <td className="px-4 py-4 text-center text-sm">${totalActualExpense.toLocaleString()}</td>
                <td className="px-4 py-4 text-center text-sm">
                  <span className={budgetVariance >= 0 ? 'text-red-600' : 'text-green-600'}>
                    {budgetVariance > 0 ? '+' : ''}${budgetVariance.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm"></td>
                <td className="px-4 py-4 text-center text-sm">${totalAdjustedBudget.toLocaleString()}</td>
                <td className="px-4 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Review Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center bg-white p-4 rounded-lg">
            <div className={`text-2xl font-bold ${budgetVariance <= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {budgetVariance > 0 ? '+' : ''}${budgetVariance.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Budget Variance</div>
            <div className="text-xs text-gray-500 mt-1">
              {budgetVariance > 0 ? 'Over Budget' : budgetVariance < 0 ? 'Under Budget' : 'On Budget'}
            </div>
          </div>
          
          <div className="text-center bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">${Math.abs(adjustmentChange).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Budget Adjustment</div>
            <div className="text-xs text-gray-500 mt-1">
              {adjustmentChange > 0 ? 'Increased' : adjustmentChange < 0 ? 'Decreased' : 'No Change'}
            </div>
          </div>
          
          <div className="text-center bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {reviewItems.filter(item => Math.abs(item.actualExpense - item.currentBudget) > item.currentBudget * 0.1).length}
            </div>
            <div className="text-sm text-gray-600">Categories Needing Attention</div>
            <div className="text-xs text-gray-500 mt-1">
              &gt;10% variance from budget
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Key Insights & Next Steps</h4>
          <div className="space-y-2 text-sm">
            {budgetVariance > 0 && (
              <div className="text-red-700">
                • You spent ${budgetVariance.toLocaleString()} more than budgeted this month. Review high-variance categories.
              </div>
            )}
            {budgetVariance < 0 && (
              <div className="text-green-700">
                • You saved ${Math.abs(budgetVariance).toLocaleString()} by spending less than budgeted. Consider allocating this to savings or debt reduction.
              </div>
            )}
            
            {reviewItems.filter(item => (item.actualExpense - item.currentBudget) > item.currentBudget * 0.2).length > 0 && (
              <div className="text-yellow-700">
                • Categories with &gt;20% overspend need immediate attention for next month's budget.
              </div>
            )}
            
            <div className="text-blue-700">
              • Use the "Adjusted Budget" column to plan next month based on this month's learnings.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center space-x-4">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Print Review
        </button>
        <button
          onClick={() => {
            const nextMonth = new Date(reviewMonth + '-01');
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            setReviewMonth(nextMonth.toISOString().slice(0, 7));
            setReviewItems(prev => prev.map(item => ({
              ...item,
              currentBudget: item.adjustedBudget,
              actualExpense: 0,
              comments: '',
              adjustedBudget: 0
            })));
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Start Next Month
        </button>
      </div>
    </div>
  );
}