import { SET_COMMENTS } from './commentsActions';

function commentsReducer(state, action) {
  switch (action.type) {
    case SET_COMMENTS: {
      return { ...action.payload };
    }

    default: {
      return state;
    }
  }
}

export default commentsReducer;
