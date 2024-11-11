// src/components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookCard
        key={book.key}
        title={book.title}
        author={book.author_name ? book.author_name[0] : 'Unknown Author'}
        firstPublishYear={book.first_publish_year}
        book={book}
        coverId={book.cover_i}
      />
    ))}
  </div>
);

export default BookList;
