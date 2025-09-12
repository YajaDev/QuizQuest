import { NavLink } from "react-router-dom"

const Sidebar = ({isOpen}) => {
  
  return (
    <>
      <ul className={`${isOpen ?'':'hidden'} h-[cal(100% - 1px)] w-50 p-3 mt-[1px] bg-[var(--bg-white)] z-10`}>
        <NavLink to={'/'} className="flex items-center gap-5 bg-[var(--bg-grey)] px-2 rounded-full cursor-pointer">
          <i className=" bx bx-home-alt bx-sm p-3"></i>
          <span className="text-l font-medium">Home</span>
        </NavLink>
      </ul>
      <div className="w-10 h-10 mt-[1px] bg-[var(--bg-white)] z-10">
        <div className="w-10 h-10 rounded-tl-full bg-[var(--bg-grey)]" />
      </div>
    </>
  )
}
    // <ul className="">
      
    //   <li>
    //     <a className="home active" href="./index.html">
    //       <i className=" bx bx-home-alt"></i>
    //       <span>Home</span>
    //     </a>
    //   </li>
    //   <li>
    //     <a className="quiz" href="./quiz.html">
    //       <i className="bx bx-book"></i>
    //       <span>Quiz</span>
    //     </a>
    //   </li>
    //   <li>
    //     <a className="module" href="./course.html">
    //       <i className="bx bxs-graduation"></i>
    //       <span>Module</span>
    //     </a>
    //   </li>
    //   <li>
    //     <a className="member" href="./member.html">
    //       <i className="bx bx-group"></i>
    //       <span>Members</span>
    //     </a>
    //   </li>
    // </ul>
export default Sidebar
