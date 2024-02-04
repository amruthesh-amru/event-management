import Image from 'next/image'
import navbarLogo from '../public/images/navbarLogo.png'
import mobileMenu from '../public/images/menu.png'
import { useState } from 'react'
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <div id='top' className='absolute m-auto left-0 right-0 w-[90%] md:w-[80%]  flex items-center justify-between pt-5'>

                <div>
                    <Image src={navbarLogo} />
                </div>
                <div className='hidden md:contents'>
                    <div className=' flex gap-8 bg-white text-black md:pt-3 md:pb-3 md:pl-8 md:pr-8  rounded-full'>
                        <a href="#services"><h1 className='md:text-[1rem] text-[0.8rem]'>Services</h1></a>
                        <a href="#gallery"><h1 className='md:text-[1rem] text-[0.8rem]'>Gallery</h1></a>
                        <h1 className='md:text-[1rem] text-[0.8rem]'>Testimonials</h1>
                        <a href="#contact"> <h1 className='md:text-[1rem] text-[0.8rem]'>Contact Us</h1></a>
                    </div>
                </div>

                <div className='md:hidden bg-[#00CC99] p-3 rounded-full' onClick={() => toggleMenu()}>
                    <Image src={mobileMenu} />
                </div>


                {isMenuOpen && <div className=' md:hidden absolute right-0 top-[5.4rem] bg-[#00CC99] p-5 h-[30rem] w-full flex items-center justify-center flex-col gap-10 text-white pt-10 pb-10'>
                    <a onClick={() => toggleMenu()} href="#services"><h1 className='md:text-[1rem] text-[1.5rem]'>Services</h1></a>
                    <a onClick={() => toggleMenu()} href="#gallery"><h1 className='md:text-[1rem] text-[1.5rem]'>Gallery</h1></a>
                    <h1 className='md:text-[1rem] text-[1.5rem]'>Testimonials</h1>
                    <a onClick={() => toggleMenu()} href="#contact"> <h1 className='md:text-[1rem] text-[1.5rem]'>Contact Us</h1></a>
                </div>}
            </div >
        </>
    )
}

export default Navbar