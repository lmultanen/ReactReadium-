import React, { useEffect } from "react";
import { Navbar, StoriesList, SingleStory } from "./";
import { fetchStories } from "../features/stories/storiesSlice";
import { fetchAuthors } from "../features/stories/authorsSlice";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom'
import AllAuthors from "./AllAuthors";
import SingleAuthor from "./SingleAuthor";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Readium</h1>
        </div>
        <Navbar />
      </div>
      <Routes>
          <Route index element={<StoriesList/>}/>
          <Route path={'/stories'} element={<StoriesList/>}/>
          <Route path={'/stories/:storyId'} element={<SingleStory/>}/>
          <Route path={'/authors'} element={<AllAuthors/>}/>
          <Route path={'/authors/:authorId'} element={<SingleAuthor/>}/>
      </Routes>
    </div>
  );
};

export default App;
