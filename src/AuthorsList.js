import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorList extends Component {
  render() {
    let authorList;

    authorList = this.props.authors.map(author => (
      <AuthorCard
        key={author.first_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div>
        <SearchBar filtAction={this.props.filtAction} />
        <div className="row">{authorList} </div>
      </div>
    );
  }
}

export default AuthorList;
