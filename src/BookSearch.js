import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Debounce } from 'react-throttle'

class BookSearch extends Component {
  state = {
    results: []
  }

  search (query) {
    BooksAPI.search(query)
      .then((queryBooks) => {
        const mergedBooks = queryBooks.map((queryBook) => {
          queryBook.shelf = 'none'
          this.props.books.forEach(book => {
            if (book.id === queryBook.id){
              queryBook.shelf = book.shelf
            }
          })
          return queryBook
        })
        this.setState({results: mergedBooks})
      })
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <Debounce time="200" handler="onChange">
              <input type="text" placeholder="Search by title or author" onChange={(event) => this.search(event.target.value)} />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) => (
              <Book book={book} key={book.id} reloadBooks={this.props.reloadBooks} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookSearch