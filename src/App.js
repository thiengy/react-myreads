import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'

function App (props) {
  return(
    <div className="app">
      <Route exact path='/' render={() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <BookShelf />
          <div className="open-search">
            <Link to="/search">Add Book</Link>
          </div>
        </div>
      )}/>
      <Route exact path='/search' render={() => (
        <BookSearch />
      )}/> 
    </div>
  )
}

export default App;