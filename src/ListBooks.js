import React, {Component} from 'react'
import BookDetails from './BookDetails'
import {Link} from 'react-router-dom'


class ListBooks extends Component {
    render () {
        const {currentlyReading, wantToRead, read, handleCatagoryChange} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf catagoryId="currentlyReading" catagoryName="Currently Reading" books={currentlyReading} handleCatagoryChange={handleCatagoryChange}/>
                    <BookShelf catagoryId="wantToRead" catagoryName="Want to read" books={wantToRead} handleCatagoryChange={handleCatagoryChange}/>
                    <BookShelf catagoryId="read" catagoryName="Read" books={read} handleCatagoryChange={handleCatagoryChange}/>
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

        const {catagoryId, catagoryName, books, handleCatagoryChange} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{catagoryName}</h2>
                <div className="bookshelf-books">
                    <BookDetails catagoryId={catagoryId} handleCatagoryChange={handleCatagoryChange} books={books}/>
                </div>
            </div>
        )
    }
}