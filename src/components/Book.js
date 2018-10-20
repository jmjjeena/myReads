import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends Component {
    
  handleClick = (e) => {
    console.log("this.props.book", this.props.book)
    console.log('e', e)
    // this.props.updateShelf(this.props.book, e.target.value);
  }

    render() {
        console.log(this.props.id)
        return (
            < div className="book" id={this.props.id} >
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.image}")` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={(e)=>this.han}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" onClick={(e)=>this.handleClick(e)}>Currently Reading</option>
                            <option value="wantToRead" onClick={(e) => this.handleClick(e)}>Want to Read</option>
                            <option value="read" onClick={(e) => this.handleClick(e)}>Read</option>
                            <option value="none" onClick={(e) => this.handleClick(e)}>None</option>
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