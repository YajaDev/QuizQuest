import { NavLink } from "react-router-dom"

const Sidebar = ({isOpen, setIsOpen}) => {
  
  return (
    <>
      <ul className={`${!isOpen && 'hidden lg:w-80'} lg:w-24 lg:flex flex-col gap-1.5 h-[cal(100% - 1px)] rounded-tr-2xl lg:rounded-none w-70 p-3 mt-[1px] bg-white z-10 overflow-hidden`}>
        <NavLink 
        to={'/'} 
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-ligth-blue">
          <i className=" bx bx-home-alt bx-sm p-3"></i>
          <span className="text-l pl-1 font-medium">Home</span>
        </NavLink>
        <NavLink 
        to={'quiz'}
        onClick={() => setIsOpen(false)} 
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-ligth-blue">
          <i className="bx bx-book bx-sm p-3"></i>
          <span className="text-l pl-1 font-medium">Quiz</span>
        </NavLink>
        <NavLink 
        to={'module'}
        onClick={() => setIsOpen(false)} 
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-ligth-blue">
          <i className="bx bxs-graduation bx-sm p-3"></i>
          <span className="text-l pl-1 font-medium">Module</span>
        </NavLink>
        <NavLink 
        to={'member'}
        onClick={() => setIsOpen(false)} 
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-ligth-blue">
          <i className="bx bx-group bx-sm p-3"></i>
          <span className="text-l pl-1 font-medium">Members</span>
        </NavLink>
      </ul>
      <div className="hidden lg:flex w-10 h-full mt-[1px] bg-white z-5">
        <div className="w-10 h-full rounded-tl-full bg-blue-grey-light" />
      </div>
      {isOpen && (
        <div
          className="absolute w-full h-full z-9 bg-black/20 cursor-pointer lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

    </>
  )
}

export default Sidebar
