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
