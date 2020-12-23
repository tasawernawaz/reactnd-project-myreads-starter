import React, {Component} from 'react'
import BookDetails from './BookDetails'
import {Link} from 'react-router-dom'


class ListBooks extends Component {
    render () {
        const {books, handleCatagoryChange} = this.props
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
        const wantToRead = books.filter(book => book.shelf === "wantToRead")
        const read = books.filter(book => book.shelf === "read")

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf shelfName="Currently Reading" books={currentlyReading} handleCatagoryChange={handleCatagoryChange}/>
                    <BookShelf shelfName="Want to read" books={wantToRead} handleCatagoryChange={handleCatagoryChange}/>
                    <BookShelf shelfName="Read" books={read} handleCatagoryChange={handleCatagoryChange}/>
                </div>
                <div className="open-search">
                    <Link className="open-search" to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks


class BookShelf extends Component {
    render () {

        const {shelfName, books, handleCatagoryChange} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <BookDetails handleCatagoryChange={handleCatagoryChange} books={books}/>
                </div>
            </div>
        )
    }
}