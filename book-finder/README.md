# Book Finder App

A simple and interactive Book Finder application that allows users to search for books using the Open Library API. The app includes a search bar, a grid view of book cards, and a detailed modal view for each book.

## Features

- **Search Books**: Search for books by keywords using the Open Library API.
- **Book Details**: Click on a book to view more details in a modal, including the author, genre, publication date, publisher, view count, and average rating.
- **Responsive Design**: The app adjusts to various screen sizes, providing a user-friendly experience across devices.
- **Smooth UI**: Includes hover effects and animations to enhance user interactivity.

## Project Structure

- **Components**: Organized into components like `HomePage`, `SearchBar`, `BookList`, `BookCard`, and `BookDetailsModal`.
- **Styles**: Custom CSS for each component in the `styles` folder.
- **Services**: An `api.js` file in the `services` folder to handle API requests with Axios.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/book-finder-app.git
   cd book-finder

2. **Install Depedencies**
    yarn install or npm install

3. **Run The APP**
    yarn start or npm Start

4. **This App is deployed in Netlify**
- https://alex-book-finder.netlify.app/