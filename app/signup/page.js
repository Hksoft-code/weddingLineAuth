"use client";

import React from "react";
import FormComponent from "@/components/FormComponent";
import Input from "@/components/Input";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { CgCalendarDates } from "react-icons/cg";
import { BsPhone } from "react-icons/bs";
import Button from "@/components/Button";
import LinkComponent from "@/components/Link";

const Signup = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    country: "",
    city: "",
    date: "",
    phoneNum: "",
    gender: "",
  });

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  return (
    <FormComponent>
      <div className="mt-1 pt-6">
        <h2 className="font-semibold mb-4 text-xl text-center">
          Create a free account here
        </h2>
        <Input
          placeholder="Name and Surname"
          icon={
            <AiOutlineUser
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
          type="text"
        />
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
        <Input
          placeholder="Event location(City)"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, .2)",
            width: "100%",
            paddingLeft: 5,
          }}
          type="text"
        />
        <Input
          placeholder="Country"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, .2)",
            width: "100%",
            paddingLeft: 5,
          }}
          type="text"
        />
        <Input
          placeholder="Event date"
          icon={
            <CgCalendarDates
              size={20}
              className="absolute m-1 ml-2 mt-[15px]"
              fill="rgba(0, 0, 0, .6)"
            />
          }
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, .2)",
            width: "100%",
            paddingLeft: 25,
          }}
          type="date"
        />
        <Input
          placeholder="Phone number"
          icon={
            <BsPhone
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
          type="number"
        />
        <label>Gender</label>
        <select className="p-1 outline-none">
          <option disabled={true}>Male</option>
          <option disabled={true}>Female</option>
          <option disabled={true}>Other</option>
        </select>
        <br />
        <p className="text-sm mt-3 mb-4" style={{ color: "rgba(0, 0, 0, .4)" }}>
          By clicking the signup button, you agree to <br /> the terms of use of
          wedding line
        </p>
        <Button
          btn="mb-4 p-3 w-[300px] bg-red-500 text-center rounded-md outline-none font-semibold text-white hover:opacity-50"
          label="Sign up"
        />
        <p className="mb-6 text-center">
          Already have an account?{" "}
          <LinkComponent
            class_name="text-semibold text-red-500"
            label="Login"
            route="/"
          />
        </p>
      </div>
    </FormComponent>
  );
};

export default Signup;
