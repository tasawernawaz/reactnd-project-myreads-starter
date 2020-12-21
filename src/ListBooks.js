import React, {Component} from 'react'
import BookDetails from './BookDetails'
import {Link} from 'react-router-dom'


class ListBooks extends Component {
    render () {
        const {currentlyReading, wantToRead, read} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf catagory="Currently Reading" books={currentlyReading}/>
                    <BookShelf catagory="Want to read" books={wantToRead}/>
                    <BookShelf catagory="Read" books={read}/>
                </div>
                <div className="open-search">
                    <Link className="open-search" to="/search-book">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks


class BookShelf extends Component {
    render () {
        const {catagory, books} = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{catagory}</h2>
                <div className="bookshelf-books">
                    <BookDetails books={books}/>
                </div>
            </div>
        )
    }
}