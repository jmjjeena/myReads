import React, { Component } from 'react'
import Search from './components/Search'
import BookShelf from './components/BookShelf'
import Book from './components/Book'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'

// const data = BooksAPI.getAll().then(data => data);
// console.log(data);

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        books:[]
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) =>{
            this.setState({books})
            console.log(this.state);
        })
    }

    render() {
        return (
            this.state.showSearchPage ? <Search /> : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <BookShelf />
                    </div>
                    <div className="open-search">
                        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div>
            )
        )
    }
}

export default BooksApp
