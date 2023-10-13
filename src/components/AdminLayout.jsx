import React, { useState } from 'react'
import SiderNavbar from './SiderNavbar'
import MainLayout from './MainLayout'

function AdminLayout() {

  const [open, setOpen] = useState(true)
  
  const toggler = () => {
  return( setOpen(!open))
}

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="h-screen fixed top-0 left-0 z-40 md:static">
        <SiderNavbar open={open} toggler={toggler} />
      </div>
      <MainLayout toggler={toggler} />
    </div>
  );
}

export default AdminLayout