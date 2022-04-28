import React from 'react';

import Comment from './components/Comment';
import Theme from './theme';

const comment = {
  id: 1,
  author: 'amyrobson',
  date: '1 month ago',
  body: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
  votes: 0,
};

function App() {
  return (
    <Theme>
      <Comment
        author={comment.author}
        date={comment.date}
        body={comment.body}
        likes={comment.votes}
        you
      />
    </Theme>
  );
}

export default App;
