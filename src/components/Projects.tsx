
import ProjectItem from './ProjectItem'
import carInventory from '../assets/lighthearted-dragon-c82323.netlify.app_.png'
import sneaker from '../assets/stirring-panda-8ebc20.netlify.app_.png'

const Projects = () => {
  return (
    <div id = 'projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Below you'll a couple of my fully functional(for now) projects that I've made. Both build using
            React + Vite and TypeScript. One uses Auth0 authorization while the other uses Firebase. Unless you wish 
            to test out my database you don't need to log in. 
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={carInventory} title='Car Inventory Web App'/>
            <ProjectItem img={sneaker} title='Sneaker Inventory Web App' />
        </div>
      
    </div>
  )
}

export default Projects
