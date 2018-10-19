import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
    render() {

        const booksElements = this.props.books.map(book => 
            <l1>
                <Book 
                    id={book.industryIdentifiers[0].identifier}
                    title={book.title}
                    author={book.authors[0]}
                    image={book.imageLinks.thumbnail} 
                /> 
            </l1>
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