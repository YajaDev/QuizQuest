import {lessons} from "../data/modules.json"

const Quiz = () => {
  return (
    <div className="grid place-items-center font-[Poppins] absolute w-full pt-5 gap-4 bg-gray">
        {lessons.map(module => {
          return (
          <div 
          className="flex flex-col items-center text-center w-[88%] bg-white p-8 rounded-xl module-box"
          key={module.id}>
            <img
              src={module.img} 
              alt={module.title} 
              width="100" 
            />
            <h1 className="border-t-1 w-full mt-5 pt-4 text-3xl tracking-tight font-medium border-[#bdc1c6]">Chapter {module.id}</h1>
            <p className="font-medium text-[#777] p-1">{module.title}</p>
            <button className="blue-button mt-2">Start Quiz</button>
          </div>
          )
        })}
    </div>
  )
}

export default Quiz
