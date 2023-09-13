import Accounts from "@/components/Accounts";
import Button from "@/components/Button";
import FormComponent from "@/components/FormComponent";
import Input from "@/components/Input";
import LinkComponent from "@/components/Link";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const Login = () => {
  return (
    <FormComponent>
      <div className="p-2 m-2 mx-auto flex flex-col justify-center items-center">
        <div className="m-2">
          <h2>Log into your account</h2>
          <p style={{ color: "rgba(0, 0, 0, .4)", fontSize: 13 }}>
            Don't have an account?{" "}
            <LinkComponent
              class_name="text-red-500 font-semibold text-base"
              label="Sign up"
              route="/signup"
            />
          </p>
        </div>
        <Accounts />
        <form
          className="mt-4 pt-4 w-full"
          style={{ borderTop: "1px solid rgba(0, 0, 0, .3)" }}
        >
          <p className="mb-2 text-center">Or login with your email</p>
          <Input
            placeholder="Email"
            icon={
              <AiOutlineMail
                size={20}
                className="absolute m-1 ml-2 mt-[14px]"
                fill="rgba(0, 0, 0, .6)"
              />
            }
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .2)",
              width: "100%",
              paddingLeft: 25,
            }}
            type="email"
          />
          <Input
            placeholder="Password"
            icon={
              <AiOutlineLock
                size={20}
                className="absolute m-1 ml-2 mt-[12px]"
                fill="rgba(0, 0, 0, .6)"
              />
            }
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .2)",
              width: "100%",
              paddingLeft: 25,
            }}
            type="password"
          />
          <Button
            btn="bg-red-500 p-3 text-white font-semibold rounded-md mt-2 m-2 w-full"
            label="Log In"
          />
        </form>
      </div>
    </FormComponent>
  );
};

export default Login;
