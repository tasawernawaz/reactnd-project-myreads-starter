import React from 'react'
import BookDetails from './BookDetails'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function ListBooks(props) {
    const {books, handleCatagoryChange} = props
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

ListBooks.prototype = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleCatagoryChange: PropTypes.func.isRequired
}

function BookShelf(props) {
    const {shelfName, books, handleCatagoryChange} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <BookDetails handleCatagoryChange={handleCatagoryChange} books={books}/>
            </div>
        </div>
    )
}

BookShelf.prototype = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleCatagoryChange: PropTypes.func.isRequired
}


export default ListBooks
