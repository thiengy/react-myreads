import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  loadBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }
  
  reloadBooks() {
    this.loadBooks()
  }

  componentDidMount(){
    this.loadBooks()
  }

  render() {
    return(
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <BookShelf books={this.state.books} reloadBooks={this.reloadBooks.bind(this)} />
            <div className="open-search">
              <Link to="/search">Add Book</Link>
            </div>
          </div>
        )}/>
        <Route exact path='/search' render={() => (
          <BookSearch books={this.state.books} reloadBooks={this.reloadBooks.bind(this)} />
        )}/> 
      </div>
    )
  }
}

export default App;