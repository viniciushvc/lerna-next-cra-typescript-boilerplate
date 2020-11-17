import React from 'react';

const Button: React.FC<any> = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
  );
}

export default Button;