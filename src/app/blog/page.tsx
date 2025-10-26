'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import { blogPosts } from '@/data/blog';
import ToolModal from '@/components/tools/ToolModal';
import PersonalFinanceAssessment from '@/components/tools/PersonalFinanceAssessment';
import BudgetWorksheet from '@/components/tools/BudgetWorksheet';
import CashExpenseTracker from '@/components/tools/CashExpenseTracker';
import BudgetPercentageGuide from '@/components/tools/BudgetPercentageGuide';
import BudgetReviewSystem from '@/components/tools/BudgetReviewSystem';
import MoneyFindingStrategies from '@/components/tools/MoneyFindingStrategies';

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 4);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);
  const [openTool, setOpenTool] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Articles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover practical strategies, inspiring stories, and actionable insights to help you 
              unlock your potential and create the life you desire.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
                <p className="text-lg text-gray-600">Must-read insights on personal growth and transformation</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <div key={post.id} className={`${index === 0 ? 'lg:col-span-2' : ''}`}>
                    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full">
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex-1">
                          
                          <h3 className={`font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors ${
                            index === 0 ? 'text-2xl' : 'text-xl'
                          }`}>
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Articles Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
              <p className="text-lg text-gray-600">Latest insights and practical wisdom</p>
            </div>
            
            {/* Recent Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="p-6">
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.isVideo ? (
                        <a href={post.videoUrl} target="_blank" rel="noopener noreferrer">
                          {post.title}
                        </a>
                      ) : (
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      )}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`inline-block text-xs px-3 py-1 rounded-full ${
                            post.isVideo 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {post.isVideo && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Video
                        </span>
                      )}
                    </div>
                    
                    {post.isVideo ? (
                      <a
                        href={post.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Watch Video →
                      </a>
                    ) : (
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Tools Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Tools & Calculators</h2>
              <p className="text-lg text-gray-600">Interactive tools to apply Dr. Bartruff's financial wisdom</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              
              {/* Tool 1 - Personal Finance Questionnaire */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-blue-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Personal Finance Assessment</h4>
                  </div>
                  <p className="text-gray-800 mb-4">Rate your financial habits across 12 key areas using interactive sliders. Get personalized feedback and improvement suggestions.</p>
                  <button 
                    onClick={() => setOpenTool('assessment')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Use Tool
                  </button>
                </div>
              </div>

              {/* Tool 2 - Budget Worksheet */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-green-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Complete Budget Worksheet</h4>
                  </div>
                  <p className="text-gray-800 mb-4">Comprehensive monthly budget with income, expenses across 10 categories, and automatic calculations to show if you're in the black or red.</p>
                  <button 
                    onClick={() => setOpenTool('budget')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Use Tool
                  </button>
                </div>
              </div>

              {/* Tool 3 - Percentage Guidelines */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-purple-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Budget Percentage Guide</h4>
                  </div>
                  <p className="text-gray-800 mb-4">See recommended spending percentages for different income levels. Compare your budget to proven guidelines.</p>
                  <button 
                    onClick={() => setOpenTool('percentage')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Use Tool
                  </button>
                </div>
              </div>

              {/* Tool 4 - Out of Pocket Tracker */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-yellow-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Cash Expense Tracker</h4>
                  </div>
                  <p className="text-gray-800 mb-4">Track your daily cash expenses to solve "the case of the missing cash." Studies show this reduces spending by 30%!</p>
                  <button 
                    onClick={() => setOpenTool('tracker')}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Use Tool
                  </button>
                </div>
              </div>

              {/* Tool 5 - Monthly Budget Review */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-orange-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h-2a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Budget Review System</h4>
                  </div>
                  <p className="text-gray-800 mb-4">The proven 5-column method to create budgets that actually work. Compare planned vs. actual spending and adjust accordingly.</p>
                  <button 
                    onClick={() => setOpenTool('review')}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Use Tool
                  </button>
                </div>
              </div>

              {/* Tool 6 - Money Finding Tips */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-teal-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Money-Finding Strategies</h4>
                  </div>
                  <p className="text-gray-800 mb-4">Interactive checklist of 50+ money-saving tips across 8 categories, plus calculate how small daily savings add up annually.</p>
                  <button 
                    onClick={() => setOpenTool('strategies')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Use Tool
                  </button>
                </div>
              </div>

            </div>
            
            {/* External Resources */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-12">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Additional Financial Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="https://robberger.com/best-budgeting-apps/" target="_blank" rel="noopener noreferrer" 
                   className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                  <h5 className="font-semibold text-blue-600 mb-2">Best Budgeting Apps</h5>
                  <p className="text-sm text-gray-600">Comprehensive reviews of top budgeting applications</p>
                </a>
                <a href="https://salaryaftertax.com/us/salary-calculator" target="_blank" rel="noopener noreferrer"
                   className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                  <h5 className="font-semibold text-green-600 mb-2">Salary Calculator</h5>
                  <p className="text-sm text-gray-600">Calculate your after-tax income accurately</p>
                </a>
                <a href="https://myfin.us/calculators/credit-card-interest-calculator" target="_blank" rel="noopener noreferrer"
                   className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                  <h5 className="font-semibold text-red-600 mb-2">Credit Card Calculator</h5>
                  <p className="text-sm text-gray-600">Plan your debt payoff strategy</p>
                </a>
                <a href="https://highlandschurch.org/marketplace/" target="_blank" rel="noopener noreferrer"
                   className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                  <h5 className="font-semibold text-purple-600 mb-2">Marketplace Ministry</h5>
                  <p className="text-sm text-gray-600">Faith-based financial guidance</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup & Free Workbook */}
        <NewsletterSignup />

        {/* Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Topics</h2>
              <p className="text-lg text-gray-600">Find articles by category</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => {
                const postCount = blogPosts.filter(post => post.tags.includes(tag)).length;
                return (
                  <div
                    key={tag}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
                    onClick={() => {
                      // For now, just scroll to articles - category pages coming soon!
                      const articlesSection = document.querySelector('section:has(h2:contains("Recent Articles"))');
                      if (articlesSection) {
                        articlesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="capitalize font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tag.replace('-', ' ')}
                    </div>
                    <div className="text-sm text-gray-700">{postCount} article{postCount !== 1 ? 's' : ''}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Tool Modals */}
      <ToolModal
        isOpen={openTool === 'assessment'}
        onClose={() => setOpenTool(null)}
        title="Personal Finance Assessment"
      >
        <PersonalFinanceAssessment />
      </ToolModal>

      <ToolModal
        isOpen={openTool === 'budget'}
        onClose={() => setOpenTool(null)}
        title="Complete Budget Worksheet"
      >
        <BudgetWorksheet />
      </ToolModal>

      <ToolModal
        isOpen={openTool === 'tracker'}
        onClose={() => setOpenTool(null)}
        title="Cash Expense Tracker"
      >
        <CashExpenseTracker />
      </ToolModal>

      <ToolModal
        isOpen={openTool === 'percentage'}
        onClose={() => setOpenTool(null)}
        title="Budget Percentage Guide"
      >
        <BudgetPercentageGuide />
      </ToolModal>

      <ToolModal
        isOpen={openTool === 'review'}
        onClose={() => setOpenTool(null)}
        title="Budget Review System"
      >
        <BudgetReviewSystem />
      </ToolModal>

      <ToolModal
        isOpen={openTool === 'strategies'}
        onClose={() => setOpenTool(null)}
        title="Money-Finding Strategies"
      >
        <MoneyFindingStrategies />
      </ToolModal>
    </Layout>
  );
}