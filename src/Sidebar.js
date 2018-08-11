import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-2">
        <div id="sidebar">
          <img src="theindex.svg" className="logo" alt="the index logo" />
          <section>
            <h4 className="menu-item active">
              <button onClick={this.props.resetAuthor}>AUTHORS</button>
            </h4>
          </section>
        </div>
      </div>
    );
  }
}

export default Sidebar;
