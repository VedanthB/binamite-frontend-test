import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../global/Input";

const initUserData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [userData, setUserData] = useState(initUserData);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="w-[450px]  ml-[600px] mt-[200px] mb-[200px] rounded-2xl shadow-md bg-white py-10 px-12 ">
      <div className="gap-3 flex flex-col mb-10">
        <p className="uppercase font-normal text-[#97999B]  leading-4 text-sm">
          Try something here
        </p>
        <h3 className="font-semibold text-5xl">Sign up to Binamite</h3>
        <h6 className="font-normal text-[#97999B]  leading-4 text-md">
          Already a member?{" "}
          <Link className="hover:underline text-[#574AE2]" to="login">
            Login
          </Link>{" "}
        </h6>
      </div>

      <div className="mb-6">
        <Input
          label="email"
          onChange={() => {
            setUserData();
          }}
          value={userData.email}
          placeholder="enter email"
          errorMessage={errorMessage}
        />
      </div>
      <div className="mb-6">
        <Input
          label="password"
          onChange={() => {
            setUserData();
          }}
          value={userData.password}
          placeholder="enter password"
          errorMessage={errorMessage}
        />
      </div>

      <div className="flex flex-col gap-4">
        <button className="py-4 px-3 bg-[#1A1A1A] text-white flex justify-center items-center w-full rounded-2xl font-semibold ">
          Create Account
        </button>

        <button className="py-4 px-3 border border-[#E5E5E5] text-black flex justify-center items-center w-full rounded-2xl font-semibold ">
          SignUp with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
