
import Background from "../assets/man_at_the_laptop.jpg"
import { TypeAnimation } from "react-type-animation"
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaGithubAlt} from 'react-icons/fa'
const Main = () => {
  return (
    <div id="main">
      <img className='w-full h-screen object-cover object-left z-0'src={Background} alt="masked man at work on laptop" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Shea</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer : Frontend',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Developer : Backend',
                1000,
                'Developer : Fullstack',
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', paddingLeft:'5px' }}
              repeat={Infinity}
                />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter    className='cursor-pointer' size={20}/>
            <FaFacebookF  className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>
            <FaGithubAlt  className='cursor-pointer' size={20}/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
