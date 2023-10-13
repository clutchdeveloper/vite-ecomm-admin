import React, { useState } from "react";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";


function MainLayout({toggler }) {
  

  return (
  
    <div className="flex flex-col bg-gray-200 flex-1 max-h-screen overflow-scroll scroll-smooth">
      <Header toggler={toggler} />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
