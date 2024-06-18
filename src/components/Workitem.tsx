
interface WorkItemProps{
    year:number;
    title:string;
    duration: string;
    business: string;
    skills: string;
    details: string;
  }
  
  const WorkItem: React.FC<WorkItemProps> = ({year, title, duration, business, skills, details}) => {
    return (
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
              <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
              <span className='text-lg font-semibold text-[#001b5e]'>{title}</span>
              <span className='my-1 text-sm font-normal text-stone-400'>{duration}</span>
          </p>
          <p className='my-2 font-semibold'>{business}</p>
          <p className='my-2 text-base font-normal text-stone-400'>{details}</p>
          <p className='my-2 text-sm bg-stone-200 rounded-md px-1 py-1 italic'>{skills}</p>
        </li>
      </ol>
    )
  }
  
  export default WorkItem