import {lessons} from "../data/modules.json"

const Quiz = () => {
  return (
    <div className="grid place-items-center font-[Poppins] absolute lg:relative w-full mt-[1px] p-5 lg:pl-0 gap-4 bg-blue-grey-light overflow-auto
    grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        {lessons.map(module => {
          return (
          <div 
          className="flex flex-col items-center z-8 text-center w-[90%] h-full md:w-full bg-white p-8 rounded-xl module-box"
          key={module.id}>
            <img
              src={module.img} 
              alt={module.title} 
              width="100" 
            />
            <h1 className="border-t-1 w-full mt-5 pt-4 text-3xl tracking-tight font-medium border-[#bdc1c6]">Chapter {module.id}</h1>
            <p className="font-medium text-[#777] h-full p-1">{module.title}</p>
            <button className="blue-button mt-2">Start Quiz</button>
          </div>
          )
        })}
    </div>
  )
}

export default Quiz
