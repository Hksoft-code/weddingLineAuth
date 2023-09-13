import Button from "./Button";

const SigninBtns = ({ label, handlClick, icon, disabled }) => {
  return (
    <span>
      {icon}
      <Button
        label={label}
        btn="border border-1 rounded-md p-3 m-3 text-center w-[300px] btn-content"
        handlClick={handlClick}
        disabled={disabled}
      />
    </span>
  );
};

export default SigninBtns;
