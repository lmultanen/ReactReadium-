import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchSingleStory } from "../features/stories/singleStorySlice";
import CommentsList from "./CommentsList";

const SingleStory = () => {
    const params = useParams()
    const story = useSelector((state) => state.singleStory)
    const dispatch = useDispatch()
    React.useEffect(() => {
        let id = +params.storyId
        dispatch(fetchSingleStory(id));
    },[])

    return (
        <div id='single-story' className='column'>
            <h1>{story.title}</h1>
            {story.content ? story.content.split('\n').map((paragraph,idx) => {
                return(<p key={idx}>{paragraph}</p>)
            }) : <p>{story.content}</p>}
            <h3>Responses:</h3>
            <CommentsList/>
        </div>
    )
}

export default SingleStory;