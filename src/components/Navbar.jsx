import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Navbar = ({setIsOpen, isOpen}) => {
    
  
  return ( 
    <nav className='px-3 py-3 bg-[var(--bg-white)] z-10'>
      <div className="flex items-center gap-3 ">
        <i 
        onClick={() => setIsOpen(!isOpen)}
        className="bx bx-menu-alt-left bx-sm 
          p-1.5 cursor-pointer rounded-md transition-colors duration-400
        hover:bg-[var(--bg-grey)]"/>
        <Link to={"/"}>
          <h1 className='font-sans text-2xl font-bold tracking-wide cursor-pointer'>QuizQuest</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
