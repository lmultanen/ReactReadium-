import axios from 'axios';

const SET_SINGLE_STORY = 'SET_SINGLE_STORY';

export const setSingleStory = (singleStory) => {
    return {
        type: SET_SINGLE_STORY,
        singleStory
    }
}

export const fetchSingleStory = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`/api/stories/${id}`)
            dispatch(setSingleStory(data))
        } catch (err) {
            console.log(err)
        }
    }
}

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_STORY:
            return action.singleStory;
        default:
            return state;
    }
}