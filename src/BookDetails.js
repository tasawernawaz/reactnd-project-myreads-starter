import React, {Component} from 'react'
import SelectInput from './SelectInput'
import PropTypes from 'prop-types'

class BookDetails extends Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
        handleCatagoryChange: PropTypes.func.isRequired
    }

    render () {
        const {books, handleCatagoryChange } = this.props
        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                        <SelectInput catagory={book.shelf} bookId={book.id} handleCatagoryChange={handleCatagoryChange}/>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    </div>
                    </li>
                ))}
            </ol>
        )
    }
}


export default BookDetails