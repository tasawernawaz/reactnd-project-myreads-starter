import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookDetails from './BookDetails'
import * as BooksAPI from './BooksAPI'


class BookSearch extends Component {
    state = {
        query: "",
        results: []
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        }, this.searchBooks)
    }

    searchBooks = () => {
        BooksAPI.search(this.state.query).then(response => {
            if(response) {
                this.setState({
                    results: response
                })
            }
        })
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                     <BookDetails handleCatagoryChange={this.props.handleCatagoryChange} books={this.state.results}/>
                </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch