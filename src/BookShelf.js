import React, { Component } from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends Component {
  constructor(props){
    super(props)
    this.state = this.props
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
                          {this.props.books
                            .filter((book) => book.shelf === 'currentlyReading')
                              .map((book) => (
                                <Book book={book} key={book.id} reloadBooks={this.props.reloadBooks} />
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
                          {this.props.books
                              .filter((book) => book.shelf === 'wantToRead')
                                .map((book) => (
                                  <Book book={book} key={book.id} reloadBooks={this.props.reloadBooks} />
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
                          {this.props.books
                              .filter((book) => book.shelf === 'read')
                                .map((book) => (
                                  <Book book={book} key={book.id} reloadBooks={this.props.reloadBooks} />
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