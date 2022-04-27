import React from 'react';
import PropTypes from 'prop-types';

const PATH = `${process.env.PUBLIC_URL}/avatars/`;

function Avatar({ user }) {
  return (
    <picture style={{ aspectRatio: 1, width: '2rem' }}>
      <source srcSet={`${PATH}${user}.webp`} type="image/webp" />
      <img style={{ width: '100%' }} src={`${PATH}${user}.png`} alt={user} />
    </picture>
  );
}

Avatar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Avatar;
