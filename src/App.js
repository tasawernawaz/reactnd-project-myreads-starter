import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleCatagoryChange = this.handleCatagoryChange.bind(this)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({books: response})
    })
  }

  handleCatagoryChange = (bookId, newShelf) => {
    BooksAPI.update(bookId, newShelf).then(response => {
      BooksAPI.getAll().then(response => {
        this.setState({books: response})
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks
            handleCatagoryChange={this.handleCatagoryChange}
            books={this.state.books}
            />
          )}
        />
        <Route path="/search" render={ () => (
          <BookSearch
            handleCatagoryChange={this.handleCatagoryChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
