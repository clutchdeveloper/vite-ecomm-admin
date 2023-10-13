import React, { useState } from "react";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiFileListFill } from "react-icons/ri";
import { AiOutlinePartition } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { SiAnilist } from "react-icons/si";
import { IoMdColorPalette } from "react-icons/io";
import { MdBrandingWatermark } from "react-icons/md";
import { FaClipboardList, FaBlog } from "react-icons/fa";
import { HiUsers, HiDocumentAdd } from "react-icons/hi";
import { MdDeliveryDining } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";


function MainLayout({toggler }) {
  

  return (
    // <Layout>
    //   <Sider trigger={null} collapsible collapsed={collapsed}>
    //     <div className="logo">
    //       <h2 className="text-white fs-5 text-center py-3 mb-0">
    //         <span className="sm-logo">###</span>
    //         <span className="lg-logo">Admin Pannel</span>
    //       </h2>
    //     </div>
    //     <Menu
    //       theme="dark"
    //       mode="inline"
    //       defaultSelectedKeys={[""]}
    //       onClick={({ key }) => {
    //         if (key === "signout") {
    //         } else {
    //           navigate(key);
    //         }
    //       }}
    //       items={[
    //         {
    //           key: "",
    //           icon: <BiSolidDashboard className="fs-4" />,
    //           label: "Dashboard",
    //         },

    //         {
    //           key: "customers",
    //           icon: <HiUsers className="fs-4" />,
    //           label: "Customers",
    //         },
    //         {
    //           key: "catalog",
    //           icon: <AiOutlinePartition className="fs-4" />,
    //           label: "Catalog",
    //           children: [
    //             {
    //               key: "product",
    //               icon: <BsFillCartPlusFill className="fs-4" />,
    //               label: "Product",
    //             },
    //             {
    //               key: "product-list",
    //               icon: <FaClipboardList className="fs-4" />,
    //               label: "Product List",
    //             },
    //             {
    //               key: "brand",
    //               icon: <MdBrandingWatermark className="fs-4" />,
    //               label: "Brand",
    //             },
    //             {
    //               key: "list-brand",
    //               icon: <RiFileListFill className="fs-4" />,
    //               label: "Brand List",
    //             },
    //             {
    //               key: "category",
    //               icon: <BiSolidCategory className="fs-4" />,
    //               label: "Category",
    //             },
    //             {
    //               key: "list-category",
    //               icon: <SiAnilist className="fs-4" />,
    //               label: "Category List",
    //             },
    //             {
    //               key: "color",
    //               icon: <IoMdColorPalette className="fs-4" />,
    //               label: "Color",
    //             },
    //             {
    //               key: "list-color",
    //               icon: <SiAnilist className="fs-4" />,
    //               label: "Color List",
    //             },
    //           ],
    //         },
    //         {
    //           key: "orders",
    //           icon: <MdDeliveryDining className="fs-4" />,
    //           label: "Orders",
    //         },
    //         {
    //           key: "blog",
    //           icon: <FaBlog className="fs-4" />,
    //           label: "Blogs",
    //           children: [
    //             {
    //               key: "blog",
    //               icon: <HiDocumentAdd className="fs-4" />,
    //               label: "Add Blog",
    //             },

    //             {
    //               key: "blog-list",
    //               icon: <RiFileListFill className="fs-4" />,
    //               label: "Blog List",
    //             },
    //             {
    //               key: "blog-category",
    //               icon: <FaClipboardList className="fs-4" />,
    //               label: "Add Blog Category",
    //             },
    //             {
    //               key: "brand-category-list",
    //               icon: <MdBrandingWatermark className="fs-4" />,
    //               label: "Blog Category List",
    //             },
    //           ],
    //         },
    //         {
    //           key: "enquiries",
    //           icon: <MdDeliveryDining className="fs-4" />,
    //           label: "Enquiries",
    //         },
    //       ]}
    //     />
    //     ;
    //   </Sider>
    //   <Layout>
    //     <Header
    //       className="d-flex justify-content-between ps-1 pe-5"
    //       style={{
    //         padding: 0,
    //         background: colorBgContainer,
    //       }}>
    //       <Button
    //         type="text"
    //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         onClick={() => setCollapsed(!collapsed)}
    //         style={{
    //           fontSize: "16px",
    //           width: 64,
    //           height: 64,
    //         }}
    //       />
    //       <div className="d-flex gap-4 align-items-center">
    //         <div className="position-relative">
    //           <IoIosNotifications className="fs-4" />
    //           <span className="badge bg-warning p-0 m-0 position-absolute">3</span>
    //         </div>
    //         <div className="d-flex gap-3 align-items-center">
    //           <div>
    //             <img src="https://avatars.githubusercontent.com/u/120276096?v=4" className="img-fluid profile" alt="profile-image" />
    //           </div>
    //           <div>
    //             <h5 className="text-dark mb-0">clutchdeveloper</h5>
    //             <p className="text-dark mb-0">clutchdeveloper@gmail.com</p>
    //           </div>
    //         </div>
    //       </div>
    //     </Header>
    //     <Content
    //       style={{
    //         margin: "24px 16px",
    //         padding: 24,
    //         minHeight: 280,
    //         background: colorBgContainer,
    //       }}>
    //       <Outlet />
    //     </Content>
    //   </Layout>
    // </Layout>
    <div className="flex flex-col flex-1 max-h-screen overflow-scroll scroll-smooth">
      <Header toggler={toggler} />
      <div className="p-2 ">
        
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
          </Routes>
       
      </div>
    </div>
  );
}

export default MainLayout;
