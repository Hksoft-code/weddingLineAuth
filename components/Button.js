const Button = ({ label, btn, handleClick }) => {
  return (
    <button type="button" className={btn} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
