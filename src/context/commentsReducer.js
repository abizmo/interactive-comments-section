import * as actions from './commentsActions';

function commentsReducer(state, action) {
  switch (action.type) {
    case actions.CREATE_COMMENT: {
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

    case actions.CREATE_REPLY: {
      const newReply = {
        id: parseInt(Math.random() * 1000, 10),
        content: action.payload.content,
        createdAt: '1 minute ago',
        score: 0,
        replyingTo: action.payload.replyingTo,
        user: { ...state.currentUser },
      };

      const newComments = state.comments.map((c) => (c.id !== action.payload.commentId
        ? c
        : { ...c, replies: [...c.replies, newReply] }));

      return { ...state, comments: newComments };
    }

    case actions.DELETE_COMMENT: {
      return { ...state, comments: state.comments.filter((c) => c.id !== action.payload) };
    }

    case actions.DELETE_REPLY: {
      const comments = state.comments
        .map((c) => (c.id === action.payload.idComment
          ? { ...c, replies: c.replies.filter((r) => r.id !== action.payload.idReply) }
          : c));

      return {
        ...state,
        comments,
      };
    }

    case actions.SET_COMMENTS: {
      return { ...action.payload };
    }

    case actions.UPDATE_COMMENT: {
      return {
        ...state,
        comments: state.comments.map((c) => (c.id === action.payload.idComment
          ? { ...c, content: action.payload.comment }
          : c)),
      };
    }

    case actions.UPDATE_REPLY: {
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
