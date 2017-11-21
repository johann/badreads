import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

class Cart extends Component {
  handleClick = () => {
    console.log("Clicking trash");
  };
  render() {
    const bookItems = this.props.books.map((book, index) => {
      return (
        <Feed.Event key={index}>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>You</Feed.User> added {book.title} to your cart
              <Icon name="trash" onClick={this.handleClick} />
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      );
    });
    return <Feed>{bookItems}</Feed>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.cart.booksInCart
  };
}

export default connect(mapStateToProps)(Cart);
