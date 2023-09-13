const Input = ({
  icon,
  type,
  name_,
  style,
  value,
  handleChange,
  placeholder,
  required,
}) => {
  return (
    <div className="mb-3">
      {icon}
      <input
        type={type}
        name={name_}
        className="p-1 m-2 border-0 outline-none"
        style={style}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
