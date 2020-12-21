import React, {Component} from 'react'
import SelectInput from './SelectInput'

class BookDetails extends Component {
    render () {
        const books = this.props.books
        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                        <SelectInput />
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