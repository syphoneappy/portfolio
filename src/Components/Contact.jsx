import React, { useState , useEffect} from 'react'
import {useForm, ValidationError} from "@formspree/react"
const Contact = () => {
    const [state, handleSubmit] = useForm("meqbvqrk");
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (state.succeeded) {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }
      }, [state.succeeded]);

  return (
    <>
        <div id="contact" name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
              {showAlert && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 rounded-md mb-4">
          <p>Thanks for joining!</p>
        </div>
      )}
      <div className='flex flex-col p-4 justify-content max-w-screen-lg mx-auto h-full '>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
        <p className='py-6'>Submit the form below to get touch with me!</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="" method='post' className='flex flex-col w-full md:w-1/2 md:h-screen' onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" name='name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your name' />
                <label htmlFor="email">Your Email:</label>
                <input type="email" name='email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your Email'/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <label htmlFor="phoneNumber">Your Phone Number:</label>
                <input type="tel" name='phoneNumber' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your phone number'/>
                
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="10" placeholder="Enter you message"  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" disabled={state.submitting} className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk </button>
            </form>
        </div>

      </div>

    </div>
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    </div>
    </>

  )
}

export default Contact
