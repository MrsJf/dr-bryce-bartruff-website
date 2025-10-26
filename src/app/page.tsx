import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import BookCard from '@/components/ui/BookCard';
import PhotoCarousel from '@/components/ui/PhotoCarousel';
import { books } from '@/data/books';

export default function Home() {
  const featuredBooks = books
    .filter(book => book.featured)
    .sort((a, b) => (a.order || 999) - (b.order || 999))
    .slice(0, 3);

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
