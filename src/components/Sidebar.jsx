import { NavLink } from "react-router-dom"

const Sidebar = ({isOpen, setIsOpen}) => {
  
  return (
    <>
      <ul className={`${!isOpen && 'hidden'} flex flex-col gap-1.5 h-[cal(100% - 1px)] rounded-tr-2xl w-70 p-3 mt-[1px] bg-white z-10`}>
        <NavLink 
        to={'/'}
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-gray">
          <i className=" bx bx-home-alt bx-sm p-3"></i>
          <span className="text-l font-medium">Home</span>
        </NavLink>
        <NavLink 
        to={'quiz'}
        onClick={() => setIsOpen(false)} 
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-gray">
          <i className="bx bx-book bx-sm p-3"></i>
          <span className="text-l font-medium">Quiz</span>
        </NavLink>
        <NavLink 
        to={'module'}
        onClick={() => setIsOpen(false)} 
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-gray">
          <i className="bx bxs-graduation bx-sm p-3"></i>
          <span className="text-l font-medium">Module</span>
        </NavLink>
        <NavLink 
        to={'member'}
        onClick={() => setIsOpen(false)} 
        className="flex items-center gap-5 px-2 font-[Poppins] rounded-full cursor-pointer transition-colors duration-250
        hover:bg-gray">
          <i className="bx bx-group bx-sm p-3"></i>
          <span className="text-l font-medium">Members</span>
        </NavLink>
      </ul>
      {isOpen && (
        <div
          className="absolute w-full h-full z-5 bg-black/20 cursor-pointer"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

    </>
  )
}

{/* <div className="w-10 h-10 mt-[1px] bg-white z-10">
  <div className="w-10 h-10 rounded-tl-full bg-gray" />
</div> */}

export default Sidebar
