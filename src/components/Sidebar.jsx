import { NavLink } from "react-router-dom"

const Sidebar = ({isOpen}) => {
  
  return (
    <>
      <ul className={`${isOpen ?'':'hidden'} flex flex-col gap-3 h-[cal(100% - 1px)] w-50 p-3 mt-[1px] bg-white z-10`}>
        <NavLink to={'/'} className="flex items-center gap-5 bg-gray px-2 rounded-full cursor-pointer">
          <i className=" bx bx-home-alt bx-sm p-3"></i>
          <span className="text-l font-medium">Home</span>
        </NavLink>
        <NavLink to={'quiz'} className="flex items-center gap-5 hover:bg-gray px-2 rounded-full cursor-pointer">
          <i className="bx bx-book bx-sm p-3"></i>
          <span className="text-l font-medium">Quiz</span>
        </NavLink>
        <NavLink to={'module'} className="flex items-center gap-5 hover:bg-gray px-2 rounded-full cursor-pointer">
          <i className="bx bxs-graduation bx-sm p-3"></i>
          <span className="text-l font-medium">Module</span>
        </NavLink>
        <NavLink to={'members'} className="flex items-center gap-5 hover:bg-gray px-2 rounded-full cursor-pointer">
          <i className="bx bx-group bx-sm p-3"></i>
          <span className="text-l font-medium">Members</span>
        </NavLink>
      </ul>
      <div className="w-10 h-10 mt-[1px] bg-white z-10">
        <div className="w-10 h-10 rounded-tl-full bg-gray" />
      </div>
    </>
  )
}

export default Sidebar
