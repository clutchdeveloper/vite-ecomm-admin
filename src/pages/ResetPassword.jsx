import React from "react";
import CustomInput from "../components/CustomInput";

function ResetPassword() {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">Please enter your new password</p>
        <form action="">
          <CustomInput type="password" id="pass" label="New Password" />
          <CustomInput type="password" id="confirmpass" label="Confirm Password" />

          <button type="submit" className="border-0 px-3 py-2 text-white fw-bold w-100" style={{ background: "#ffd333" }}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
