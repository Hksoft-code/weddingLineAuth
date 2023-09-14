import Button from "./Button";

const SigninBtns = ({ label, handlClick, icon, disabled }) => {
  return (
    <span>
      {icon}
      <Button
        label={label}
        btn="border border-1 rounded-md p-3 m-3 text-center input-content btn-content text-white lg:text-black"
        handlClick={handlClick}
        disabled={disabled}
      />
    </span>
  );
};

export default SigninBtns;
