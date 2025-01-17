import axios from "axios";

const SET_AUTHORS = "SET_AUTHORS";

export const setAuthors = (authors) => {
  return {
    type: SET_AUTHORS,
    authors,
  };
};

export const fetchAuthors = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get("/api/authors");
        dispatch(setAuthors(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTHORS:
        return action.authors;
      default:
        return state;
    }
  };

const initialState = [];