export interface Book {
  id: string;
  title: string;
  description: string;
  amazonUrl: string;
  coverImage: string;
  publishDate: string;
  genre: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationUrl?: string;
  type: 'seminar' | 'workshop' | 'speaking' | 'book-signing';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  tags: string[];
  featured: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface AuthorInfo {
  name: string;
  bio: string;
  photo: string;
  credentials: string[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}