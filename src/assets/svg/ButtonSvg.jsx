import React from 'react';

const ButtonSvg = ({ href, white, children }) => {
  const buttonStyle = {
    background: white
      ? 'linear-gradient(45deg, #89F9E8, #FACB7B)'
      : 'linear-gradient(45deg, #D87CEE, #9099FC)',
    color: white ? '#000' : '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const buttonHoverStyle = {
    backgroundColor: white ? '#3498db' : '#3498db',
    color: '#fff',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

export default ButtonSvg;
