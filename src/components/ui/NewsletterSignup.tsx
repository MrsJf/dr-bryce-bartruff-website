'use client';

import { useEffect } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    sender: any;
  }
}

export default function NewsletterSignup() {
  useEffect(() => {
    // Load Sender script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (s, e, n, d, er) {
        s['Sender'] = er;
        s[er] = s[er] || function () {
          (s[er].q = s[er].q || []).push(arguments)
        }, s[er].l = 1 * new Date();
        var a = e.createElement(n),
            m = e.getElementsByTagName(n)[0];
        a.async = 1;
        a.src = d;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
      sender('8ce60a80484909')
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="subscribe" className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Workbook Preview */}
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

              <div className="relative z-10 text-center">
                <div className="relative w-64 h-80 mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-blue-900 opacity-20 rounded-lg blur-xl"></div>
                  <Image
                    src="/images/books/workbook-1-cover.png"
                    alt="Financial Stability Made Easy Workbook"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform rotate-12">
                    FREE!
                  </div>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Limited Time Offer</h3>
                <p className="text-blue-100 text-lg">Free through Christmas 2025</p>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get Your FREE Workbook!
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Achieving Financial Freedom: <span className="font-semibold text-green-600">Financial Stability Made Easy</span>
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">What You'll Receive:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Comprehensive financial planning workbook (PDF)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Practical tips and proven strategies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Monthly newsletter with financial insights</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Exclusive resources and tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Early access to new book releases</span>
                    </li>
                  </ul>
                </div>

                {/* Sender Form */}
                <div className="sender-form-field" data-sender-form-id="aKrk5z"></div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
