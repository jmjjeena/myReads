import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            < div className="book" >
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
                <div className="book-authors">{this.props.author}</div>
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