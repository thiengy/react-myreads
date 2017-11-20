import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

function Book (props) {

  function changeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((books) => {
      if(props.reloadBooks) {
        props.reloadBooks()
      }
    })
  }

  const { book } = props

  return(
    <div key={book.id} className="book">
      <div className="book-top">
          <img className="book-cover" alt={book.title} style={{ width: 128, height: 192}} src={book.imageLinks.thumbnail} />
          <div className="book-shelf-changer">
              <select defaultValue={book.shelf} onChange={(event) => changeShelf(book, event.target.value)}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="none">None</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
          </div>
      </div>
      <div className="book-title"> {book.title} </div>
      <div className="book-authors"> {book.authors} </div>
    </div>
  )
}

export default Book