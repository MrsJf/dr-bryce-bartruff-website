import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { books } from '@/data/books';

interface BookPageProps {
  params: {
    id: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = books.find(b => b.id === params.id);
  
  if (!book) {
    notFound();
  }

  const relatedBooks = books
    .filter(b => b.id !== book.id && b.genre === book.genre)
    .slice(0, 3);

  return (
    <Layout>
      <div className="bg-white">
        {/* Book Details Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative h-96 w-64 shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Book Information */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {book.genre}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {book.description}
              </p>
              
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Published: {new Date(book.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Buy on Amazon
                </a>
                <a
                  href={`mailto:brycebartruff@me.com?subject=Question about ${book.title}`}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Ask About This Book
                </a>
              </div>
            </div>
          </div>

          {/* Extended Description */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Book</h2>
            <div className="prose prose-lg max-w-4xl">
              <p className="text-gray-700 leading-relaxed">
                This comprehensive guide offers readers a deep dive into the transformative concepts and practical 
                strategies that can help reshape your thinking and approach to life's challenges. Through real-world 
                examples, actionable exercises, and profound insights, you'll discover how to unlock your potential 
                and create lasting positive change.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Whether you're facing personal obstacles, professional challenges, or simply seeking to grow and 
                evolve, this book provides the tools and inspiration needed to move forward with confidence and purpose. 
                Each chapter builds upon the last, creating a comprehensive roadmap for transformation and success.
              </p>
            </div>
          </div>

          {/* Related Books */}
          {relatedBooks.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">More Books in {book.genre}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBooks.map((relatedBook) => (
                  <Link
                    key={relatedBook.id}
                    href={`/books/${relatedBook.id}`}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="relative h-48 w-32 mx-auto mb-4">
                        <Image
                          src={relatedBook.coverImage}
                          alt={relatedBook.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-center group-hover:text-blue-600 transition-colors">
                        {relatedBook.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-center mt-2 line-clamp-2">
                        {relatedBook.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Books */}
          <div className="mt-16 text-center">
            <Link
              href="/books"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to All Books
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}