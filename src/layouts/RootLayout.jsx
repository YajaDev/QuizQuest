import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const RootLayout = () => {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
      <div className="flex h-screen relative">
        <Sidebar isOpen={isOpen} />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
