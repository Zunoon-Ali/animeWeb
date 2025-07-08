import React from 'react';

function Button({ title, id, leftIcon, containerClass }) {
  return (
    <button
      id={id}
      className={`group relative z-30 w-fit cursor-pointer overflow-hidden mt-5 rounded-lg px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon} {title}

      
    </button>

  );
}

export default Button;
