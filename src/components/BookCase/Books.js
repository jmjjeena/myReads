import React, { Component } from 'react'
import Book from './Book'

class Books extends Component {
    render() {
        const books = this.props.books.map((book, index) => (
            <li key={index}>
                <Book
                    id={book.industryIdentifiers[0].identifier}
                    title={book.title}
                    authors={book.authors ? book.authors : ""}
                    image={book.imageLinks.thumbnail}
                    updateShelf={this.props.updateShelf}
                    book={book}
                />
            </li>
        ))

        return (
            <ol className="books-grid">
                {books}
            </ol>
        )
    }
}

export default Books;