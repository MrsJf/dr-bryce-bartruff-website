'use client';

import { useState } from 'react';

interface Expense {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
}

const EXPENSE_CATEGORIES = [
  'Food & Dining', 'Transportation', 'Entertainment', 'Shopping', 
  'Personal Care', 'Kids', 'Bills & Utilities', 'Other'
];

export default function CashExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: 'Food & Dining'
  });

  const addExpense = () => {
    if (newExpense.description && newExpense.amount) {
      const expense: Expense = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        description: newExpense.description,
        amount: parseFloat(newExpense.amount),
        category: newExpense.category
      };
      
      setExpenses([expense, ...expenses]);
      setNewExpense({
        description: '',
        amount: '',
        category: 'Food & Dining'
      });
    }
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  
  const categoryTotals = EXPENSE_CATEGORIES.map(category => ({
    category,
    total: expenses.filter(exp => exp.category === category).reduce((sum, exp) => sum + exp.amount, 0)
  })).filter(cat => cat.total > 0);

  const todayExpenses = expenses.filter(exp => exp.date === new Date().toLocaleDateString());
  const todayTotal = todayExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cash Expense Tracker</h2>
        <p className="text-lg text-gray-600">
          Track every cash purchase to solve "the case of the missing cash." Studies show this reduces spending by 30%!
        </p>
      </div>

      {/* Add New Expense */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Add New Expense</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input
              type="text"
              value={newExpense.description}
              onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
              placeholder="Coffee, lunch, parking..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                type="number"
                step="0.01"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                placeholder="0.00"
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={newExpense.category}
              onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {EXPENSE_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={addExpense}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Today's Spending</h4>
          <div className="text-2xl font-bold text-yellow-600">${todayTotal.toFixed(2)}</div>
          <div className="text-sm text-gray-500">{todayExpenses.length} transactions</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Total Tracked</h4>
          <div className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</div>
          <div className="text-sm text-gray-500">{expenses.length} total transactions</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Average Per Day</h4>
          <div className="text-2xl font-bold text-green-600">
            ${expenses.length > 0 ? (totalExpenses / new Set(expenses.map(e => e.date)).size).toFixed(2) : '0.00'}
          </div>
          <div className="text-sm text-gray-500">
            {new Set(expenses.map(e => e.date)).size} days tracked
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Expenses */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Recent Expenses</h3>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {expenses.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No expenses tracked yet. Add your first expense above!
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {expenses.slice(0, 10).map(expense => (
                  <div key={expense.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{expense.description}</div>
                        <div className="text-sm text-gray-500">
                          {expense.category} • {expense.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-red-600 mr-3">${expense.amount.toFixed(2)}</span>
                        <button
                          onClick={() => deleteExpense(expense.id)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Spending by Category</h3>
          </div>
          <div className="p-6">
            {categoryTotals.length === 0 ? (
              <div className="text-center text-gray-500">
                No categories to show yet.
              </div>
            ) : (
              <div className="space-y-4">
                {categoryTotals.sort((a, b) => b.total - a.total).map(category => (
                  <div key={category.category} className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{category.category}</span>
                    <div className="text-right">
                      <div className="font-bold text-red-600">${category.total.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">
                        {((category.total / totalExpenses) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {expenses.length > 0 && (
        <div className="mt-8 text-center space-x-4">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Print Report
          </button>
          <button
            onClick={() => setExpenses([])}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Clear All Data
          </button>
        </div>
      )}
    </div>
  );
}