import storiesSlice from "../features/stories/storiesSlice";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import singleStorySlice from "../features/stories/singleStorySlice";
import authorsSlice from "../features/stories/authorsSlice";
import singleAuthorSlice from "../features/stories/singleAuthorSlice";

const reducer = combineReducers({
  stories: storiesSlice,
  singleStory: singleStorySlice,
  authors: authorsSlice,
  singleAuthor: singleAuthorSlice
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
