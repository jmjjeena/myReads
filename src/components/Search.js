import React, { Component } from 'react'
import Book from './Book'
import BooksApp from '../App'
import * as BooksAPI from '../BooksAPI'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
    state = {
        results: []
    }

    // handleSearch = this.handleSearch.bind(this);

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
    // 
    handleSearch = (query) => {
        if (query) {
            console.log('query', query);
            BooksAPI.search(query).then((books) => {
                if (books.length > 0) {
                    console.log('result', books);
                    // books = books.filter((book) => (book.imageLinks.thumbnail));
                    this.setState({ results: books });
                }
                else {
                    this.setState({ results: [] });
                }
            });
        } else {
            console.log('no query:', query);
            this.setState({ results: [] });
        }
    }

    render() {
        console.log("PROPS:", this.props)
        // console.log(this.state.results.length > 0)
        // const booksElements = this.state.results.length > 0 ? this.state.results.map(book => 
        //     <Book 
        //         id={book.industryIdentifiers[0].identifier}
        //         title={book.title}
        //         author={book.authors[0]}
        //         image={book.imageLinks.thumbnail} 
        //     />
        // ) : "";
        //     console.log("bookElements: ", booksElements)
        return (
            <div className="search-books">
            <div className="search-books-bar">
                    <Router>
                        <div>
                            <Link to="/" className="close-search" onClick={() => this.props.changeSearch()}>Close</Link>

                            <Route 
                                exact path="/" 
                                // component={BooksApp}

                                render={(props) => <BooksApp {...props} showSearchPage={false} />} 
                            />
                        </div>
                    </Router>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author" 
                            onChange={event => this.handleSearch(event.target.value)} 
                            />
                    </div>
                </div> 

                    
                        {/*
  
  render={(props) => <Dashboard {...props} isAuthed={true} />}

                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results.length > 0 ? this.state.results.map((book, index) => (
                            <Book
                                key={index}
                                id={book.industryIdentifiers[0].identifier}
                                title={book.title}
                                authors={book.authors ? book.authors : ""}
                                image={book.imageLinks.thumbnail} 
                                updateShelf={this.props.updateShelf}
                                book={book}
                            />
                        )) : ""}
                        {/* {booksElements} */}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search