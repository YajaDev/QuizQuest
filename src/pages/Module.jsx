import {lessons} from "../data/modules.json"

const Module = () => {

  return (
    <div className="grid place-items-center absolute w-full pt-5 gap-4 bg-gray">
      {lessons.map(lesson => {
        return (
          <div className="w-[85%] module-box">
            <h1 className="font-[Poppins] font-bold text-2xl pb-2">Chapter {lesson.id}</h1>
            <div className="relative ">
              <img
              className="rounded-sm"
              src={`${lesson.bgImg}`}  alt="" />
              <div className="absolute top-3 left-3 font-[poppins] text-xs text-white bg-black/27 px-4 py-1 rounded-sm">
                <p>{lesson.modules.pdf.length} Module</p>
                <p>{lesson.modules.videos.length} Videos</p>
              </div>
            </div>
            <h1 className="fonts-[Poppins] font-medium pt-2">{lesson.title}</h1>
            <a 
            href={lesson.modules.pdf} 
            target="blank" 
            rel="noopener noreferrer">
              <button className="blue-button font-normal mt-3">view module</button>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Module 
