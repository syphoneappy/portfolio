import React from 'react'

const Expirience = () => {

    const Technology = [
        {
            id:1,
            src:"/external/html.png",
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:"/external/css.jpg",
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:"/external/js.jpg",
            title:"Javascript",
            style:"shadow-orange-400"
        },
        {
            id:4,
            src:"/external/python.png",
            title:"Python",
            style:"shadow-black-500"
        },
        {
            id:5,
            src:"/external/django.png",
            title:"Django",
            style:"shadow-green-800"
        },
        {
            id:6,
            src:"/external/flask.png",
            title:"Flask",
            style:"shadow-gray-500"
        },
        {
            id:7,
            src:"/external/DRF.png",
            title:"DRF",
            style:"shadow-red-500"
        },
        {
            id:8,
            src:"/external/react.png",
            title:"React",
            style:"shadow-sky-500"
        },
        {
            id:9,
            src:"/external/docker.png",
            title:"Docker",
            style:"shadow-blue-500"
        }
    ]
  return (
    <div id="portfolio" name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
            <p className='py-6'>Thease are the Technology i have worked on..</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {Technology.map(({id,src,title,style}) => (
                    <div id={id} className={`shadow-md hover:scale-105 duration-400 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p>{title}</p>
                    </div>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Expirience
