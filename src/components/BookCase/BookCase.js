import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from "react-router-dom";


class BookCase extends Component {
    

    render() {
        const shelves = [
            {
                id: "currentlyReading",  title: "Currently Reading"
            },
            {
                id: "wantToRead", title: "Want to Read"
            },
            {
                id: "read", title: "Read"
            }
        ]

        const bookshelveselement = shelves.map((item, index) => 
            <Shelf 
                key = { index }
                books = {
                    this.props.books.filter(
                        book => { return book.shelf === item.id })
                }
                updateShelf = { this.props.updateShelf }
                title = { item.title }
             />
        )

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {bookshelveselement}
                </div>
                <div className="open-search">
                    <div>
                        <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default BookCase