import React from 'react';

const Container = ({ children, className = '', maxWidth = 'max-w-7xl' }) => {
  return (
    <div className={`${maxWidth} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;