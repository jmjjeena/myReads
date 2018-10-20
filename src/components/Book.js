import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends Component {
    
  updateShelf = (e) => {
      console.log('Updating!', this.props.book.shelf)
    this.props.updateShelf(this.props.book, e.target.value);
  }

    render() {
        return (
            < div className="book" key={this.props.id} >
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.image}")` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div >
        );
    }
}

Book.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string
}




export default Book;