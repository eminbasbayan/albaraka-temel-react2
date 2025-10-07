import './Button.css';

const Button = (props) => {
    console.log(props);
    
  const classNames = `btn btn-${props.color} ${props.link && 'btn-link'} btn-${
    props.size
  }`;

  return (
    <button className={classNames} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
