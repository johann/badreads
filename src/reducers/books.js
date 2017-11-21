import data from "../data";
export default function bookReducer(
  state = {
    list: [],
    selectedBook: {},
    fetchedBooks: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "SELECT_BOOK":
      return Object.assign({}, state, { selectedBook: action.payload });
    case "FETCHED_BOOKS":
      return Object.assign({}, state, {
        fetchedBooks: action.payload,
        loading: false
      });
    case "FETCHING_BOOKS":
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
}
