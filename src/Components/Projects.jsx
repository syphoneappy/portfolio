import React from 'react'
import MoviePlaylist from "/external/movie_playlist.png"
import Project2 from "/external/project2.png"
const Projects = () => {

    const portfolio = [
        {
            id:1,
            src: MoviePlaylist,
            href:"https://octopus-app-p9wjm.ondigitalocean.app/"
        },
        {
            id:2,
            src: Project2,
            href:"https://stingray-app-vjrdm.ondigitalocean.app/"
        }
    ]

    const navigateToHref = (href) => {
        const url = href;  
        window.open(url, '_blank');
      };
  return (
    <div id="projects" name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolio.map(({id,src, href}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => navigateToHref(href)}>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
