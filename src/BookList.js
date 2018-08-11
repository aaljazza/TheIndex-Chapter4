import React, { Component } from "react";

class BookList extends Component {
  render() {
    const book = this.props.book;

    let authorList = book.authors.map(author => author.name).join(", ");

    return (
      <tr>
        <td>{book.title}</td>
        <td>{authorList}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookList;
