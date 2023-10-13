import React, { useState } from 'react'
import SiderNavbar from './SiderNavbar'
import MainLayout from './MainLayout'

function AdminLayout() {

  const [open, setOpen] = useState(true)
  
  const toggler = () => {
  return( setOpen(!open))
}

  return (
      <div className='flex w-full h-screen'>
          <SiderNavbar open={open} />
      <MainLayout toggler={toggler} />
    </div>
  )
}

export default AdminLayout