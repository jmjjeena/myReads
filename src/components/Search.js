import React, { Component } from 'react'
import Book from './Book'
import BooksApp from '../App'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
    state = {
        results: [],
        valid: true,
        query: ''
    }

    // handleSearch = this.handleSearch.bind(this);

    showBook = (e) => {
        console.log('Input:', e.target.value);
        this.props.searchBook(e.target.value);
    }

    // handleSearch(query) {
    //     console.log("query: ", query)
    //     this.props.search(query)
    //     .then(results => {
    //         console.log("results: ", results)
    //         if (Array.isArray(results)){
    //             this.setState({ results })
    //         } else {
    //             this.setState({results: []})
    //         }   
    //     })
    // }
    changeQuery = (e) => {
        this.setState({ query: e.target.value }, () => console.log('state:', this.state));
        console.log(this.props.books);
    }

    render() {
        console.log(this.state.results.length > 0)
        const booksElements = this.state.results.length > 0 ? this.state.results.map(book => 
            <Book 
                id={book.industryIdentifiers[0].identifier}
                title={book.title}
                author={book.authors[0]}
                image={book.imageLinks.thumbnail} 
            />
        ) : "";
            console.log("bookElements: ", booksElements)
        return (
            <div className="search-books">
            <div className="search-books-bar">
                    <Router>
                        <div>
                            <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>

                            <Route exact path="/" component={BooksApp} />
                        </div>
                    </Router>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author" 
                            onChange={this.changeQuery} 
                            />
                    </div>
                </div> 

                    
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksElements}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search