import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchSingleStory } from "../features/stories/singleStorySlice";
import CommentsList from "./CommentsList";
// import { fetchSingleStoryAsync } from "../features/stories/singleStorySlice";
// import { selectSingleStory } from "../features/stories/singleStorySlice";


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
            {/* <div id='comments'>
                {story.comments && story.comments.length ?
                    story.comments.map((comment,idx) => {
                        return(
                            <div className='comment row' key={idx}>
                                <img src={comment.author.imageUrl} />
                                <div className='column'>
                                    <a>
                                    <h5>{comment.author.name}</h5>
                                    </a>
                                    <div>{comment.content}</div>
                                </div>
                            </div>
                        )
                    })
                    : <></>
                }
            </div> */}
            <CommentsList/>
        </div>
    )
}

export default SingleStory;