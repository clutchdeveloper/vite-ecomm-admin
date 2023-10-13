import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Super Admin</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput type="text" placeholder="Email Address" id="email" label="Email address" />

          <CustomInput type="password" placeholder="Password" id="pass" label="Password" />
          <div className="mb-3 text-end">
            <Link to="forgot-password">Forgot Password</Link>
          </div>
          <Link to="/admin" type="submit" className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none" style={{ background: "#ffd333" }}>
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
