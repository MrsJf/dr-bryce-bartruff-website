'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Book } from '@/types';
import ImagePlaceholder from './ImagePlaceholder';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export default function BookCard({ book, featured = false }: BookCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`group ${featured ? 'col-span-1' : ''}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-64 bg-gray-100">
          {imageError ? (
            <ImagePlaceholder 
              width={256} 
              height={256} 
              text={book.title}
              className="w-full h-full rounded-t-lg"
            />
          ) : (
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 overflow-hidden" 
             style={{
               display: '-webkit-box',
               WebkitLineClamp: 3,
               WebkitBoxOrient: 'vertical'
             }}>
            {book.description}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm text-gray-500">{book.genre}</span>
            <div className="flex gap-2">
              <Link
                href={`/books/${book.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap"
              >
                Learn More
              </Link>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap"
              >
                {book.amazonUrl.includes('amazon.com') ? 'Buy on Amazon' : 'Buy from Publisher'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}