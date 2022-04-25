import React from 'react';
import Theme from './theme';

import { ReactComponent as Delete } from './assets/icons/delete.svg';
import { ReactComponent as Edit } from './assets/icons/edit.svg';
import { ReactComponent as Reply } from './assets/icons/reply.svg';
import Button from './components/Button';
import Theme from './theme';

function App() {
  return (
    <Theme>
      <h1>Interactive comments section</h1>
      <Button
        color="primary"
        icon={Reply}
        label="Reply"
        onClick={console.log}
      />
      <Button
        color="secondary"
        icon={Delete}
        label="Delete"
        onClick={console.log}
      />
      <Button
        color="primary"
        icon={Edit}
        label="Edit"
        onClick={console.log}
      />
      <Button
        color="primary"
        label="Send"
        onClick={console.log}
        size="small"
        variant="contained"
      />
      <Button
        label="No, cancel"
        onClick={console.log}
        size="big"
        variant="contained"
      />
      <Button
        color="secondary"
        label="Yes, delete"
        onClick={console.log}
        size="big"
        variant="contained"
      />
    </Theme>
  );
}

export default App;
