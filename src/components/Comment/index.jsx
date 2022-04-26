import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Reply } from '../../assets/icons/reply.svg';
import Button from '../Button';
import Voting from '../Voting';

function doNothing() {}

const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors['neutral-100']};
  border-radius: .5rem;
  display: grid;
  gap: 1rem;
  grid-template-areas: 
    'header header'
    'info info'
    'votes buttons';
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;

  & > header {
    align-items: center;
    grid-area: header;
    display: flex;
    gap: 1rem;
    line-height: 1.1;
  }

  & > p {
    grid-area: info;
  }

  & > #votes {
    grid-area: votes;
  }

  & > #buttons {
    align-self: center;
    grid-area: buttons;
    justify-self: end;
  }
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  height: 2rem;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors['neutral-800']};
  font-weight: 500;
  text-transform: lowercase;
`;

function index() {
  const [votes, setVotes] = useState(0);

  return (
    <Wrapper>
      <header>
        {/* eslint-disable-next-line global-require */}
        <Avatar src={require('../../assets/images/amyrobson.png')} alt="amyrobson" />
        <Nickname>amyrobson</Nickname>
        <span>1 month ago</span>
      </header>
      <p>
        Impressive! Though it seems the drag feature could be improved.
        But overall it looks incredible. You’ve nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
      <div id="votes">
        <Voting onVote={setVotes} votes={votes} />
      </div>
      <div id="buttons">
        <Button
          color="primary"
          icon={Reply}
          label="Reply"
          onClick={doNothing}
        />
      </div>
    </Wrapper>
  );
}

export default index;
