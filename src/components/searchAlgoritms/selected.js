import React, { Component } from "react";

export default class Selected extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books, selectedBook } = this.props;
    return (
      <div className="text-white">
        <div>{selectedBook}</div>
      </div>
    );
  }
}
