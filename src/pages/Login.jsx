import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="my-5 min-w-[350px] bg-white rounded-sm mx-auto p-3 flex flex-col space-y-2">
        <h3 className="text-center text-lg font-semibold">Admin</h3>
        <p className="text-center">Login as Administrator.</p>
        <form className="">
          <CustomInput type="text" placeholder="Email Address" id="email" i_class="p-2 outline-0 border  rounded-sm w-full focus:bg-transparent " />

          <CustomInput type="password" placeholder="Password" id="pass" i_class="p-2 outline-0 border  rounded-sm w-full focus:bg-transparent " />
          <div className="mb-3 text-end">
            <Link to="forgot-password">
              <p className="text-xs text-blue-600 underline">Forgot Password?</p>
            </Link>
          </div>
          <Link to="/admin" type="submit" className="border-0 w-full px-3 py-2 text-white text-center text-sm rounded-sm" style={{ background: "#ffd333" }}>
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
