// src/components/HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import { fetchBooks } from '../services/api';
import '../styles/HomePage.css';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const debounceTimeout = useRef(null); // For debouncing

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    if (query.trim()) {
      debounceTimeout.current = setTimeout(async () => {
        setLoading(true);
        const results = await fetchBooks(query);
        setBooks(results);
        setLoading(false);
      }, 500); 
    } else {
      setBooks([]); 
    }

    return () => clearTimeout(debounceTimeout.current);
  }, [query]); 

  return (
    <div className="homepage">
      <h2 className="quote">
        "Book Finder"
      </h2>
      <p>Hi Alex... I'm your book finder and here to help you to search the books that you would love. I hope you will enjoy it!!</p>
      <SearchBar setQuery={setQuery} loading={loading} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default HomePage;
