import React, { Component } from 'react'
import './App.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }
        
  loadBooks() {
    BooksAPI.getAll().then((books) => {
        let shelfCurrentlyReading = books.filter((book) => {return book.shelf === 'currentlyReading'})
        let shelfWantToRead = books.filter((book) => {return book.shelf === 'wantToRead'})
        let shelfRead = books.filter((book) => {return book.shelf === 'read'})

        this.setState({
        currentlyReading: shelfCurrentlyReading,
        wantToRead: shelfWantToRead,
        read: shelfRead
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
      <div>
        <div>
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                          {this.state.currentlyReading.map((book) => (
                            <Book book={book} key={book.id} reloadBooks={this.reloadBooks.bind(this)} />
                          ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.state.wantToRead.map((book) => (
                          <Book book={book} key={book.id} reloadBooks={this.reloadBooks.bind(this)} />
                        ))}
                      </ol>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.state.read.map((book) => (
                            <Book book={book} key={book.id} reloadBooks={this.reloadBooks.bind(this)} />
                          ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
      </div>    
    )
  }
}

export default BookShelf