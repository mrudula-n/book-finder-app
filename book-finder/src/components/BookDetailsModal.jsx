// src/components/BookDetailsModal.jsx
import React from 'react';
import '../styles/BookDetailsModal.css';

const BookDetailsModal = ({ book, isOpen, onClose }) => {
    if (!isOpen) return null;

    const renderStars = (rating) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
        );
      }
      return stars;
    };
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>Close</button>
          <h2>{book.title}</h2>
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={`${book.title} cover`}
              className="modal-book-cover"
            />
          ) : (
            <div className="modal-book-no-cover">No Image</div>
          )}
          <p><strong>Author:</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
          <p><strong>Published:</strong> {book.publish_date?.join(', ') || 'Unknown'}</p>
          <p><strong>Publisher:</strong> {book.publisher?.join(', ') || 'Unknown'}</p>
          <p><strong>Views:</strong> {book.readinglog_count || 0}</p>
          <p><strong>Genre:</strong> {book.subject?.join(', ') || 'Unknown'}</p>
          <p><strong>Average Rating:</strong> {renderStars(Math.round(book.ratings_average || 0))}</p>
          <p><strong>Total Ratings:</strong> {book.ratings_count || 0}</p>
        </div>
      </div>
    );
};

export default BookDetailsModal;
