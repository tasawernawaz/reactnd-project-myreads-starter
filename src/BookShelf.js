import React, {Component} from 'react'
import BookDetails from './BookDetails'


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

export default BookShelf