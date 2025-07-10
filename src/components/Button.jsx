import React from 'react';

function Button({ title, id, leftIcon, containerClass , rightIcon }) {
  return (
    <button
      id={id}
      className={`group relative z-30 w-fit cursor-pointer overflow-hidden rounded-lg  text-black ${containerClass}`}
    >
      {leftIcon} {title} {rightIcon}

      
    </button>

  );
}

export default Button;
