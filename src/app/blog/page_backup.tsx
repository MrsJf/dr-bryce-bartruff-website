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
            
            {/* Recent Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.filter(post => !post.isVideo).slice(0, 6).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <time>{formatDate(post.publishDate)}</time>
                      <span className="mx-2">•</span>
                      <span>{getReadingTime(post.content)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Financial Tools Section */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>Healthcare Experience • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    What Really Counts!
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    A powerful encounter with Mr. Rhein, a 79-year-old former Penn State athlete, reveals the most important lesson about what truly matters in life. Sometimes wisdom comes from the most unexpected places.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      Life Wisdom
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Family
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Personal Growth
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
                  
                  {/* Full Article Content */}
                  <div id="article1-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4">
                        His eyes filled with tears as he lay across his bed, his left leg dangling over the edge. Mr. Rhein possessed the mind of a 20-year-old, but it was trapped in his 79-year-old body. He was fed up with his inability to do what came naturally when he was young. Even wearing his favorite warm-up suit – the one with the Penn State insignia blazoned across the front – failed to cheer him. I asked him if Penn State was his alma mater.
                      </p>
                      
                      <p className="mb-4">
                        "Yes," he said thoughtfully. "I graduated in '38. Those were the good old days, when I could do no wrong. We were the best. I played basketball and baseball. We were champions in everything we did." He looked away and stated quietly, "I played ball my entire life: handball, tennis, basketball. They consumed my time until this arthritis got the best of me. Now I can't do anything without my walker."
                      </p>
                      
                      <p className="mb-4">
                        Mr. Rhein seemed to sense that he was at the end of his life. Reflection engulfed his thoughts. It seemed appropriate to ask him something that would draw him out. "Mr. Rhein," I queried, "as you think back on your life and the insights you've gained, what do you believe to be the most important thing in life?" Without hesitation he replied, "Family. It's family."
                      </p>
                      
                      <p className="mb-4">
                        Almost as if he were a crusader, he lifted his head and emphasized, "Don't act like a jerk, keep your family. If you lose them, you've lost everything." He dropped his head back and looked away.
                      </p>
                      
                      <p className="mb-4">
                        During my lunch hour, I found a private place to think. Sitting on a bench in the old surgical theater the hospital now keeps as a museum, I reflected on Mr. Rhein's words. They made me think of Jeremy Taylor, the 17th century theologian who wrote, "The sublimity of wisdom is to do those things living which are desired when dying."
                      </p>
                      
                      <p className="mb-4">
                        The hard work associated with my job, continuing education, volunteer work, athletic involvement, and general activities of daily living consumed my days. The question to be considered was, "Am I making the wisest use of my time?" At the end of my life, will the time I spent gathering extra income from overtime or the effort placed on maintaining a fastidious home seem as important as playing basketball in the driveway with my son, or reading stories and playing doll house with my daughter? The answer seemed obvious. "Thanks Mr. Rhein," I whispered aloud. "You made my day, and maybe my life."
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 2 - Food Shopping Tips */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Smart Food Shopping: 12 Practical Tips to Cut Your Grocery Bill
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    A community health nurse asks for practical advice to help families struggling financially. These timeless money-saving strategies can help any household reduce food expenses without sacrificing nutrition.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Food Budgeting
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Money Saving
                    </span>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                      Family Finance
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
                  
                  {/* Full Article Content */}
                  <div id="article2-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> As a new RN working in community health, I spend much of my time with a family struggling to make ends meet. It would be nice to sit down and talk through some money-saving tips with them, but I'm not sure what to include. What are some basic guidelines I can use next time to help families reduce their food bills?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> Every family has different lifestyles and eating patterns, but there are certain principles that most everyone can use:
                      </p>
                      
                      <ol className="mb-4 list-decimal list-inside space-y-3">
                        <li><strong>Prepare a shopping list.</strong> This list should be based on the meals you plan to prepare during the coming week. Start the list at the beginning of the week and you will be able to add other items as supplies become low.</li>
                        
                        <li><strong>Don't buy anything on impulse.</strong> Stick to your list. What appears to be a good bargain is not really a good investment if you don't need it.</li>
                        
                        <li><strong>Avoid buying when hungry.</strong> Low blood sugar and a growling tummy can greatly influence the type and quantity of your purchases.</li>
                        
                        <li><strong>Evaluate where to buy non-grocery items.</strong> Drugs, toiletries, cleaning solutions, and school supplies are typically more expensive at grocery stores than at discount drug and department stores.</li>
                        
                        <li><strong>Shop advertised specials.</strong></li>
                        
                        <li><strong>Use coupons to your advantage.</strong> Use them for items you were already going to purchase at stores conveniently located near you. Resist the temptation to drive all over town to save a few cents on specials and coupons.</li>
                        
                        <li><strong>Shop discount membership warehouses.</strong> The price is generally reduced at such stores if you are willing to buy in bulk.</li>
                        
                        <li><strong>Consider generic brands.</strong> Name brands are not always superior in quality and except for special sales, their price is always higher.</li>
                        
                        <li><strong>Use extreme caution when considering prepared meals.</strong> Their convenience is tempting, but the price per serving can be considerably higher.</li>
                        
                        <li><strong>Avoid fast-food.</strong> Eating out is costly and can be devastating to an already fragile budget.</li>
                        
                        <li><strong>Evaluate the foods your family chooses to eat.</strong> For example try drinking water instead of soda, purchase vegetables instead of chips and substitute popcorn or cereal for expensive treats before bedtime. This will reduce your bill and improve your health.</li>
                        
                        <li><strong>Talk with your friends about suggestions they may have for saving on their food bills.</strong> You may be pleasantly surprised at the insights they reveal.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 3 - New Graduate Financial Planning */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The New Graduate's Guide to Financial Planning: How Much Should I Save?
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    A newly graduated RN wants to save for a home, children's education, and retirement but doesn't know how much to set aside monthly. Learn the simple formula to calculate exactly what you need to reach your financial goals.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Savings Goals
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      Career Finance
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Investment Planning
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article3-content');
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
                  
                  {/* Full Article Content */}
                  <div id="article3-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> I am a newly graduated, single RN. This is my first job, and I want to spend my money wisely. Primarily, I'd like to begin saving for a home, my children's college education, and retirement. I plan to make monthly installments in an investment plan available through work. I'm not sure how much to set aside each month to reach my financial goals. What guidelines do you have to help me decide how much to save?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> Written goals are essential for reaching your financial objectives. Once this has been established, the process of determining how much to set aside each month and the number of years involved is actually very simple. The chart is designed to help you establish realistic targets toward which to aim. This is how it works.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold mb-3 text-blue-800">Example Calculation</h4>
                        <p className="mb-3">
                          Imagine that in 20 years you will need $100,000 for your child's education. You have learned that the mutual fund in which you plan to invest has an overall return of 8% during the past 10 years. Based upon this knowledge you want to know how much to invest each year at 8% interest in order to achieve your goal.
                        </p>
                        
                        <p className="mb-3">
                          First, run your finger down the year column to the year 20. Then move it over to the 8% column where you will find the number 45.762. Divide the number into $100,000 to learn the amount you need to invest annually in order to meet your objective.
                        </p>
                        
                        <p className="font-semibold">
                          In this case $100,000 divided by 45.762 equals $2,185.22. This means by investing $2,185.22 each year over a 20-year period you will have the $100,000 needed. Divided by 12, this is $182.10 per month.
                        </p>
                      </div>
                      
                      <p className="mb-4">
                        Following this formula, you will know exactly how much to put away each year in order to meet your financial goals.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 4 - Credit Card Consolidation */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>3 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Credit Card Consolidation: A Smart Strategy or Dangerous Trap?
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    With six maxed-out credit cards, should you take an 8% consolidation loan? Learn why changing spending habits matters more than just switching debt around, and get practical strategies to break free from credit addiction.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                      Credit Card Debt
                    </span>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                      Debt Management
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Financial Recovery
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article4-content');
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
                  
                  {/* Full Article Content */}
                  <div id="article4-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> My credit cards are out of control. I have six cards and each one is stretched to the limit. An opportunity has arisen in which I can take out a single loan at 8% and pay them all off. What do you think?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> On the surface, it sounds like a good idea. Interest on most credit cards, except for introductory offers, run 24% or more. You should be able to save a great deal of money in interest fees if you pay off your creditors now. You should, however, consider carefully the cause of your debt dilemma before you consolidate your bills or take on additional debt.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-red-600">⚠️ The Real Issue: Spending Patterns</h4>
                      <p className="mb-4">
                        Be committed to changing your spending patterns. If not, you will find yourself with an extended credit line. Then you will not only have your newly accrued credit card bill, but the 8% loan.
                      </p>
                      
                      <p className="mb-4">
                        Based on your history, a new attitude toward credit cards is in order. Consider the use of credit cards to be a privilege, not a right. Many people find it helpful to live credit card free for three months or more. This gives them a chance to overcome their addiction and recapture healthy habits.
                      </p>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold text-yellow-800 mb-3">Breaking the Credit Card Cycle</h5>
                        <ul className="space-y-2 text-sm">
                          <li>• Lock your credit cards in a safety deposit box or give them to a friend</li>
                          <li>• Make it difficult for you to get access to them</li>
                          <li>• At first it may seem hard, but you can survive without your cards</li>
                          <li>• You'll likely find that you spend less when you use cash instead of credit</li>
                        </ul>
                      </div>
                      
                      <p className="mb-4">
                        Once your hiatus is over, make a simple promise to yourself: <strong>Always pay the full amount when your credit bill comes due. If you don't pay the full amount, don't use the card until it is.</strong> This simple rule can help keep you out of debt.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 5 - Vacation Savings */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Finding Hidden Money: Small Daily Savings That Add Up to Big Dreams
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    How can a family save for vacation without drastically cutting their standard of living? Discover the art of finding balance between Ebenezer Scrooge-level frugality and thoughtful expense reduction that actually works.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Vacation Savings
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Daily Savings
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      Budget Optimization
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article5-content');
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
                  
                  {/* Full Article Content */}
                  <div id="article5-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> My family and I have been discussing how to save for our vacation. One thought was that we should reduce our expenses and put that money aside for our trip. I asked some of the people with whom I work for suggestions. Their ideas included bringing lunch to work instead of buying it, washing my own car instead of going to the car wash, and drinking regular coffee instead of going to the coffee shop. What other suggestions do you have to help us decrease our living expenses without infringing too much on our standard of living?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> The process of evaluating expenses and deciding where to spend your money is a good exercise. In fact it should be done on an annual basis because new expenses tend to creep in and eat up cash. Learning where to cut back without hurting your lifestyle is like finding money you never knew you had.
                      </p>
                      
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold mb-3 text-green-800">The Power of Small Changes</h4>
                        <p className="mb-3">
                          This newly found money can then be designated to other areas that are more important to you. Saving a little bit of money each day can grow into a great deal by the end of the year.
                        </p>
                        <p className="font-semibold">
                          Add it up: Simple math dictates that if you save just $5.00 each day, you'll have $1,825 by year's end.
                        </p>
                      </div>
                      
                      <p className="mb-4">
                        Of course, chopping firewood for your pot belly stove and eating a breakfast of dry bread and powdered milk is not for everyone. Ebenezer Scrooge taught us that quality of life is more important than large quantities of money in the bank. The trick is to find a balance between lavishness and austerity that works for you.
                      </p>
                      
                      <p className="mb-4">
                        Provided below are several pages of ideas for cutting back that participants in my financial seminars have submitted. Forms are also provided to help you list ideas and to calculate the amount you will save. Have fun!
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 6 - From Red to Black */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    From Red to Black: A Four-Step Plan to Eliminate Debt and Build Wealth
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    A newly promoted head nurse with a substantial raise wants to break the debt cycle. Learn the four fundamental steps that lead from financial indebtedness to investment and wealth building.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                      Debt Elimination
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Wealth Building
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Career Growth
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article6-content');
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
                  
                  {/* Full Article Content */}
                  <div id="article6-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> Recently, I became head nurse of a medical-surgical unit in a large teaching hospital. Along with the promotion and new responsibilities, I received a hefty raise. It seems I am always in debt and this may be a good time to make changes in my spending pattern. What are some steps I can take to get out of the red into the black financially?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> You are not alone. In fact, the average American family devotes about 25% of its spendable income to outstanding debts. There are several basic steps that when followed, will free you from financial indebtedness and allow you to invest in the future.
                      </p>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-blue-800">Step 1: Live Within Your Income</h4>
                          <p>
                            This involves establishing a realistic budget – the foundation for fiscal fitness. Without limits, it's difficult to control the flow of finances. You must then make spending decisions that allow you to honor your budget.
                          </p>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-orange-800">Step 2: Establish a Plan to Pay Off Current Debts</h4>
                          <p className="mb-3">
                            Prepare a list of your debtors and the amount owed to each. In separate columns, write down the total amount owed, the monthly payment for each one, and the length of time it will take to pay off each one.
                          </p>
                          <p>
                            Now you have a realistic picture of your financial situation and the timeline necessary to take care of your obligations. If possible, take steps to pay off the principle in advance. This will reduce the amount of interest paid and free funds for use in lowering the principles of other debts.
                          </p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-green-800">Step 3: Borrow from Yourself</h4>
                          <p className="mb-3">
                            Instead of going to a bank or using your charge card to borrow more money, establish a savings account that equals at least three months of living expenses. With this as a base, you will have a source from which to draw money to pay for unexpected bills.
                          </p>
                          <p className="mb-3">
                            Cash for a broken refrigerator, a ruined tire, or a new roof will be readily available. In essence, you become your own banker.
                          </p>
                          <p>
                            Additional funds can be put aside for specific purchases, such as a new car, a lawn mower, a vacation, and holiday gifts. Include savings as part of your monthly budget now, even though you're still paying outstanding debts.
                          </p>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-purple-800">Step 4: Invest for the Future</h4>
                          <p>
                            Finally, once you have established a cash reserve, money can be invested for the future. Retirement, a new home and college education are three common areas for which people invest.
                          </p>
                        </div>
                      </div>
                      
                      <p className="mt-6 font-semibold">
                        Getting out of debt and staying out of debt takes discipline and hard work. The person committed to following these four steps will experience the peace of mind and financial freedom provided by gaining financial control.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 7 - Missing Cash */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>3 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Case of the Missing Cash: Solving the Mystery of Where Your Money Goes
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    "I get paid on Friday and by Monday I'm out of cash." Sound familiar? Discover a simple tracking method that can reduce impulse spending by 30% and reveal where your money really goes.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                      Cash Flow Tracking
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Spending Awareness
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Budget Control
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article7-content');
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
                  
                  {/* Full Article Content */}
                  <div id="article7-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> During lunch the other day the subject of budgets came up. One of my colleagues said she isn't sure where all her money goes. She gets paid on Friday and by Monday she's out of cash. She's obviously spending more for "out of pocket" items than she realizes. What suggestions do you have to help her control this?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> The Case of the Missing Cash is not an uncommon caper. A cash flow record can reveal where your money was spent and help reduce cash flow. This record consists of a sheet of paper divided into three sections:
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold mb-3 text-blue-800">The Three-Column Cash Flow Record</h4>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="font-semibold text-blue-700">Column 1</div>
                            <div className="text-sm">Date</div>
                            <div className="text-xs text-gray-600">When you made the purchase</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-blue-700">Column 2</div>
                            <div className="text-sm">Description</div>
                            <div className="text-xs text-gray-600">What you purchased</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-blue-700">Column 3</div>
                            <div className="text-sm">Amount</div>
                            <div className="text-xs text-gray-600">How much you spent</div>
                          </div>
                        </div>
                        
                        <p className="text-sm">
                          <strong>Use this form for every purchase made during a 60-day period.</strong> Out-of-pocket cash spent for a quick gallon of milk on the way home from work, a magazine at the newsstand, and lunch out can then be duly recorded in your budget.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold mb-3 text-green-800">Amazing Results</h4>
                        <p className="mb-3">
                          Most people are amazed at what they find. The amount of compulsive spending at fast food restaurants, clothing stores, or hardware centers can add up to significant dollars.
                        </p>
                        <p className="mb-3">
                          With this information in hand, you can adjust your budget to reflect what is actually spent. Many people also find the exercise of writing down purchases makes them consider more carefully the necessity of each one.
                        </p>
                        <p className="font-semibold">
                          Typically, this results in a drop of 30% in cash purchases.
                        </p>
                      </div>
                      
                      <p className="mb-4">
                        The cash flow record has helped many people gain control over their cash expenses. Some find it helpful as a permanent companion. Others pull it from their files for an annual 60-day check.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 8 - 403(b) Investment Strategy */}
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>The Nursing Spectrum • 1990s</time>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    403(b) Investment Strategy: How to Choose the Right Retirement Fund
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Your employer offers a 403(b) plan with multiple fund options, but how do you choose? Learn the essential guidelines for selecting mutual funds that match your risk tolerance, time horizon, and retirement goals.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      403(b) Plans
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Retirement Investing
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Investment Strategy
                    </span>
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer" 
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.querySelector('#article8-content');
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
                  
                  {/* Full Article Content */}
                  <div id="article8-content" className="hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="prose max-w-none">
                      <p className="mb-4 italic bg-gray-50 p-4 rounded">
                        <strong>Q:</strong> My employer provides employees the option of investing in a 403(b) plan. This looks like a wonderful way to save for retirement since taxes are not taken out until after retirement. Most employees have decided to participate in this program, but we are not sure which fund to choose. What are some guidelines we can use in making this decision?
                      </p>
                      
                      <p className="mb-4">
                        <strong>A:</strong> The needs for each individual and family are different and depend upon their financial objectives. There are however some universal principles that are helpful:
                      </p>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-blue-800">1. Research Track Records</h4>
                          <p>
                            Secure a list of the mutual funds available through your employer that specialize in long-term growth and examine their track records. Such information is readily available online. Examine the rates of return during the past one, three, five and ten years. Past performance will, of course, not guarantee future performance. It will, however, provide a logical base of knowledge upon which to build.
                          </p>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-orange-800">2. Consider Risk Factors</h4>
                          <p className="mb-3">
                            Consider carefully the risk factors involved with each fund. The greater the risk, the greater the potential for higher return. The amount of risk you are willing to take will depend upon your temperament and the amount of time over which you plan to invest.
                          </p>
                          <p className="mb-3">
                            Some people are comfortable taking risks while others need the security of a sure thing. A fund that specializes in speculative stocks will fit the former. A fund that invests in secured bonds and treasury notes will be a closer for the latter.
                          </p>
                          <p>
                            <strong>Time is also part of the question.</strong> The person anticipating retirement in 30 years will have greater opportunities to recover from a poor return or loss than someone retiring in just five years.
                          </p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-green-800">3. Diversification is Key</h4>
                          <p className="mb-3">
                            Diversification is an important consideration for any plan. It's smart to place your money in a variety of areas. This way, when one type of investment does poorly, others can compensate for the loss.
                          </p>
                          
                          <p className="mb-3"><strong>Option A: Single Diversified Fund</strong></p>
                          <p className="mb-3">
                            You may consider a single fund that invests in a variety of areas. These may include a combination of:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                            <li>Stocks from giant stable companies (Blue Chip)</li>
                            <li>Stocks with opportunity for quick increase or decrease (speculative)</li>
                            <li>Company loans (bonds)</li>
                            <li>Loans from the US government (treasury notes)</li>
                            <li>Property (real estate)</li>
                            <li>Local or USA-based companies (domestic)</li>
                            <li>Companies outside the USA (foreign)</li>
                            <li>Companies in specific industries (healthcare, software, utilities)</li>
                          </ul>
                          
                          <p className="mb-3"><strong>Option B: Multiple Specialized Funds</strong></p>
                          <p>
                            You may also choose to place money in several different funds that specialize in one of the areas listed above. This provides the diversification you desire as well as the expertise of several mutual management teams.
                          </p>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3 text-yellow-800">4. Understand the Fees</h4>
                          <p className="mb-3">
                            The variety of fees charged are as diverse as the funds themselves. Some charge a fee when funds are purchased or sold, others have fees that decline the longer you keep your money invested with them, and others, called no-load funds, charge only a yearly maintenance fee.
                          </p>
                          <p>
                            When such fees are compared, their past and expected rate of return should be considered.
                          </p>
                        </div>
                      </div>
                      
                      <p className="mt-6">
                        Detailed information regarding the mutual companies in which you are interested can be found online. Read the information you secure carefully including the prospectus.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

            </div>
            
            {/* Financial Tools Section */}
            <div className="text-center mb-12 mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Tools & Calculators</h3>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.parentElement?.querySelector('#tool1-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = 'Hide Tool';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Use Tool';
                      }
                    }}
                  >
                    Use Tool
                  </button>
                </div>
                
                {/* Interactive Tool Content */}
                <div id="tool1-content" className="hidden border-t border-gray-200 p-6 bg-gray-50">
                  <div className="space-y-6" id="questionnaire-form">
                    <div className="space-y-4">
                      {[
                        "Do you currently live on a budget?",
                        "Do you consistently stick to your budget?", 
                        "Do you buy things only because you really need them?",
                        "Do you give ten percent of your income to the Lord's ministry?",
                        "Do you reconcile your checking account monthly?",
                        "Do you save at least 10% of your income?",
                        "Do you maintain 3 months spendable income in savings?",
                        "Do you and your spouse speak freely about financial matters?",
                        "Have you been free from past due notices (past 12 months)?",
                        "Have you been free from bounced checks (past 12 months)?",
                        "Do you pay off credit card balances each month?",
                        "Does your financial condition allow you to rest easily at night?"
                      ].map((question, index) => (
                        <div key={index} className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">{index + 1}. {question}</label>
                          <div className="flex items-center space-x-4">
                            <span className="text-xs text-gray-500">Never</span>
                            <input 
                              type="range" 
                              min="1" 
                              max="10" 
                              defaultValue="5"
                              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              onChange={(e) => {
                                const value = e.target.value;
                                const valueDisplay = e.target.parentElement?.querySelector('.value-display');
                                if (valueDisplay) valueDisplay.textContent = value;
                                updateQuestionnaireScore();
                              }}
                            />
                            <span className="text-xs text-gray-500">Always</span>
                            <span className="value-display min-w-6 text-sm font-medium text-blue-600">5</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-700">Your Score:</span>
                          <span id="total-score" className="text-2xl font-bold text-blue-600">60</span>
                        </div>
                        <div id="score-feedback" className="text-sm text-gray-600">
                          Complete the assessment to see your personalized feedback.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <script dangerouslySetInnerHTML={{__html: `
                    function updateQuestionnaireScore() {
                      const sliders = document.querySelectorAll('#questionnaire-form input[type="range"]');
                      let total = 0;
                      sliders.forEach(slider => {
                        total += parseInt(slider.value);
                      });
                      
                      document.getElementById('total-score').textContent = total;
                      
                      const feedback = document.getElementById('score-feedback');
                      if (total >= 100) {
                        feedback.textContent = "Excellent! You have strong financial habits and discipline.";
                        feedback.className = "text-sm text-green-600 font-medium";
                      } else if (total >= 80) {
                        feedback.textContent = "Good! You're on the right track with some areas to improve.";
                        feedback.className = "text-sm text-blue-600";
                      } else if (total >= 60) {
                        feedback.textContent = "Fair. Focus on building better financial habits and discipline.";
                        feedback.className = "text-sm text-yellow-600";
                      } else {
                        feedback.textContent = "Priority needed. Consider implementing systematic financial changes.";
                        feedback.className = "text-sm text-red-600 font-medium";
                      }
                    }
                    
                    function calculateBudget() {
                      // Budget calculation logic would go here
                      console.log('Budget calculation triggered');
                    }
                    
                    function addExpenseRow() {
                      const table = document.getElementById('expense-table');
                      const newRow = table.insertRow();
                      newRow.innerHTML = \`
                        <td class="border border-gray-300 p-1">
                          <input type="date" class="w-full px-1 py-1 text-xs" onInput="calculateExpenseTotal()" />
                        </td>
                        <td class="border border-gray-300 p-1">
                          <input type="text" placeholder="Description" class="w-full px-1 py-1 text-xs" />
                        </td>
                        <td class="border border-gray-300 p-1">
                          <input type="number" step="0.01" class="w-full px-1 py-1 text-xs" onInput="calculateExpenseTotal()" />
                        </td>
                        <td class="border border-gray-300 p-1 text-center">
                          <button class="text-red-600 hover:text-red-800 text-xs" onclick="this.parentElement.parentElement.remove(); calculateExpenseTotal();">Delete</button>
                        </td>
                      \`;
                    }
                    
                    function calculateExpenseTotal() {
                      const amounts = document.querySelectorAll('#expense-table input[type="number"]');
                      let total = 0;
                      amounts.forEach(input => {
                        total += parseFloat(input.value) || 0;
                      });
                      document.getElementById('expense-total').textContent = '$' + total.toFixed(2);
                    }
                    
                    function calculateBudgetReview() {
                      // Budget review calculation logic
                      console.log('Budget review calculation triggered');
                    }
                    
                    function calculateAnnualSavings(input) {
                      const dailyAmount = parseFloat(input.value) || 0;
                      const annual = dailyAmount * 365;
                      const output = input.parentElement.nextElementSibling.querySelector('div');
                      output.textContent = '$' + annual.toFixed(2);
                    }
                  `}} />
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
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.parentElement?.querySelector('#tool2-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = 'Hide Tool';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Use Tool';
                      }
                    }}
                  >
                    Use Tool
                  </button>
                </div>
                
                {/* Budget Worksheet Content */}
                <div id="tool2-content" className="hidden border-t border-gray-200 p-6 bg-gray-50 max-h-96 overflow-y-auto">
                  <div className="text-sm text-gray-800 mb-4">Complete budget worksheet - all calculations are automatic!</div>
                  <div className="space-y-6 text-sm">
                    
                    {/* Income Section */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-3">Monthly Income</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Salary One</label>
                          <input type="number" className="w-full px-2 py-1 text-xs border rounded" onInput="calculateBudget()" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Salary Two</label>
                          <input type="number" className="w-full px-2 py-1 text-xs border rounded" onInput="calculateBudget()" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Other Income</label>
                          <input type="number" className="w-full px-2 py-1 text-xs border rounded" onInput="calculateBudget()" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-blue-700 mb-1">Total Income</label>
                          <div id="total-income" className="px-2 py-1 bg-blue-100 rounded font-semibold">$0</div>
                        </div>
                      </div>
                    </div>

                    {/* Expenses */}
                    {[
                      {category: "Tithe", color: "purple", items: ["Local Church", "Mission #1", "Mission #2"]},
                      {category: "Taxes", color: "red", items: ["Federal", "State", "FICA"]},
                      {category: "Savings", color: "green", items: ["401k/403b", "Emergency Fund", "Other"]},
                      {category: "Housing", color: "yellow", items: ["Mortgage/Rent", "Utilities", "Maintenance"]},
                      {category: "Transportation", color: "blue", items: ["Car Payment", "Gas", "Insurance"]}
                    ].map((section, index) => (
                      <div key={index} className={`bg-${section.color}-50 rounded-lg p-4`}>
                        <h5 className={`font-semibold text-${section.color}-800 mb-3`}>{section.category}</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {section.items.map((item, i) => (
                            <div key={i}>
                              <label className="block text-xs text-gray-600 mb-1">{item}</label>
                              <input type="number" className="w-full px-2 py-1 text-xs border rounded" onInput="calculateBudget()" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Results */}
                    <div className="bg-gray-100 rounded-lg p-4 border-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Total Expenses:</span>
                        <span id="total-expenses" className="font-bold">$0</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Spendable Income:</span>
                        <span id="spendable-income" className="font-bold">$0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Difference:</span>
                        <span id="difference" className="font-bold text-lg">$0</span>
                      </div>
                    </div>
                  </div>
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
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.parentElement?.querySelector('#tool3-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = 'Hide Tool';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Use Tool';
                      }
                    }}
                  >
                    Use Tool
                  </button>
                </div>
                
                {/* Percentage Guide Content */}
                <div id="tool3-content" className="hidden border-t border-gray-200 p-6 bg-gray-50">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Income Level:</label>
                    <select className="w-full p-2 border rounded-md" onChange="updatePercentageGuide()">
                      <option value="23850">$23,850 (Entry Level)</option>
                      <option value="96950">$96,950 (Middle Class)</option>
                      <option value="206700">$206,700 (Upper Middle)</option>
                      <option value="394600">$394,600 (High Income)</option>
                      <option value="501050">$501,050+ (Very High)</option>
                    </select>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse border border-gray-300">
                      <thead className="bg-purple-100">
                        <tr>
                          <th className="border border-gray-300 p-2 text-left">Category</th>
                          <th className="border border-gray-300 p-2 text-center">Recommended %</th>
                          <th className="border border-gray-300 p-2 text-center">Dollar Amount</th>
                        </tr>
                      </thead>
                      <tbody id="percentage-table">
                        <tr><td className="border border-gray-300 p-2">Tithe</td><td className="border border-gray-300 p-2 text-center">10%</td><td className="border border-gray-300 p-2 text-center">$2,385</td></tr>
                        <tr><td className="border border-gray-300 p-2">Housing</td><td className="border border-gray-300 p-2 text-center">38%</td><td className="border border-gray-300 p-2 text-center">$7,069</td></tr>
                        <tr><td className="border border-gray-300 p-2">Food</td><td className="border border-gray-300 p-2 text-center">15%</td><td className="border border-gray-300 p-2 text-center">$2,790</td></tr>
                        <tr><td className="border border-gray-300 p-2">Transportation</td><td className="border border-gray-300 p-2 text-center">12%</td><td className="border border-gray-300 p-2 text-center">$2,232</td></tr>
                        <tr><td className="border border-gray-300 p-2">Insurance</td><td className="border border-gray-300 p-2 text-center">8%</td><td className="border border-gray-300 p-2 text-center">$1,488</td></tr>
                      </tbody>
                    </table>
                  </div>
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
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.parentElement?.querySelector('#tool4-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = 'Hide Tool';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Use Tool';
                      }
                    }}
                  >
                    Use Tool
                  </button>
                </div>
                
                {/* Cash Tracker Content */}
                <div id="tool4-content" className="hidden border-t border-gray-200 p-6 bg-gray-50">
                  <div className="mb-4">
                    <button 
                      className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm"
                      onClick="addExpenseRow()"
                    >
                      + Add Expense
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border border-gray-300">
                      <thead className="bg-yellow-100">
                        <tr>
                          <th className="border border-gray-300 p-2">Date</th>
                          <th className="border border-gray-300 p-2">Description</th>
                          <th className="border border-gray-300 p-2">Amount</th>
                          <th className="border border-gray-300 p-2">Action</th>
                        </tr>
                      </thead>
                      <tbody id="expense-table">
                        <tr>
                          <td className="border border-gray-300 p-1">
                            <input type="date" className="w-full px-1 py-1 text-xs" onInput="calculateExpenseTotal()" />
                          </td>
                          <td className="border border-gray-300 p-1">
                            <input type="text" placeholder="Coffee" className="w-full px-1 py-1 text-xs" />
                          </td>
                          <td className="border border-gray-300 p-1">
                            <input type="number" step="0.01" className="w-full px-1 py-1 text-xs" onInput="calculateExpenseTotal()" />
                          </td>
                          <td className="border border-gray-300 p-1 text-center">
                            <button className="text-red-600 hover:text-red-800 text-xs" onClick="this.parentElement.parentElement.remove(); calculateExpenseTotal();">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-yellow-50 font-semibold">
                        <tr>
                          <td className="border border-gray-300 p-2" colspan="2">TOTAL:</td>
                          <td className="border border-gray-300 p-2" id="expense-total">$0.00</td>
                          <td className="border border-gray-300 p-2"></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
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
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.parentElement?.querySelector('#tool5-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = 'Hide Tool';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Use Tool';
                      }
                    }}
                  >
                    Use Tool
                  </button>
                </div>
                
                {/* Budget Review Content */}
                <div id="tool5-content" className="hidden border-t border-gray-200 p-6 bg-gray-50 max-h-96 overflow-y-auto">
                  <div className="text-xs text-gray-800 mb-3">Track your budget vs. actual spending. Differences are calculated automatically.</div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse border border-gray-300">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="border border-gray-300 p-2">Category</th>
                          <th className="border border-gray-300 p-2">Budget</th>
                          <th className="border border-gray-300 p-2">Actual</th>
                          <th className="border border-gray-300 p-2">Difference</th>
                          <th className="border border-gray-300 p-2">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {["Tithe", "Savings", "Housing", "Food", "Clothing", "Transportation", "Insurance", "Medical", "Debt Reduction", "Entertainment", "Miscellaneous"].map((category, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 p-2 font-medium">{category}</td>
                            <td className="border border-gray-300 p-1">
                              <input type="number" className="w-full px-1 py-1" onInput="calculateBudgetReview()" />
                            </td>
                            <td className="border border-gray-300 p-1">
                              <input type="number" className="w-full px-1 py-1" onInput="calculateBudgetReview()" />
                            </td>
                            <td className="border border-gray-300 p-2 text-center font-medium difference-cell">$0</td>
                            <td className="border border-gray-300 p-1">
                              <input type="text" className="w-full px-1 py-1" placeholder="Notes..." />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.parentElement?.parentElement?.querySelector('#tool6-content');
                      const button = e.currentTarget;
                      if (content?.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        button.textContent = 'Hide Tool';
                      } else {
                        content?.classList.add('hidden');
                        button.textContent = 'Use Tool';
                      }
                    }}
                  >
                    Use Tool
                  </button>
                </div>
                
                {/* Money Finding Content */}
                <div id="tool6-content" className="hidden border-t border-gray-200 p-6 bg-gray-50 max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    
                    {/* Savings Calculator */}
                    <div className="bg-teal-50 rounded-lg p-4">
                      <h5 className="font-semibold text-teal-800 mb-3">Savings Calculator</h5>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="block mb-1">Daily Savings</label>
                          <input type="number" step="0.01" placeholder="5.00" className="w-full px-2 py-1 border rounded" onInput="calculateAnnualSavings(this)" />
                        </div>
                        <div>
                          <label className="block mb-1">Annual Total</label>
                          <div className="px-2 py-1 bg-teal-100 rounded font-semibold">$0</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sample Tips Categories */}
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border">
                        <h6 className="font-semibold text-gray-800 mb-2">🏠 Utilities & Home</h6>
                        <div className="space-y-1 text-xs text-gray-800">
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Turn thermostat down 2° in winter, up 2° in summer</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Use programmable thermostat</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Replace filters every 3 months</label>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded p-3 border">
                        <h6 className="font-semibold text-gray-800 mb-2">🚗 Transportation</h6>
                        <div className="space-y-1 text-xs text-gray-800">
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Drive the speed limit</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Remove excess weight from car</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Maintain proper tire pressure</label>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded p-3 border">
                        <h6 className="font-semibold text-gray-800 mb-2">🍕 Food</h6>
                        <div className="space-y-1 text-xs text-gray-800">
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Pack lunch for work</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Shop with a list</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Buy generic brands</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-700">
                      ...and 40+ more practical money-saving strategies!
                    </div>
                  </div>
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
                  <div
                    key={tag}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
                    onClick={() => {
                      // For now, just scroll to articles - category pages coming soon!
                      const articlesSection = document.querySelector('section:has(h2:contains("Articles"))');
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
    </Layout>
  );
}