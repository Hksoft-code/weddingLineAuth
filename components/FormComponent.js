import Image from "next/image";
import LinkComponent from "./Link";
import weddingLogo from "@/public/weddingline.jpeg";

const FormComponent = ({ children, style }) => {
  return (
    <div className="flex flex-col p-0 m-3 rounded-md w-[65%] mx-auto">
      <span className="flex mb-4 mx-auto">
        <Image src={weddingLogo} height={60} width={70} alt="" />
        <LinkComponent
          label="weddingline.in"
          route="#/home"
          class_name="font-bold text-2xl uppercase text-red-500 hover:text-red-800 mt-2"
        />
      </span>
      <div
        className="flex rounded-md"
        style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, .2)" }}
      >
        <div className="login-background w-[45%]"></div>
        <div style={style} className="mt-4 mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
