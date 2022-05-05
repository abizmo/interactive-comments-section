export const SET_COMMENTS = 'SET_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_REPLY = 'DELETE_REPLY';

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const deleteComment = (idComment) => ({
  type: DELETE_COMMENT,
  payload: idComment,
});

export const deleteReply = (idComment, idReply) => ({
  type: DELETE_REPLY,
  payload: { idComment, idReply },
});
