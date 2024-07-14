
import ButtonSvg from '../assets/svg/ButtonSvg'; // Adjust import path as per your project structure

const Button = ({ className, href, onClick, white, children }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    white ? 'text-n-8' : 'text-n-1'
  } ${className || ''}`;

  return (
    <ButtonSvg href={href} white={white}>
      <span className={classes} onClick={onClick}>
        {children}
      </span>
    </ButtonSvg>
  );
};

export default Button;
