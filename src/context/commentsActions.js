export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_REPLY = 'CREATE_REPLY';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_REPLY = 'DELETE_REPLY';
export const SET_COMMENTS = 'SET_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_REPLY = 'UPDATE_REPLY';

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  payload: comment,
});

export const createReply = (content, commentId, replyingTo) => ({
  type: CREATE_REPLY,
  payload: { content, commentId, replyingTo },
});

export const deleteComment = (idComment) => ({
  type: DELETE_COMMENT,
  payload: idComment,
});

export const deleteReply = (idComment, idReply) => ({
  type: DELETE_REPLY,
  payload: { idComment, idReply },
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const updateComment = (idComment, comment) => ({
  type: UPDATE_COMMENT,
  payload: { idComment, comment },
});

export const updateReply = (idComment, idReply, comment) => ({
  type: UPDATE_REPLY,
  payload: { idComment, idReply, comment },
});
