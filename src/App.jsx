import React, { useState } from 'react';

import { ReactComponent as Delete } from './assets/icons/delete.svg';
import { ReactComponent as Edit } from './assets/icons/edit.svg';
import { ReactComponent as Reply } from './assets/icons/reply.svg';
import Button from './components/Button';
import Voting from './components/Voting';
import Theme from './theme';

function doNothing() {}

function App() {
  const [votes, setVotes] = useState(0);

  return (
    <Theme>
      <h1>Interactive comments section</h1>
      <Button
        color="primary"
        icon={Reply}
        label="Reply"
        onClick={doNothing}
      />
      <Button
        color="secondary"
        icon={Delete}
        label="Delete"
        onClick={doNothing}
      />
      <Button
        color="primary"
        icon={Edit}
        label="Edit"
        onClick={doNothing}
      />
      <Button
        color="primary"
        label="Send"
        onClick={doNothing}
        size="small"
        variant="contained"
      />
      <Button
        label="No, cancel"
        onClick={doNothing}
        size="big"
        variant="contained"
      />
      <Button
        color="secondary"
        label="Yes, delete"
        onClick={doNothing}
        size="big"
        variant="contained"
      />
      <Voting onVote={setVotes} votes={votes} />
    </Theme>
  );
}

export default App;
