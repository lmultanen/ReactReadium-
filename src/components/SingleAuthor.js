import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchSingleAuthor } from "../features/stories/singleAuthorSlice";
import CommentsList from "./CommentsList";
import AllAuthors from "./AllAuthors";
import AllStories from "./AllStories";

const SingleAuthor = () => {
    const params = useParams()
    const author = useSelector(state => state.singleAuthor)
    const dispatch = useDispatch()
    React.useEffect(() => {
        let id = +params.authorId;
        dispatch(fetchSingleAuthor(id))
    },[])
    return(
        <div id='single-author' className="column">
            <div id='single-author-detail' className="row">
                <div className="column mr1">
                    <h1>{author.info.name}</h1>
                    <p> {author.info.bio}</p>
                </div>
                <img src={author.info.imageUrl}/>
            </div>
            <hr/>
            <div>
                <h4>STORIES</h4>
                <AllStories author={true}/>
                <h4>COMMENTS</h4>
                <CommentsList author={true}/>
            </div>
        </div>
    )
}

export default SingleAuthor