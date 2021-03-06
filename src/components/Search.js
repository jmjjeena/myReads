import React, { Component } from 'react'
import Books from './BookCase/Books'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom";


class Search extends Component {
    state = {
        results: []
    }

    handleSearch = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.length > 0) {

                    this.setState({ results: books });
                }
                else {
                    this.setState({ results: [] });
                }
            });
        } else {
            this.setState({ results: [] });
        }
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
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
                        {this.state.results.length > 0 ?
                            <Books
                                books={this.state.results}
                                updateShelf={this.props.updateShelf}
                            />
                         : ""}
                        {/* {booksElements} */}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search