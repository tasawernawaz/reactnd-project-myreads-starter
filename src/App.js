import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleCatagoryChange = this.handleCatagoryChange(this)
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  handleCatagoryChange = (book, prevCat, newCat) => {
    this.setState(currentState => ({
      //remove from previous cat and add in new cat
    }
    ))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            />
          )}
        />
        <Route path="/search-book" component={BookSearch}/>
      </div>
    )
  }
}

export default BooksApp
