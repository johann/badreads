export default function cartReducer(state = { booksInCart: [] }, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, {
        booksInCart: [...state.booksInCart, action.payload]
      });
    case "REMOVE_FROM_CART":
      const remainingBooks = state.booksInCart.filter(
        book => book.title !== action.payload
      );

      return Object.assign({}, state, {
        booksInCart: remainingBooks
      });
    default:
      return state;
  }
}
