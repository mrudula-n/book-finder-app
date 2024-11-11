// src/components/BookCard.jsx
import React, { useState } from 'react';
import BookDetailsModal from './BookDetailsModal';
import '../styles/BookCard.css';

const BookCard = ({ title, author, firstPublishYear, coverId, book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="book-card">
        {coverId ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
            alt={`${title} cover`}
            className="book-cover"
          />
        ) : (
          <div className="book-no-cover">No Image</div>
        )}
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <p className="book-year">Published: {firstPublishYear || 'Unknown'}</p>
        <button className="see-more-button" onClick={openModal}>More Info</button>
      </div>
      <BookDetailsModal book={book} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default BookCard;
