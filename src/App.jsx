import React from 'react';

import { ReactComponent as Delete } from './assets/icons/delete.svg';
import { ReactComponent as Edit } from './assets/icons/edit.svg';
import { ReactComponent as Reply } from './assets/icons/reply.svg';
import Button from './components/Button';
import Theme from './theme';

function doNothing() {}

function App() {
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
    </Theme>
  );
}

export default App;
