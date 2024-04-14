// Avatar.js
import React from 'react';

const Avatar = ({ username }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

  return (
    <img src={avatarUrl} alt="Avatar" className="rounded-full w-20 h-20 mx-auto" />
  );
};

export default Avatar;
