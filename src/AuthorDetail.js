import React, { Component } from "react";
import BookList from "./BookList.js";
class AuthorDetail extends Component {
  render() {
    const author = this.props.author;

    let authorList;
    authorList = author.books.map(book => <BookList book={book} />);

    return (
      <div className="author col-xs-10">
        <div>
          <h3>{author.first_name + " " + author.last_name}</h3>
          <img
            src={author.imageUrl}
            alt={author.first_name + " " + author.last_name}
            className="img-thumbnail"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{authorList}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
