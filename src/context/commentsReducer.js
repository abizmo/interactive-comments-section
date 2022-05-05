import { DELETE_COMMENT, DELETE_REPLY, SET_COMMENTS } from './commentsActions';

function commentsReducer(state, action) {
  switch (action.type) {
    case SET_COMMENTS: {
      return { ...action.payload };
    }

    case DELETE_COMMENT: {
      return { ...state, comments: state.comments.filter((c) => c.id !== action.payload) };
    }

    case DELETE_REPLY: {
      const comments = state.comments
        .map((c) => (c.id === action.payload.idComment
          ? { ...c, replies: c.replies.filter((r) => r.id !== action.payload.idReply) }
          : c));

      return {
        ...state,
        comments,
      };
    }

    default: {
      return state;
    }
  }
}

export default commentsReducer;
