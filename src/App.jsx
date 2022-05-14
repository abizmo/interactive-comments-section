import React from 'react';

import Comments from './containers/Comments';
import { CommentsProvider } from './context/comments';
import Theme from './theme';

function App() {
  return (
    <Theme>
      <CommentsProvider>
        <Comments />
      </CommentsProvider>
    </Theme>
  );
}

export default App;
