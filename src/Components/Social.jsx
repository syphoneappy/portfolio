import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaVoicemail, FaFile, FaFileDownload, FaFilePdf, FaMailchimp, FaMailBulk } from 'react-icons/fa'
import {BsFillPersonLinesFill} from "react-icons/bs"
const Social = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                <p className='m-1'>Linkdin</p>  <FaLinkedin  size={30} className='ml-4'/>
                </>
            ),
            href: "https://linkdin.com",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
                <p className='m-1'>Github</p>  <FaGithub  size={30} className='ml-5'/>
                </>
            ),
            href: "https://github.com/syphoneappy",
     
        },
        {
            id:3,
            child:(
                <>
                <p> Email    </p>  <hr /><FaMailBulk  size={30} className='ml-10'/>
                </>
            ),
            href: "mailto:harsh@harshtripathi.co.in",
          
        },
        {
            id:3,
            child:(
                <>
                <p className='m-1'>Resume</p>  <FaFilePdf  size={30} className='ml-4'/>
                </>
            ),
            href: "external/resume.pdf",
            style:"rounded-br-md",
            Download: true
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id,child,href,style, download}) => (
               <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 text-white ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 " + "    "+ style } >
                <a className='flex' href={href} download={download} target='_black' rel='noreferrer'>
                {child}
                </a> 
                </li>
        ))}
     
      </ul>
    </div>
 )
}

export default Social
