import React from 'react'
import Search from './components/Search'
import BookCase from './components/BookCase/BookCase'

import { Route } from "react-router-dom";
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
        showSearchPage:  false,
        books:[]
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = async () => {
        await BooksAPI.getAll().then((books) => {
            this.setState({ books });
            return books
        });
    }
    
    updateShelf = async (book, shelf) => {
      await  BooksAPI.update(book, shelf)
      this.fetchBooks();
    }

    render() {  
        return(
            <div>
                <Route
                    path="/search"
                    render={(props) => <Search
                        {...props}
                        updateShelf={this.updateShelf}
                    />}
                />
                <Route
                    exact path="/"
                    render={(props) => <BookCase 
                        {...props} 
                        fetchBooks={this.fetchBooks}
                        books={this.state.books} 
                        updateShelf={this.updateShelf}
                    />}
                />
            </div>
        )
    }
}

export default BooksApp
