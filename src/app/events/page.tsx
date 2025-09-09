import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { events } from '@/data/events';

export default function EventsPage() {
  const today = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= today).sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const pastEvents = events.filter(event => new Date(event.date) < today).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      seminar: 'Seminar',
      workshop: 'Workshop',
      speaking: 'Speaking Event',
      'book-signing': 'Book Signing'
    };
    return labels[type] || type;
  };

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      seminar: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      speaking: 'bg-purple-100 text-purple-800',
      'book-signing': 'bg-orange-100 text-orange-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Speaking Events & Seminars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join me for transformative workshops, inspiring keynotes, and interactive seminars designed 
              to help you unlock your potential and achieve your goals.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Don't miss these upcoming opportunities to grow and connect</p>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                              {getEventTypeLabel(event.type)}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-gray-600">
                            <div className="flex items-center mb-2 sm:mb-0">
                              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{event.description}</p>
                        </div>
                        
                        <div className="lg:ml-6 lg:flex-shrink-0">
                          {event.registrationUrl ? (
                            <a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                              Register Now
                            </a>
                          ) : (
                            <Link
                              href="/contact?inquiry=speaking"
                              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                              Inquire
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Events</h3>
                <p className="text-gray-600 mb-6">Check back soon for new speaking events and seminars!</p>
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Request a Speaking Engagement
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
                <p className="text-lg text-gray-600">Recent speaking engagements and seminars</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                        {getEventTypeLabel(event.type)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                    
                    <div className="text-sm text-gray-600 mb-3">
                      <div className="flex items-center mb-1">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Speaking Topics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Speaking Topics</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Popular topics and themes for keynotes, workshops, and seminars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              [
                {
                  title: "Financial Stability Made Easy",
                  description: "Practical strategies and biblical principles for achieving lasting financial stability and peace of mind."
                },
                {
                  title: "Biblical Financial Stewardship Workshop",
                  description: "Discover God's design for managing money and resources according to biblical principles."
                },
                {
                  title: "Become the Person You Were Meant to Be",
                  description: "Unlock your God-given potential and align your life with your divine purpose and calling."
                },
                {
                  title: "Stewardship",
                  description: "Understanding our role as faithful stewards of the resources, talents, and opportunities God has entrusted to us."
                },
                {
                  title: "The Power of Servant Leadership",
                  description: "Lead with humility, service, and Christ-like character to inspire and transform others."
                },
                {
                  title: "Fundamental Leadership Skills",
                  description: "Essential leadership principles and practical skills for effective leadership in any context."
                }
              ].map((topic, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Book a Speaking Engagement
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}