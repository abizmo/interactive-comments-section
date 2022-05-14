import React, {
  createContext, useCallback, useContext, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';

import commentsReducer from './commentsReducer';

const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const [state, dispatchReducer] = useReducer(commentsReducer, {});

  const dispatch = useCallback(
    (action) => dispatchReducer(action),
    [dispatchReducer],
  );

  const value = useMemo(() => ({
    state,
    dispatch,
  }), [state, dispatch]);

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
}

function useComments() {
  const context = useContext(CommentsContext);

  if (context === undefined) {
    throw new Error('useComments must be used within a CommentsProvider');
  }
  return context;
}

CommentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CommentsProvider, useComments };
