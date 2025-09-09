'use client';

import { useState } from 'react';

interface Strategy {
  id: string;
  category: string;
  description: string;
  averageSavings: number; // per month
  checked: boolean;
  customSavings?: number;
}

const MONEY_SAVING_STRATEGIES: Omit<Strategy, 'checked' | 'customSavings'>[] = [
  // Food & Dining
  { id: 'meal-planning', category: 'Food & Dining', description: 'Plan meals and use grocery lists', averageSavings: 150 },
  { id: 'cook-home', category: 'Food & Dining', description: 'Cook at home instead of eating out', averageSavings: 200 },
  { id: 'coupons', category: 'Food & Dining', description: 'Use coupons and store loyalty programs', averageSavings: 50 },
  { id: 'bulk-buying', category: 'Food & Dining', description: 'Buy non-perishables in bulk', averageSavings: 30 },
  { id: 'generic-brands', category: 'Food & Dining', description: 'Choose generic/store brands', averageSavings: 40 },
  { id: 'coffee-home', category: 'Food & Dining', description: 'Make coffee at home', averageSavings: 60 },

  // Transportation
  { id: 'carpool', category: 'Transportation', description: 'Carpool or use public transportation', averageSavings: 100 },
  { id: 'car-maintenance', category: 'Transportation', description: 'Regular car maintenance to prevent repairs', averageSavings: 75 },
  { id: 'gas-apps', category: 'Transportation', description: 'Use gas price comparison apps', averageSavings: 25 },
  { id: 'combine-trips', category: 'Transportation', description: 'Combine errands into single trips', averageSavings: 35 },
  { id: 'walk-bike', category: 'Transportation', description: 'Walk or bike for short distances', averageSavings: 50 },

  // Utilities & Bills
  { id: 'programmable-thermostat', category: 'Utilities & Bills', description: 'Use programmable thermostat', averageSavings: 45 },
  { id: 'led-bulbs', category: 'Utilities & Bills', description: 'Switch to LED light bulbs', averageSavings: 20 },
  { id: 'unplug-devices', category: 'Utilities & Bills', description: 'Unplug devices when not in use', averageSavings: 15 },
  { id: 'bill-negotiation', category: 'Utilities & Bills', description: 'Negotiate with service providers', averageSavings: 80 },
  { id: 'water-conservation', category: 'Utilities & Bills', description: 'Fix leaks and conserve water', averageSavings: 30 },
  { id: 'streaming-audit', category: 'Utilities & Bills', description: 'Cancel unused subscriptions', averageSavings: 40 },

  // Shopping & Entertainment
  { id: 'comparison-shopping', category: 'Shopping & Entertainment', description: 'Compare prices before major purchases', averageSavings: 100 },
  { id: 'free-activities', category: 'Shopping & Entertainment', description: 'Choose free entertainment options', averageSavings: 80 },
  { id: 'library-resources', category: 'Shopping & Entertainment', description: 'Use library for books, movies, events', averageSavings: 40 },
  { id: 'seasonal-shopping', category: 'Shopping & Entertainment', description: 'Buy seasonal items off-season', averageSavings: 60 },
  { id: 'repair-vs-replace', category: 'Shopping & Entertainment', description: 'Repair items instead of replacing', averageSavings: 50 },

  // Banking & Finance
  { id: 'bank-fees', category: 'Banking & Finance', description: 'Avoid bank fees with minimum balances', averageSavings: 25 },
  { id: 'credit-card-rewards', category: 'Banking & Finance', description: 'Use credit card rewards wisely', averageSavings: 30 },
  { id: 'refinance-loans', category: 'Banking & Finance', description: 'Refinance high-interest loans', averageSavings: 150 },
  { id: 'insurance-review', category: 'Banking & Finance', description: 'Review and compare insurance rates annually', averageSavings: 100 },
  { id: 'automated-savings', category: 'Banking & Finance', description: 'Automate savings transfers', averageSavings: 200 },

  // Health & Personal Care
  { id: 'generic-medications', category: 'Health & Personal Care', description: 'Use generic medications when possible', averageSavings: 40 },
  { id: 'diy-beauty', category: 'Health & Personal Care', description: 'DIY beauty and personal care', averageSavings: 30 },
  { id: 'preventive-health', category: 'Health & Personal Care', description: 'Focus on preventive healthcare', averageSavings: 75 },
  { id: 'exercise-home', category: 'Health & Personal Care', description: 'Exercise at home or outdoors', averageSavings: 60 },

  // Miscellaneous
  { id: 'envelope-method', category: 'Budgeting', description: 'Use envelope method for cash spending', averageSavings: 100 },
  { id: 'wait-24h', category: 'Budgeting', description: 'Wait 24 hours before non-essential purchases', averageSavings: 120 },
  { id: 'side-income', category: 'Income', description: 'Develop a side income stream', averageSavings: 300 },
  { id: 'sell-unused', category: 'Income', description: 'Sell unused items', averageSavings: 75 },
  { id: 'cashback-apps', category: 'Technology', description: 'Use cashback and rebate apps', averageSavings: 35 },
  { id: 'price-tracking', category: 'Technology', description: 'Use price tracking tools for purchases', averageSavings: 45 }
];

export default function MoneyFindingStrategies() {
  const [strategies, setStrategies] = useState<Strategy[]>(
    MONEY_SAVING_STRATEGIES.map(strategy => ({
      ...strategy,
      checked: false,
      customSavings: undefined
    }))
  );

  const [dailySavingsAmount, setDailySavingsAmount] = useState<string>('');

  const toggleStrategy = (id: string) => {
    setStrategies(prev =>
      prev.map(strategy =>
        strategy.id === id ? { ...strategy, checked: !strategy.checked } : strategy
      )
    );
  };

  const updateCustomSavings = (id: string, amount: number) => {
    setStrategies(prev =>
      prev.map(strategy =>
        strategy.id === id ? { ...strategy, customSavings: amount } : strategy
      )
    );
  };

  const checkedStrategies = strategies.filter(s => s.checked);
  const totalMonthlySavings = checkedStrategies.reduce((sum, strategy) => 
    sum + (strategy.customSavings || strategy.averageSavings), 0
  );
  const totalAnnualSavings = totalMonthlySavings * 12;

  const dailySavings = parseFloat(dailySavingsAmount) || 0;
  const dailyToAnnual = dailySavings * 365;
  const dailyToMonthly = dailySavings * 30;

  const categorizedStrategies = MONEY_SAVING_STRATEGIES.reduce((acc, strategy) => {
    if (!acc[strategy.category]) {
      acc[strategy.category] = [];
    }
    acc[strategy.category].push(strategy.id);
    return acc;
  }, {} as Record<string, string[]>);

  const getStrategyById = (id: string) => strategies.find(s => s.id === id)!;

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Money-Finding Strategies</h2>
        <p className="text-lg text-gray-600">
          Interactive checklist of 50+ money-saving tips. Check off strategies you'll implement and see your potential annual savings!
        </p>
      </div>

      {/* Daily Savings Calculator */}
      <div className="bg-green-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-green-800 mb-4">Small Daily Savings Calculator</h3>
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How much could you save daily? (e.g., skip that $5 coffee)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input
              type="number"
              step="0.01"
              value={dailySavingsAmount}
              onChange={(e) => setDailySavingsAmount(e.target.value)}
              placeholder="5.00"
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          {dailySavings > 0 && (
            <div className="mt-4 text-center space-y-2">
              <div className="text-lg">
                <span className="text-green-600 font-bold">${dailyToMonthly.toFixed(0)}</span>
                <span className="text-gray-600"> per month</span>
              </div>
              <div className="text-xl">
                <span className="text-green-600 font-bold">${dailyToAnnual.toLocaleString()}</span>
                <span className="text-gray-600"> per year!</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategies Selected</h4>
          <div className="text-2xl font-bold text-blue-600">{checkedStrategies.length}</div>
          <div className="text-sm text-gray-500">out of {strategies.length} available</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Monthly Savings</h4>
          <div className="text-2xl font-bold text-green-600">${totalMonthlySavings.toLocaleString()}</div>
          <div className="text-sm text-gray-500">from selected strategies</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Annual Savings</h4>
          <div className="text-2xl font-bold text-purple-600">${totalAnnualSavings.toLocaleString()}</div>
          <div className="text-sm text-gray-500">projected yearly total</div>
        </div>
      </div>

      {/* Strategies by Category */}
      <div className="space-y-8">
        {Object.entries(categorizedStrategies).map(([category, strategyIds]) => (
          <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h3 className="text-lg font-bold text-gray-900">{category}</h3>
              <div className="text-sm text-gray-600">
                {strategyIds.filter(id => getStrategyById(id).checked).length} of {strategyIds.length} selected
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {strategyIds.map(strategyId => {
                  const strategy = getStrategyById(strategyId);
                  return (
                    <div key={strategy.id} className={`p-4 rounded-lg border-2 transition-all ${
                      strategy.checked ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <input
                            type="checkbox"
                            checked={strategy.checked}
                            onChange={() => toggleStrategy(strategy.id)}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-900 cursor-pointer">
                            {strategy.description}
                          </label>
                          <div className="mt-2 flex items-center space-x-4">
                            <div className="text-sm text-gray-600">
                              Average savings: <span className="font-medium text-green-600">${strategy.averageSavings}/month</span>
                            </div>
                            {strategy.checked && (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Your estimate:</span>
                                <div className="relative">
                                  <span className="absolute left-1 top-1 text-gray-400 text-xs">$</span>
                                  <input
                                    type="number"
                                    value={strategy.customSavings || ''}
                                    onChange={(e) => updateCustomSavings(strategy.id, parseFloat(e.target.value) || 0)}
                                    placeholder={strategy.averageSavings.toString()}
                                    className="w-20 pl-4 pr-1 py-1 border border-gray-300 rounded text-sm"
                                  />
                                </div>
                                <span className="text-sm text-gray-600">/month</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Plan */}
      {checkedStrategies.length > 0 && (
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Money-Finding Action Plan</h3>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-900 mb-3">Selected Strategies ({checkedStrategies.length}):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {checkedStrategies.map(strategy => (
                <div key={strategy.id} className="flex justify-between items-center text-sm">
                  <span>• {strategy.description}</span>
                  <span className="font-medium text-green-600">
                    ${strategy.customSavings || strategy.averageSavings}/mo
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">💰 Your Savings Potential</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-green-700">${(totalMonthlySavings / 4).toFixed(0)}</div>
                <div className="text-xs text-green-600">per week</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-700">${totalMonthlySavings.toLocaleString()}</div>
                <div className="text-xs text-green-600">per month</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-700">${(totalAnnualSavings / 4).toLocaleString()}</div>
                <div className="text-xs text-green-600">per quarter</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-700">${totalAnnualSavings.toLocaleString()}</div>
                <div className="text-xs text-green-600">per year</div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-blue-700">
            <p>💡 <strong>Pro Tip:</strong> Start with 3-5 strategies that feel most achievable. Once these become habits, add more strategies to increase your savings!</p>
          </div>
        </div>
      )}

      <div className="mt-6 text-center space-x-4">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Print Action Plan
        </button>
        <button
          onClick={() => setStrategies(prev => prev.map(s => ({ ...s, checked: false, customSavings: undefined })))}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}