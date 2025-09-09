'use client';

import { useState } from 'react';

interface BudgetItem {
  id: string;
  category: string;
  description: string;
  amount: number;
}

interface BudgetData {
  income: BudgetItem[];
  expenses: BudgetItem[];
}

const DEFAULT_INCOME_ITEMS: Omit<BudgetItem, 'amount'>[] = [
  { id: 'salary1', category: 'Primary Income', description: 'Primary Salary/Wage' },
  { id: 'salary2', category: 'Secondary Income', description: 'Secondary Salary/Wage' },
  { id: 'freelance', category: 'Other Income', description: 'Freelance/Side Work' },
  { id: 'investment', category: 'Other Income', description: 'Investment Income' },
  { id: 'other', category: 'Other Income', description: 'Other Income' }
];

const DEFAULT_EXPENSE_ITEMS: Omit<BudgetItem, 'amount'>[] = [
  { id: 'tithe', category: 'Giving', description: 'Tithe/Charitable Giving' },
  { id: 'savings', category: 'Savings', description: 'Emergency Fund & Savings' },
  { id: 'retirement', category: 'Savings', description: 'Retirement Contributions' },
  { id: 'rent', category: 'Housing', description: 'Rent/Mortgage Payment' },
  { id: 'utilities', category: 'Housing', description: 'Utilities (Electric, Water, Gas)' },
  { id: 'internet', category: 'Housing', description: 'Internet/Phone' },
  { id: 'maintenance', category: 'Housing', description: 'Home Maintenance/Repairs' },
  { id: 'groceries', category: 'Food', description: 'Groceries' },
  { id: 'dining', category: 'Food', description: 'Dining Out' },
  { id: 'clothing', category: 'Personal', description: 'Clothing' },
  { id: 'personal', category: 'Personal', description: 'Personal Care' },
  { id: 'car', category: 'Transportation', description: 'Car Payment' },
  { id: 'gas', category: 'Transportation', description: 'Gas & Maintenance' },
  { id: 'insurance', category: 'Transportation', description: 'Car Insurance' },
  { id: 'health', category: 'Insurance', description: 'Health Insurance' },
  { id: 'life', category: 'Insurance', description: 'Life Insurance' },
  { id: 'medical', category: 'Medical', description: 'Medical Expenses' },
  { id: 'prescriptions', category: 'Medical', description: 'Prescriptions' },
  { id: 'creditcard', category: 'Debt', description: 'Credit Card Payments' },
  { id: 'loans', category: 'Debt', description: 'Student/Personal Loans' },
  { id: 'entertainment', category: 'Entertainment', description: 'Movies, Hobbies, etc.' },
  { id: 'subscriptions', category: 'Entertainment', description: 'Streaming Services' },
  { id: 'misc', category: 'Miscellaneous', description: 'Miscellaneous Expenses' }
];

export default function BudgetWorksheet() {
  const [budget, setBudget] = useState<BudgetData>({
    income: DEFAULT_INCOME_ITEMS.map(item => ({ ...item, amount: 0 })),
    expenses: DEFAULT_EXPENSE_ITEMS.map(item => ({ ...item, amount: 0 }))
  });

  const updateAmount = (type: 'income' | 'expenses', id: string, amount: number) => {
    setBudget(prev => ({
      ...prev,
      [type]: prev[type].map(item => 
        item.id === id ? { ...item, amount } : item
      )
    }));
  };

  const totalIncome = budget.income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = budget.expenses.reduce((sum, item) => sum + item.amount, 0);
  const netIncome = totalIncome - totalExpenses;

  const getExpensesByCategory = () => {
    const categories = [...new Set(budget.expenses.map(item => item.category))];
    return categories.map(category => ({
      category,
      total: budget.expenses
        .filter(item => item.category === category)
        .reduce((sum, item) => sum + item.amount, 0),
      percentage: totalIncome > 0 ? (budget.expenses
        .filter(item => item.category === category)
        .reduce((sum, item) => sum + item.amount, 0) / totalIncome * 100) : 0
    }));
  };

  const categoryTotals = getExpensesByCategory();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Budget Worksheet</h2>
        <p className="text-lg text-gray-600">
          Track your monthly income and expenses to see if you're in the black or red.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Income Section */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Monthly Income
          </h3>
          
          <div className="space-y-3">
            {budget.income.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 flex-1">
                  {item.description}
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input
                    type="number"
                    value={item.amount || ''}
                    onChange={(e) => updateAmount('income', item.id, parseFloat(e.target.value) || 0)}
                    className="w-24 px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-green-200">
            <div className="flex justify-between items-center text-lg font-bold text-green-800">
              <span>Total Monthly Income:</span>
              <span>${totalIncome.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Expenses Section */}
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
            Monthly Expenses
          </h3>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {budget.expenses.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 flex-1">
                  {item.description}
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input
                    type="number"
                    value={item.amount || ''}
                    onChange={(e) => updateAmount('expenses', item.id, parseFloat(e.target.value) || 0)}
                    className="w-24 px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-red-200">
            <div className="flex justify-between items-center text-lg font-bold text-red-800">
              <span>Total Monthly Expenses:</span>
              <span>${totalExpenses.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Income</div>
          </div>
          <div className="text-center bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Expenses</div>
          </div>
          <div className="text-center bg-white p-4 rounded-lg">
            <div className={`text-2xl font-bold ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${netIncome.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">
              {netIncome >= 0 ? 'Surplus' : 'Deficit'}
            </div>
          </div>
        </div>

        {netIncome < 0 && (
          <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="font-bold text-red-800 mb-2">⚠️ Budget Alert</h4>
            <p className="text-red-700">
              Your expenses exceed your income by ${Math.abs(netIncome).toLocaleString()}. 
              Consider reducing expenses or increasing income to balance your budget.
            </p>
          </div>
        )}

        {/* Category Breakdown */}
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Expense Breakdown by Category</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {categoryTotals.filter(cat => cat.total > 0).map(category => (
              <div key={category.category} className="flex justify-between items-center text-sm border-b pb-2">
                <span className="font-medium">{category.category}</span>
                <div className="text-right">
                  <div>${category.total.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{category.percentage.toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center space-x-4">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Print Budget
        </button>
        <button
          onClick={() => setBudget({
            income: DEFAULT_INCOME_ITEMS.map(item => ({ ...item, amount: 0 })),
            expenses: DEFAULT_EXPENSE_ITEMS.map(item => ({ ...item, amount: 0 }))
          })}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}