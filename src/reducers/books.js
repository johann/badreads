import data from "../data";
export default function bookReducer(
  state = {
    list: [
      {
        title: "Mirage",
        authors: ["Clive Cussler", "Jack B. Du Brul"],
        publisher: "Putnam Publishing Group",
        publishedDate: "2013",
        description:
          "The ninth in the Juan Cabrillo series featuring some or all of the same principal characters who have comprised the crew of the Oregon"
      },
      {
        title: "Picture Perfect",
        authors: ["Fern Michaels"],
        publisher: "Zebra Books",
        publishedDate: "2005",
        description:
          "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint."
      },
      {
        title: "Last Hope",
        authors: ["Jessica Clare", "Jen Frederick"],
        publisher: "Berkley Books",
        publishedDate: "2015-09-29",
        description:
          "For Mendoza, being hired out as a mercenary hitman brought him money and built him an empire. His new job: bring down a rival in the Amazon. Then he met her. Ava survived a crash-landing in the jungle. Her rescuer was hot, sexy and dangerous. But now someone wants her dead, and Mendoza seems to be her only chance at survival - but is he truly her saviour, or someone with far deadlier intentions?"
      }
    ],
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
