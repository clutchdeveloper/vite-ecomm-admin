import React, { useState } from "react";
import ReactQuill from "react-quill";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function AddProduct() {
  const [desc, setDesc] = useState();

  const handleDesc = (e) => {};

  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Enter Product Title" />
          <ReactQuill theme="snow" value={desc} onChange={(e) => setDesc(e.target.value)} />

          <input type="number" placeholder="" />
          <select name="" className="">
            <option value="">Select Brand</option>
          </select>
          <select name="" className="">
            <option value="">Select Category</option>
          </select>
          <select name="" className="">
            <option value="">Select Color</option>
          </select>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
          </Dragger>
          <button type="submit" className="px-4 py-2 mt-10 bg-green-600 text-white text-sm rounded-sm font-semibold">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
