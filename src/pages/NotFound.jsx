import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="grid place-content-center h-screen w-screen bg-gray absolute">
      <h1 className="text-3xl font-medium">404 | Not Found Page</h1>
      <Link 
        to={"/"}
        className="blue-button text-center w-52 mx-auto mt-10"
      >
        <button>Go Back to Home page</button>
      </Link>
       <Link to={"/"}>
        <h1 className='absolute top-3 left-5 font-sans text-2xl font-bold tracking-wide cursor-pointer'>
          <span className="text-blue">Q</span>uizQuest
        </h1>
      </Link>
    </div>
  )
}

export default NotFound
