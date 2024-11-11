// src/components/SearchBar.jsx
import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ setQuery, loading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    if (inputValue.trim()) {
      setQuery(inputValue); // Only sets the query if input is not empty
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
      <button
        onClick={handleSearch}
        className={`search-button ${loading ? 'loading' : ''}`}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
