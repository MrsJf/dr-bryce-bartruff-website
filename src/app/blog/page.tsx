'use client';

import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights & Articles</h1>
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
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <time>{formatDate(post.publishDate)}</time>
                            <span className="mx-2">•</span>
                            <span>{getReadingTime(post.content)}</span>
                          </div>
                          
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

        {/* Articles Section - Space for Two Specific Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Articles</h2>
              <p className="text-lg text-gray-600">Featured insights and practical wisdom</p>
            </div>
            
            {/* Article Grid - Ready for Two Articles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Article 1 - Fiscal Fitness */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Setting Financial Goals: A Three-Step Blueprint for Couples
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    When facing multiple financial dreams—a new home, advanced degrees, starting a family, and more—how do couples prioritize and create a workable plan? This classic advice from the Fiscal Fitness column provides a timeless framework for turning financial chaos into clarity.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Financial Planning
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Couples Finance
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      Goal Setting
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article1-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = '← Hide Article';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Read Full Article →';
                      }
                    }}
                  >
                    Read Full Article →
                  </button>
                  
                  {/* Full Article Content - Hidden by default */}
                  <div id="article1-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> I have been involved in some intense discussions with my husband about how we spend our money and time. We are deeply involved in our careers and would like to begin saving for a new home. I would like to get my master's degree once my husband has finished his MBA, and I would like to stay home for six months after our baby arrives next spring. We would also like to invest in his uncle's business, buy a new car, pay off our credit cards, and spend more time traveling. Since we cannot afford to do everything, it's difficult to decide how to manage our budget. Several of the people at work have shared their ideas, but that's just made me more confused. What guidelines do you have that might be helpful?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> The financial decisions of each family are unique and need to be based on the desires and goals of that couple. It's always helpful to listen to the advice of others, but the final goals and budgetary decisions are up to the couple.
                      </p>
                      
                      <p className="mb-4">
                        The process of making practical financial objectives begins with three fundamental steps: establishing goals, assessing your present situation, and making a workable plan of action.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-blue-600">1. Establishing Specific Written Goals</h4>
                      <p className="mb-4">
                        Establish specific written goals that are measurable both by time and by action. State what it is you want and approximately when it should be acquired. Set target dates for the completion of your education, when you'd like to have the down payment for a new home, and when your charge cards will be paid off. Specific goals provide a guide so you know how much money to allocate each month to each one. The desire to purchase that new computer game or spring for an aromatic dinner may have to be put aside to allow you to reach more important long-term goals.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-blue-600">2. Assess Your Current Situation</h4>
                      <p className="mb-4">
                        Take inventory of your assets and liabilities so you know where you are financially as well as your potential. Consider your living situation, how much you owe for your cards and other obligations, what your educational interests are as well as your vocational interests and background.
                      </p>
                      
                      <p className="mb-4">
                        You may, for instance, determine that your income will grow and your expenses will go down when your husband graduates. It may also be that you are in a dead-end job with little hope for change. The advent of a baby into your family will bring significant changes in both how you spend your time and money. If you want to take some time off during the baby's first year, you may need to cut living expenses and save a predetermined amount in advance.
                      </p>
                      
                      <p className="mb-4">
                        Consider also the characteristics of your personality. Your willingness to make changes, to take risks, and to work hard are an important part in determining your future income. The couple who is not afraid to move to a new location, go back to school, or take the gamble of starting a new business will have limitless opportunities. Conversely, the couple who places great value on their leisure time needs to recognize and discuss this priority and adjust their expectations accordingly.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-blue-600">3. Make a Plan of Action</h4>
                      <p className="mb-4">
                        Determine what you need to do to get from your current situation to where you'd like to be. You might need to go back to school, change jobs, place a greater emphasis on savings, or refrain from using your credit cards. This plan is something you should agree on together. You should design specific measurable steps leading to the completion of this plan.
                      </p>
                      
                      <p className="mb-4">
                        Most worthwhile goals are not easy and require consistent effort and discipline to achieve. They also may need to be adjusted as unexpected events come into your life. But with a plan of action and the willingness to make the sacrifices necessary to implement it, you have the tools necessary to turn your dreams into reality.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Article 2 - Budget Review Method */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Budget Review: Making Budgets That Actually Work
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Tired of budgets that never seem realistic? This proven five-column Budget Review method transforms unrealistic financial plans into practical, evolving tools that adapt to your real spending patterns and seasonal needs.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Budgeting
                    </span>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                      Money Management
                    </span>
                    <span className="inline-block bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                      Financial Tools
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article2-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = '← Hide Article';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Read Full Article →';
                      }
                    }}
                  >
                    Read Full Article →
                  </button>
                  
                  {/* Full Article Content - Hidden by default */}
                  <div id="article2-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> One of my friends just purchased a new home. I&apos;d like to do the same, but I find it difficult to meet my basic expenses. She said her secret was sticking to her budget. Unfortunately, budgets never seem to work for me. No matter how hard I try, they aren&apos;t realistic. What suggestions do you have for making a workable budget that reflects my actual needs?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> A personal budget is essential for fiscal fitness, but creating a budget that is realistic, functional, and works for you takes time. It's a process that is always evolving and frequently needs to be fine-tuned. Areas overlooked, unexpected bills, expenses associated with the time of the year, and changing priorities each play a part. One of the most helpful tools I've found for developing a practical budget is called the Budget Review.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-blue-600">The Five-Column Budget Review Method</h4>
                      <p className="mb-4">
                        The Budget Review consists of a piece of paper with five columns. The areas of the budget are listed in the first column and the allocated amount in the second. At the end of the month, the amount actually spent is placed in the third column. The difference between what was budgeted and what was actually spent is placed in the fourth. With this information, you can consider the reasons for the difference and adjust the budget and your spending patterns as needed. The new amount is placed in the fifth column.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-blue-600">Accounting for Seasonal Variations</h4>
                      <p className="mb-4">
                        When adjusting your budget, be sure to take into consideration items that are seasonal or that only occur once in a while. Home heating expenses are generally less in the spring than in the winter, clothing bills often take a sharp rise just before school begins, and food bills soar when the in-laws invade during the Christmas season.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold text-blue-800 mb-3">Monthly Budget Review Template</h5>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="bg-blue-100">
                                <th className="border border-blue-200 p-2 text-left">Expense Item</th>
                                <th className="border border-blue-200 p-2 text-center">Current Budget</th>
                                <th className="border border-blue-200 p-2 text-center">Actual Expense</th>
                                <th className="border border-blue-200 p-2 text-center">Difference</th>
                                <th className="border border-blue-200 p-2 text-center">Comments</th>
                                <th className="border border-blue-200 p-2 text-center">Adjusted Budget</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr><td className="border border-gray-200 p-2 font-medium">Tithe</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Savings</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr><td className="border border-gray-200 p-2 font-medium">Housing</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Food</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr><td className="border border-gray-200 p-2 font-medium">Clothing</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Transportation</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr><td className="border border-gray-200 p-2 font-medium">Insurance</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Medical Expenses</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr><td className="border border-gray-200 p-2 font-medium">Debt Reduction</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Entertainment & Recreation</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr><td className="border border-gray-200 p-2 font-medium">Miscellaneous</td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td><td className="border border-gray-200 p-2"></td></tr>
                              <tr className="bg-blue-100 font-bold"><td className="border border-blue-200 p-2">TOTAL</td><td className="border border-blue-200 p-2"></td><td className="border border-blue-200 p-2"></td><td className="border border-blue-200 p-2"></td><td className="border border-blue-200 p-2"></td><td className="border border-blue-200 p-2"></td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 italic">
                        Use this template monthly to track your spending patterns and create a budget that truly works for your lifestyle and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Recent Blog Posts */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Insights</h3>
              <p className="text-lg text-gray-600">Latest updates and thoughts</p>
            </div>

            {recentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time>{formatDate(post.publishDate)}</time>
                        <span className="mx-2">•</span>
                        {post.isVideo ? (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                            Video Insight
                          </span>
                        ) : (
                          <span>{getReadingTime(post.content)}</span>
                        )}
                      </div>
                      
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
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Recent Posts</h3>
                <p className="text-gray-600">Check back soon for new articles and insights!</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to get the latest articles, insights, and updates delivered directly to your inbox.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

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
                  <Link
                    key={tag}
                    href={`/blog/category/${tag}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all group"
                  >
                    <div className="capitalize font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tag.replace('-', ' ')}
                    </div>
                    <div className="text-sm text-gray-500">{postCount} article{postCount !== 1 ? 's' : ''}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}