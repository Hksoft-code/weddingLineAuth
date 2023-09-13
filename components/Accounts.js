import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import SigninBtns from "./SigninBtns";

const Accounts = ({ disabled }) => {
  return (
    <>
      <SigninBtns
        label="Signin with google"
        icon={<FcGoogle size={25} className="absolute m-5 mt-6" />}
        disabled={disabled}
      />
      <SigninBtns
        label="Signin with Facebook"
        icon={
          <FaFacebookF size={25} className="absolute m-5 mt-6" fill="blue" />
        }
        disabled={disabled}
      />
      <SigninBtns
        label="Signin with Apple"
        icon={<SiApple size={25} className="absolute m-5 mt-6" />}
        disabled={disabled}
      />
    </>
  );
};

export default Accounts;
