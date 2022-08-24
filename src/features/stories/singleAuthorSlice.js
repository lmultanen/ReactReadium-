import axios from 'axios';

const SET_SINGLE_AUTHOR = 'SET_SINGLE_AUTHOR';

const initialState = {
    info: {},
    comments: [],
    stories: []
  }

export const setSingleAuthor = (author, comments, stories) => {
    return {
        type: SET_SINGLE_AUTHOR,
        author,
        comments,
        stories
    }
}

export const fetchSingleAuthor = (id) => {
    return async (dispatch) => {
        try {
            const author = await axios.get(`/api/authors/${id}`)
            const comments = await axios.get(`/api/authors/${id}/comments`)
            const stories = await axios.get(`/api/authors/${id}/stories`)
            dispatch(setSingleAuthor(author.data, comments.data, stories.data))
            // console.log('logging author', data)
        } catch (err) {
            console.log(err)
        }
    }
}


  export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_AUTHOR:
            const newState = {
                info: action.author,
                comments: action.comments,
                stories: action.stories
            }
            return newState;
        default:
            return state;
    }
}