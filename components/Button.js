const Button = ({ label, btn, handleClick, disabled }) => {
  return (
    <button
      type="button"
      className={btn}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
