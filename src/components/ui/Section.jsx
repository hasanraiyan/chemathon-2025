import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  background = 'bg-white dark:bg-gray-900',
  padding = 'py-16'
}) => {
  return (
    <section id={id} className={`${background} ${padding} ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;