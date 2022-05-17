import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Picture = styled.picture`
  aspect-ratio: 1;
  width: 2rem;

  @supports not (aspect-ratio: 1) {
    &::before {
      float: left;
      padding-top: 100%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
`;
function Avatar({ user }) {
  return (
    <Picture>
      <source srcSet={`${process.env.PUBLIC_URL}/${user.image.webp}`} type="image/webp" />
      <img style={{ width: '100%' }} src={`${process.env.PUBLIC_URL}/${user.image.png}`} alt={user.username} />
    </Picture>
  );
}

Avatar.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.shape().isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
