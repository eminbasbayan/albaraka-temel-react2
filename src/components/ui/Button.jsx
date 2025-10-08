import './Button.css';

const Button = ({
  color,
  link,
  size,
  disabled,
  onClick,
  children,
  addClass,
}) => {
  const classNames = `btn btn-${color} ${
    link && 'btn-link'
  } btn-${size} ${addClass}`;

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
