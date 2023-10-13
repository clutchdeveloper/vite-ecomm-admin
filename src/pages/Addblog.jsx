import CustomInput from "../components/CustomInput";

import { useState } from "react";

function Addblog() {
  const [desc, setDesc] = UseState();

  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4">Add Blog</h3>
      <div className="">
        <form>
          <CustomInput type="text" label="Enter Blog title" />
          <select name="" id="">
            <option value="">Select Blog Category</option>
          </select>
          {/* <ReactQuill theme="snow" value={(e) => handleDesc(e.target.value)} onChange={setDesc} />; */}
        </form>
      </div>
    </div>
  );
}

export default Addblog;
