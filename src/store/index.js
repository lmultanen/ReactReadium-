import storiesSlice from "../features/stories/storiesSlice";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import singleStorySlice from "../features/stories/singleStorySlice";

const reducer = combineReducers({
  stories: storiesSlice,
  singleStory: singleStorySlice
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
