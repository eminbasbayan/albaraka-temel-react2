import React from 'react';

const ProductInput = ({
  text,
  type = 'text',
  placeholder,
  name,
  handleChange,
  value
}) => {
  return (
    <label>
      {text}:
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </label>
  );
};

export default ProductInput;
