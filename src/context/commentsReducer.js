import {
  CREATE_COMMENT, DELETE_COMMENT, DELETE_REPLY, SET_COMMENTS, UPDATE_COMMENT, UPDATE_REPLY,
} from './commentsActions';

function commentsReducer(state, action) {
  switch (action.type) {
    case CREATE_COMMENT: {
      const comment = {
        id: parseInt(Math.random() * 1000, 10),
        content: action.payload,
        createdAt: '1 minute ago',
        score: 0,
        user: { ...state.currentUser },
        replies: [],
      };
      const comments = [...state.comments, comment];

      return { ...state, comments };
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

    case SET_COMMENTS: {
      return { ...action.payload };
    }

    case UPDATE_COMMENT: {
      return {
        ...state,
        comments: state.comments.map((c) => (c.id === action.payload.idComment
          ? { ...c, content: action.payload.comment }
          : c)),
      };
    }

    case UPDATE_REPLY: {
      return {
        ...state,
        comments: state.comments
          .map((c) => (c.id !== action.payload.idComment ? c
            : {
              ...c,
              replies: c.replies.map((r) => (r.id !== action.payload.idReply ? r
                : { ...r, content: action.payload.comment })),
            })),
      };
    }

    default: {
      return state;
    }
  }
}

export default commentsReducer;
