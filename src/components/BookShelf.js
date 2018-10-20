import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {

        const booksElements = this.props.books.map((book, index) => 
            <li key={index}>
                <Book 
                    id={book.industryIdentifiers[0].identifier}
                    title={book.title}
                    authors={book.authors ? book.authors:""}
                    image={book.imageLinks.thumbnail} 
                    updateShelf={this.props.updateShelf}
                    book={book}
                /> 
            </li>
        )

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {booksElements}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf