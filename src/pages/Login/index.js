import React from "react";
import { Header, LoginForm } from "../../components";

const Login = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-screen h-full min-w-full">
      <Header />

      <div className="flex">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
