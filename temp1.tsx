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
