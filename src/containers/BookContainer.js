import React, { Component } from "react";
import BookList from "../components/BookList";
import BookShow from "../components/BookShow";
import { Grid } from "semantic-ui-react";
import data from "../data";
import { connect } from "react-redux";
import { addToCart, selectBook } from "../actions/books";
class BookContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <BookList books={this.props.books} onSelect={this.props.onSelect} />
          </Grid.Column>
          <Grid.Column width={9}>
            <BookShow
              book={this.props.selectedBook}
              onAddCart={this.props.onAdd}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("BookContainer", state);
  return {
    books: state.books.list,
    selectedBook: state.books.selectedBook
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: book => {
      dispatch(selectBook(book));
    },
    onAdd: book => {
      dispatch(addToCart(book));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
