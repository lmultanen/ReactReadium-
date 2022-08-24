import React from "react";
import { useSelector } from "react-redux";

const CommentsList = (props) => {
    const comments = useSelector(state => props.author ? state.singleAuthor.comments : state.singleStory.comments)
    return(
        <div id='comments'>
                {comments && comments.length ?
                    comments.map((comment,idx) => {
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
            </div>
    )
}

export default CommentsList;