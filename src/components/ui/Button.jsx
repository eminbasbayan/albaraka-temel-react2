import './Button.css';

const Button = (props) => {
  const classNames = `btn btn-${props.color} ${props.link && 'btn-link'} btn-${
    props.size
  }`;

  return (
    <button className={classNames} disabled={props.disabled}>
      {props.title ? props.title : 'Button'}
    </button>
  );
};

export default Button;
