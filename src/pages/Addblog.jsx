import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
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

function Addblog() {
  const [desc, setDesc] = useState();

  const handleDesc = (e) => {};
  return (
    <div>
      <h3 className="mb-4">Add Blog</h3>

      <div className="bg-white p-2 rounded-sm shadow-md">
        <form>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
          </Dragger>
          <div className="mt-3">
            <h3>Enter Blog title</h3>
          </div>
          <CustomInput type="text" />
          <select name="" id="">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill theme="snow" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <button type="submit" className="px-4 py-2 mt-10 bg-green-600 text-white text-sm rounded-sm font-semibold">
            Add blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addblog;
