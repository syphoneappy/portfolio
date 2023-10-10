import React from 'react'

const About = () => {
  return (
    <div  id="about" name="about" className='w-full  min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Embarking on my tech journey has been an exhilarating adventure! 🌟 From the very start, coding felt like solving puzzles. 💡 HTML, CSS, and JavaScript became my trusted companions, allowing me to craft beautiful and interactive websites. 🎨💻 Python soon captured my heart with its versatility and readability. 🐍
            </p>
            <p className='text-xl mt-4'>
            Creating is my passion, and technology is my medium. 🎨 The power to turn a concept into reality through lines of code is like wielding a magic wand. ✨ Python is my trusted sidekick, helping me build robust backends. Django, Flask, and React.js are my creative playgrounds. 🏗️🚀
            </p>
        </div>
        <div className="h-20"></div>

    </div>
  )
}

export default About
