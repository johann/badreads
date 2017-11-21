import data from "../data";
export default function bookReducer(
  state = {
    list: [],
    selectedBook: {}
  },
  action
) {
  switch (action.type) {
    case "SELECT_BOOK":
      return Object.assign({}, state, { selectedBook: action.payload });
    default:
      return state;
  }
}
