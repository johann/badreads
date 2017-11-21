import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class BookItem extends Component {
  handleClick = () => {
    this.props.onSelect(this.props.book);
  };
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header onClick={this.handleClick}>
            {this.props.book.volumeInfo.title}
          </Card.Header>
          {/*
          <Card.Meta>
            <span className="date">{this.props.book.publishedDate}</span>
          </Card.Meta>
          <Card.Description>{this.props.book.description}</Card.Description>
        */}
        </Card.Content>
      </Card>
    );
  }
}

export default BookItem;
