import React from 'react';
import PropTypes from 'prop-types';

function Avatar({ user }) {
  return (
    <picture style={{ aspectRatio: 1, width: '2rem' }}>
      <source srcSet={`${process.env.PUBLIC_URL}/${user.image.webp}`} type="image/webp" />
      <img style={{ width: '100%' }} src={`${process.env.PUBLIC_URL}/${user.image.png}`} alt={user.username} />
    </picture>
  );
}

Avatar.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.shape().isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
