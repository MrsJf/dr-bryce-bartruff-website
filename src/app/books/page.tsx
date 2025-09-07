import Layout from '@/components/layout/Layout';
import BookCard from '@/components/ui/BookCard';
import EndorsementCarousel from '@/components/ui/EndorsementCarousel';
import { books } from '@/data/books';

export default function BooksPage() {
  const featuredBooks = books.filter(book => book.featured);
  const otherBooks = books.filter(book => !book.featured);

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Books</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore a collection of transformative books designed to help you unlock your potential, 
              overcome challenges, and create the life you desire. Each book offers practical insights 
              and actionable strategies for personal and professional growth.
            </p>
          </div>

          {/* Featured Books */}
          {featuredBooks.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredBooks.map((book) => (
                  <BookCard key={book.id} book={book} featured />
                ))}
              </div>
            </div>
          )}

          {/* Complete Collection with Endorsements */}
          {otherBooks.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Complete Collection</h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Books Grid */}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherBooks.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))}
                  </div>
                </div>
                
                {/* Endorsements Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      What Readers Say
                    </h3>
                    <EndorsementCarousel />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Transformation Today
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Each book is a step towards a better you. Choose the one that speaks to your current journey 
              and begin transforming your life with proven strategies and inspiring insights.
            </p>
            <div className="space-x-4">
              <a
                href="mailto:brycebartruff@me.com?subject=Book Inquiry"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ask a Question
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}