import React, { Component } from "react";
import AuthorList from "./AuthorsList.js";
import Sidebar from "./Sidebar.js";
import AuthorDetail from "./AuthorDetail.js";
import Loading from "./Loading.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      filteredAuthors: [],
      loading: true,
      currentAuthor: {},
      query: ""
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.resetAuthor = this.resetAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(response => response.data)
      .then(res =>
        this.setState({ authors: res, loading: false, filteredAuthors: res })
      )
      .catch(err => console.error(err));
  }

  selectAuthor(author) {
    this.setState({ loading: true });
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/" + author.id + "/")
      .then(response => response.data)
      .then(res => this.setState({ currentAuthor: res, loading: false }));
  }

  resetAuthor() {
    this.setState({ currentAuthor: {} });
  }

  filterAuthors(query) {
    query = query.toLowerCase();
    let filteredAuthors = this.state.authors.filter(author => {
      return (
        author.first_name.toLowerCase().includes(query) ||
        author.last_name.toLowerCase().includes(query)
      );
    });
    console.log(query);
    this.setState({ query: query, filteredAuthors: filteredAuthors });
  }

  render() {
    let finalRender;

    if (this.state.loading === true) {
      finalRender = <Loading />;
    } else if (this.state.currentAuthor.first_name) {
      finalRender = <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      finalRender = (
        <AuthorList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filtAction={this.filterAuthors}
        />
      );
    }

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <Sidebar resetAuthor={this.resetAuthor} />
          <div className="content col-10">
            <div className="authors">
              <h3>Authors</h3>
              <div>{finalRender}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
