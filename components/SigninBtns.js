import Button from "./Button";

const SigninBtns = ({ label, btn, handlClick, icon }) => {
  return (
    <span>
      {icon}
      <Button
        label={label}
        btn="border border-1 rounded-md p-3 m-3 text-center w-[300px] btn-content"
        handlClick={handlClick}
      />
    </span>
  );
};

export default SigninBtns;
