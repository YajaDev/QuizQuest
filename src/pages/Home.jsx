
const Home = () => {
  return (
    <div className="flex justify-center items-center absolute h-full w-full p-3.5 bg-gray">
      <div>
        <h1 className="text-center text-3xl font-bold pb-5 ">Unlock Knowledge: Dive into the Ultimate Quiz Experience!</h1>
        <p className="text-center text-xs text-gray-500">Discover a world of engaging quizzes. Dive in and start your quiz journey today!</p>
        <div className="flex justify-center gap-5 pt-5">
          <button 
            className="px-3 py-2 font-bold text-white rounded-xs tracking-wide bg-blue cursor-pointer transition-shadow duration-300
            hover:shadow-[0_10px_15px_0_rgba(48,51,255,0.6)]">
              Start Quiz
          </button>
          <button 
            className="font-bold px-3.5 py-2 rounded-xs bg-ligth-blue cursor-pointer tracking-wide 
            hover:-translate-y-1 transition-translate duration-250">
              Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
