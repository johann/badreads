export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    payload: book
  };
}

export function selectBook(book) {
  return {
    type: "SELECT_BOOK",
    payload: book
  };
}

/// dispatch(selectBook(book))

//// dispatch(function() {})

export function fetchedBooks(books) {
  return {
    type: "FETCHED_BOOKS",
    payload: books
  };
}

export function fetchingBooks() {
  return {
    type: "FETCHING_BOOKS"
  };
}

/// dispatch(fetchBooks())
export function fetchBooks() {
  return function(dispatch) {
    dispatch(fetchingBooks());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40"
    )
      .then(res => res.json())
      .then(json => {
        // const obj = { type: "FETCHED_BOOKS", payload: json.items };
        // dispatch(obj);
        dispatch(fetchedBooks(json.items));
      });
  };
}

/// user actions

export function loginUser(userParams) {
  return function(dispatch) {
    dispatch({ type: "LOGGING_IN" });
    fetch("http://localhost:3000/api/v1/login")
      .then(res => res.json())
      .then(user => {
        dispatch({ type: "LOGGED_IN", payload: user });
      });
  };
}
