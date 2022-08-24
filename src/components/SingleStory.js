import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchSingleStory } from "../features/stories/singleStorySlice";
// import { fetchSingleStoryAsync } from "../features/stories/singleStorySlice";
// import { selectSingleStory } from "../features/stories/singleStorySlice";

const fakeStory = {
    title: 'Ships',
    id: 2,
    content: "A ship in port is safe,\nbut that's not what ships are built for",
    author: {
      id: 1,
      name: 'Grace Hopper'
    },
    comments: [
      {
        id: 4,
        content: 'I like ships!',
        author: {
          id: 2,
          name: 'Alan Turing',
          imageUrl: 'default-author.png'
        }
      }
    ]
  }

const SingleStory = () => {
    const params = useParams()
    const story = useSelector((state) => state.singleStory)
    const dispatch = useDispatch()
    React.useEffect(() => {
        let id = +params.storyId
        dispatch(fetchSingleStory(id));
    },[])

//   const dispatch = useDispatch();
//   const params = useParams();
//   const story = useSelector(selectSingleStory);
//   React.useEffect(() => {
//     let id = +params.storyId;
//     dispatch(fetchSingleStoryAsync(id));
//   },[dispatch])
    // let paragraphs = fakeStory.content.split('\n')

    // return(     
    //     <div id='single-story' className='column'>
    //         <h1>{story.title}</h1>
    //         {/* {story.content ? 
    //           story.content.split('\n').map((paragraph,idx) => <p key={idx}>{paragraph}</p>)
    //           : <p>story.content</p>} */}
    //         <p>{story.content}</p>
    //         <h3>Responses:</h3>
    //         <div id='comments'>
    //             {/* {fakeStory.comments.map((comment,idx) => {
    //                 return(
    //                     <div className='comment row' key={idx}>
    //                         <img src={comment.author.imageUrl} />
    //                         <div className='column'>
    //                             <a>
    //                             <h5>{comment.author.name}</h5>
    //                             </a>
    //                             <div>{comment.content}</div>
    //                         </div>
    //                     </div>
    //                 )
    //             })} */}
    //         </div>
    //     </div>
    // )

    return (
        <div id='single-story' className='column'>
            <h1>{story.title}</h1>
            {/* {fakeStory.content.split('\n').map((paragraph,idx) => {
                return(
                    <p key={idx}>{paragraph}</p>
                )
            })} */}
            {story.content ? story.content.split('\n').map((paragraph,idx) => {
                return(<p key={idx}>{paragraph}</p>)
            }) : <p>{story.content}</p>}
            <h3>Responses:</h3>
            <div id='comments'>
                {/* {fakeStory.comments.map((comment,idx) => {
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
                    
                })} */}
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
            </div>
        </div>
    )
}

export default SingleStory;