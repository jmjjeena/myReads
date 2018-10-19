import React from 'react'
import Book from './Book'

class Search extends React.Component {
    state = {
        results: []
    }
    handleSearch = this.handleSearch.bind(this);

    handleSearch(query) {
        console.log("query: ", query)
        this.props.search(query)
        .then(results => {
            console.log("results: ", results)
            if (true){
                this.setState({ results })
            } else {
                this.setState({results: []})
            }  
        })
    }

    render() {
        const booksElements = this.state.results.map(book => <Book id={book.industryIdentifiers[0].identifier} title={book.title} author={book.authors[0]} image={book.imageLinks.thumbnail} />)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

                        <input type="text" placeholder="Search by title or author" onChange={(e)=> this.handleSearch(e.target.value)} />

                    </div>
                </div>
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