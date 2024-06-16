import Workitem from "./Workitem"

const data = [
    {
        year: 2019,
        title: 'Web Developer Intern',
        business: 'Mission Automate',
        duration: '4 months',
        skills: 'Web Technologies, React, Version Control, User Experience',
        details: 
        'Collaborated with a team of developers in an Agile environment to build and deploy a project to help other devs gain real world training'
    },
    {
        year: 2020,
        title: 'Junior Software Engineer',
        business: 'Revature',
        duration: '3 months',
        skills: 'Web Technologies, Java, Software Development, Object-Oriented Programming, Version Control, User Experience, PostgreSQL',
        details: 
        'Developed projects with the use of various industry-standard technologies building experience with the anticipated result of working on client-side projects. Such technologies include; object-oriented programming languages, web development technologies, and server-side or back end technologies. '
    },
    {
        year: 2020,
        title: 'Junior Full Stack Developer',
        business: 'Revature',
        duration: '3 months',
        skills: 'Web technologies, Java, Software Development, Object-Oriented Programming, Version Control, User Experience',
        details: 
        'Developed projects with the use of various industry-standard technologies building experience with the anticipated result of working on client-side projects. Such technologies include; object-oriented programming languages, web development technologies, and server-side or back end technologies. '
    },
    {
        year: 2024,
        title: 'Software Engineer Trainee',
        business: 'Coding Temple',
        duration: '6 months',
        skills: 'Web Technologies, React, Redux, Python, Software Development, Object-Oriented Programming, Version Control, User Experience, PostgreSQL, Data Structures, Flask',
        details: 
        'Developed a marketing product/UI demo using React, Redux, and Material UI. Migrated database schema with flask. Deployed full stack applications using third-party hosting services. Utilized Firebase and Auth0 for authentication functions with applications. Performed CRUD testing with Insomnia.'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item,idx) =>(
        <Workitem 
        key={idx} 
        year={item.year} 
        title={item.title} 
        business={item.business} 
        duration={item.duration} 
        skills={item.skills} 
        details={item.details}/>
      ))}
    </div>
  )
}

export default Work
