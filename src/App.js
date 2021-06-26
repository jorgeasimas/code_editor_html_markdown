import "./styles.css";
import React, { Component } from "react";
import marked from "marked";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  getMarkdownText() {
    //   return { __html: this.state.value};
    var rawMarkup = marked(this.state.text, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="my-grid">
        <textarea
          className="editor hero is-fullheight"
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <div className="card-container">
          <div dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
      </div>
    );
  }
}
export default Editor;
