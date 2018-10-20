import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends Component {
    
  handleClick = (e) => {
    console.log("this.props.book", this.props.book)
    console.log('e', e.target.value)
    this.props.updateShelf(this.props.book, e.target.value)
  }

    render() {
        console.log(this.props.id)
        console.log("author: ", this.props.author)
        return (
            < div className="book" id={this.props.id} >
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.image}")` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={(e)=>this.handleClick(e)}>
                            <option value="move">Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none" >None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors ? this.props.authors.join(", ") : ""}</div>
            </div >
        )
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