import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import BookCard from '@/components/ui/BookCard';
import PhotoCarousel from '@/components/ui/PhotoCarousel';
import { books } from '@/data/books';

export default function Home() {
  const featuredBooks = books.filter(book => book.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Lives Through Words
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Author of 8 books, helping thousands unlock their potential through powerful insights and practical wisdom.
              </p>
              <div className="space-x-4">
                <Link
                  href="/books"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Explore Books
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <PhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover transformative insights and practical wisdom in these carefully crafted works.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} featured />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/books"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new books, upcoming events, and exclusive insights delivered to your inbox.
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

      {/* Coming Soon Book */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-lg font-semibold text-green-600 mb-2">Coming Soon:</p>
              <h2 className="text-3xl font-bold text-gray-900">"I Want Your Heart: 31 Days of Devotion in Giving"</h2>
            </div>
            <p className="text-xl text-gray-700 mb-6">
              Dr. Bartruff's upcoming devotional explores the heart of biblical giving through 31 days of inspiring reflections. This powerful book will challenge and encourage readers to discover the joy and transformation that comes from generous living.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              A daily devotional that will transform your understanding of biblical generosity and deepen your relationship with God through the practice of giving.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Be the first to know when it's available - join our newsletter for exclusive updates!
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-lg text-gray-600">Stay informed about upcoming events and new content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Upcoming Speaking Events</h3>
              <p className="text-gray-600 mb-4">
                Join us for inspiring seminars and workshops designed to help you unlock your potential.
              </p>
              <Link
                href="/events"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Events →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Latest Posts</h3>
              <p className="text-gray-600 mb-4">
                Read insights, tips, and stories that can help transform your mindset and approach to life.
              </p>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read Blog →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
