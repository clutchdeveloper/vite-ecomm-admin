import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize, MdPhonelink } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { ImBooks } from "react-icons/im";
import { IoIosArrowForward, IoIosArrowDown, IoMdClose } from "react-icons/io";

function SiderNavbar({ open, toggler }) {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);

  return (
    <div className={`${open ? "hidden" : "block"} md:block ${open ? "min-w-[17rem]" : "min-w-[17rem]"} bg-[rgb(42,49,64)] text-white transition-all h-screen delay-150`}>
      <div className="shadow-md h-[48px] flex items-center px-7 justify-end cursor-pointer">
        <span onClick={() => toggler(!open)} className="md:hidden">
          <IoMdClose className="text-xl" />
        </span>
      </div>

      <div className="p-6 text-center  flex flex-col space-y-2">
        <h4>Admin Panel</h4>
        <p className="text-xs">E-Commerce View</p>
      </div>

      <ul className="flex flex-col space-y-2">
        <Link to="/admin">
          <li className=" py-3 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
            <span className="px-4 text-center text-xl">
              <MdOutlineDashboardCustomize />
            </span>
            <p>Dashboard</p>
          </li>
        </Link>
        <Link to="/admin/customers">
          <li className=" py-3 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
            <span className="px-4 text-center text-lg">
              <BsFillPeopleFill />
            </span>
            <p>Customers</p>
          </li>
        </Link>
        <div className="flex flex-col" onClick={() => setDrop(!drop)}>
          <li className=" py-3 text-xs flex  space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
            <span className="px-4 text-center text-lg">
              <MdOutlineCategory />
            </span>
            <div className="flex justify-between items-center w-full pr-8">
              <p>Catalog</p>
              {!drop ? <IoIosArrowForward className="text-md" /> : <IoIosArrowDown className="text-md" />}
            </div>
          </li>
          {drop && (
            <ul className="w-full transition-all delay-100">
              <Link to="/admin/add-product">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)]  cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Add product</p>
                </li>
              </Link>
              <Link to="/admin/product-list">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Product list</p>
                </li>
              </Link>
              <Link to="/admin/add-brand">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Brand</p>
                </li>
              </Link>
              <Link to="/admin/brand-list">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Brand list</p>
                </li>
              </Link>
              <Link to="/admin/add-category">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Category</p>
                </li>
              </Link>
              <Link to="/admin/category-list">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Category list</p>
                </li>
              </Link>
              <Link to="/admin/add-color">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Color</p>
                </li>
              </Link>
              <Link to="/admin/color-list">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Color list</p>
                </li>
              </Link>
            </ul>
          )}
        </div>
        <Link to="/admin/orders">
          <li className=" py-3 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
            <span className="px-4 text-center text-lg">
              <LuClipboardList />
            </span>
            <p>Orders</p>
          </li>
        </Link>
        <div className="flex flex-col" onClick={() => setDrop1(!drop1)}>
          <li className=" py-3 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
            <span className="px-4 text-center text-lg">
              <ImBooks />
            </span>
            <div className="flex justify-between items-center w-full pr-8">
              <p>Blogs</p>
              {!drop1 ? <IoIosArrowForward className="text-md" /> : <IoIosArrowDown className="text-md" />}
            </div>
          </li>
          {drop1 && (
            <ul className="w-full">
              <Link to="/admin/add-blog">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Add blog</p>
                </li>
              </Link>
              <Link to="/admin/blog-list">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Blog list</p>
                </li>
              </Link>
              <Link to="/admin/add-blog-cat">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Add blog category</p>
                </li>
              </Link>
              <Link to="/admin/blog-cat-list">
                <li className="py-3 pl-4 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                  <span className="px-4 text-center">##</span>
                  <p>Blog category list</p>
                </li>
              </Link>
            </ul>
          )}
        </div>
        <Link to="/admin/enquiries">
          <li className=" py-3 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
            <span className="px-4 text-center text-lg">
              <MdPhonelink />
            </span>
            <p>Enquiries</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SiderNavbar;
