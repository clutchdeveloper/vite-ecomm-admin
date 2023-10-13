import React from "react";
import { Link } from "react-router-dom";

const menu = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Customer", link: "/customer" },
  { title: "Catalog", link: "/catalog" },
  { title: "Orders", link: "/orders" },

  { title: "Blogs", link: "/blog" },
];

function SiderNavbar({ open }) {
  return (
    <div className={`hidden md:block ${open ? "min-w-[17rem]" : ""} bg-[rgb(42,49,64)] text-white`}>
      <div className="shadow-md h-[48px] flex items-center px-7">{/* <img src="/" alt="b" /> */}</div>
      {open ? (
        <div className="p-6 text-center flex flex-col space-y-2">
          <h4>Martbay</h4>
          <p className="text-xs">Navigate with Confidence</p>
        </div>
      ) : (
        <div className="p-6 text-center flex flex-col space-y-2">
          <h4>M</h4>
        </div>
      )}

      <ul className="flex flex-col space-y-2">
        {menu.map((item, i) => {
          const {title, link} = item
          return (
            <Link to={`${item.link}`}>
              <li key={i} className=" py-3 text-xs flex space-x-2 hover:bg-[rgb(38,43,54)] transition-all delay-100 cursor-pointer">
                <span className="px-4 text-center">##</span>
                {open ? <p>{title}</p> : ""}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SiderNavbar;
