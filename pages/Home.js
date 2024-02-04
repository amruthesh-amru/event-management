import Image from 'next/image'
import HeroImageLarge from '../public/images/Rectangle 3.png'
import HeroImageSmall from '../public/images/Rectangle 3(1).png'
import leftDecor from '../public/images/leftDecor.png'
import rightDecor from '../public/images/rightDecor.png'
import event1 from '../public/images/event1.png'
import gridImage1 from '../public/images/gridImage1.png'
import gridImage2 from '../public/images/gridImage2.png'
import gridImage3 from '../public/images/gridImage3.png'
import gridImage4 from '../public/images/gridImage4.png'
import navbarLogo from '../public/images/navbarLogo.png'
import Footer from './Footer'
import Navbar from './Navbar'
function Home() {
    return (
        <>
            <Navbar />
            <div className='w-full h-full'>
                <div className='w-full md:h-[30rem] h-[20rem] flex items-center justify-center backgound_image_desktop'>
                    {/* <Image src={HeroImageSmall} placeholder='blur' className='md:hidden w-full object-cover ' /> */}
                    {/* below image for desktop view */}
                    {/* <Image src={HeroImageLarge} placeholder='blur' className='w-full h-full object-cover hidden md:block' /> */}
                    <div className='text-center'>
                        <h1 className='md:text-[84px] text-[2rem] text-white'>"Events to Remember" </h1>
                        <p className='md:text-[24px] text-[1rem] text-center text-white'>Your Gateway to Unforgettable Moments!</p>
                    </div>
                </div>
                <div className='md:w-[60%] text-justify w-[90%] font-[500] mx-auto my-0 h-full p-10'>
                    <p className='text-center  text-[#003366]'>
                        At "Events to Remember," we understand the power of creating lasting memories. As your premier event management partner, we specialize in turning your visions into reality, crafting seamless and unforgettable experiences for every occasion.
                    </p>
                </div>
                <div className='w-full  bg-[#003366] md:flex-row flex-col flex items-center justify-center gap-10'>
                    <div>
                        <Image src={leftDecor} />
                    </div>
                    <div className='w-[80%] flex justify-center items-center flex-col gap-5'>
                        <h1 className='text-white font-[400] text-[1.8rem] text-center '>Elevate Every Occasion with 'Events to Remember'</h1>
                        <p className='text-[#71A5D9] text-center '>click on the cards to view event gallery</p>
                    </div>
                    <div>
                        <Image src={rightDecor} />
                    </div>
                </div>
                <div className='customGrid' id='services'>

                    <Image src={event1} />

                    <Image src={event1} />

                    <Image src={event1} />

                    <Image src={event1} />

                    <Image src={event1} />
                    <Image src={event1} />
                    <Image src={event1} />
                    <Image src={event1} />

                </div>
                <div className='w-full p-10 flex items-center justify-center flex-col gap-10' id='gallery'>
                    <h1 className='text-center md:text-[45px] text-[26px] text-[#003366]'>Wall of memories</h1>
                    <Image src={gridImage1} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home