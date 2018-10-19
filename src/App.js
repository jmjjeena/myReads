import React from 'react'
import Search from './components/Search'
import BookShelf from './components/BookShelf'
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
            this.state.showSearchPage ? <Search search={BooksAPI.search}/> : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">          
                        <BookShelf books={this.state.books.filter(book => { return book.shelf === 'currentlyReading' })} changeShelf={changeShelf} title="Currently Reading" />
                        <BookShelf books={this.state.books.filter(book => { return book.shelf === 'wantToRead' })} changeShelf={changeShelf} title="Want to Read" />
                        <BookShelf books={this.state.books.filter(book => { return book.shelf === 'read' })} changeShelf={changeShelf} title="Read" />
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
