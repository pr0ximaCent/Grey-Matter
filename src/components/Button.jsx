import { useState } from 'react';
import ButtonSvg from '../assets/svg/ButtonSvg'; 

const Button = ({ className, href, onClick, white, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseColor = white ? '#333333' : '#000000'; 
  const hoverColor = '#FFFFFF'; 
  const styles = {
    color: isHovered ? hoverColor : baseColor,
    transition: 'color 0.3s ease',
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <ButtonSvg href={href} white={white}>
      <span
        className={`button relative inline-flex items-center justify-center h-11 ${className || ''} font-inter text-large`}
        style={styles}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
    </ButtonSvg>
  );
};

export default Button;
