import React from 'react'
import Search from './components/Search'
import BookShelf from './components/BookShelf'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: this.props.showSearchPage || false,
        books:[]
    }

    componentDidMount() {
        this.fetchBooks();
    }
    fetchBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books });
        });
    }
    
    updateShelf = async (book, shelf) => {
      await  BooksAPI.update(book, shelf)
      this.fetchBooks();
    }

    changeSearch = () => {
        this.setState({showSearchPage: false})
    }

    render() {
        const bookshelves = [
            { 
                id: "currentlyReading",
                title: "Currently Reading"
            },
            {
                id: "wantToRead",
                title: "Want to Read"
            },
            {
                id: "read",
                title: "Read"
            }
        ]

        const bookshelveselement = bookshelves.map((item, index) => 
            <BookShelf 
                key={index}
                books={this.state.books.filter(
                    book => { return book.shelf === item.id })}
                updateShelf={this.updateShelf}
                title={item.title}
            />
        )
        
        return (
            this.state.showSearchPage ? 
                <Search 
                    search={BooksAPI.search}
                    updateShelf={this.updateShelf}
                    changeSearch={this.changeSearch}
                /> : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content"> 
                        {bookshelveselement}
                        </div>
                    <div className="open-search">
                        <Router>
                            <div>
                                <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link> 
                                <Route path="/search" component={Search} />     
                            </div>                      
                        </Router>
                    </div>
                </div>
            )
        )
    }
}

export default BooksApp
