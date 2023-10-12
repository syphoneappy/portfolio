import React from 'react'
import HeroImage from '/external/HeroImage.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Home = () => {


  const navigateTo = (link) => {
    const section = document.getElementById(link);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div  id="home" name='Home' className='flex h-screen bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-20'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text7 text-white'>
                I'm a full stack developer
            </h2>
            <p className='text-gray-500 py-4'>
                I have a 1.9 years experiance building and designing software. 
                Currently, I love to work on web application  using Technology like, 
                React, Tailwind , Next JS and Django. 
            </p>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' onClick={() => navigateTo("projects")}>Portfolio <span className='group-hover:rotate-90 duration-300 ml-2'><ArrowForwardIosIcon /></span></button>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full text-white md:flex-row">
            <img src={HeroImage} alt="my profile" srcset={HeroImage} className='px-5 rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home
