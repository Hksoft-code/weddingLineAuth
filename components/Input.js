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
    <div className="mb-1 input-content form-content">
      {icon}
      <input
        type={type}
        name={name_}
        className="p-2 m-2 border-0 outline-none rounded-sm"
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
