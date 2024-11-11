// src/services/api.js
import axios from 'axios';

let currentController = null; 

export const fetchBooks = async (query) => {
  // Cancel the previous request if it exists
  if (currentController) {
    currentController.abort();
  }

  currentController = new AbortController();
  const { signal } = currentController;

  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`, {
      signal
    });
    return response.data.docs;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.error("Error fetching data:", error);
    }
    return [];
  } finally {
    currentController = null;
  }
};
