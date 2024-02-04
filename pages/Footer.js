import React from 'react'
import Image from 'next/image'
import objectImage from '../public/images/OBJECTS.png'
import dotImage from '../public/images/dotImage.png'
import phone from '../public/images/CallImage.png'
import address from '../public/images/AddressImage.png'
import instagram from '../public/images/InstagramImage.png'
import facebook from '../public/images/Facebook Circled.png'
import youtube from '../public/images/YouTubeImage.png'
function Footer() {
    return (
        <div className='w-full bg-[#003366] p-5 ' id='contact'>

            <div className='w-[70%] mx-auto my-0'>
                <div className='flex md:flex-row flex-col gap-[6rem] justify-center  text-white'>
                    <div className='flex flex-col gap-3 md:items-center md:justify-center items-center'>
                        <div>
                            <Image src={objectImage} />
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src={dotImage} />
                            <h1>Events to <br />Remember</h1>
                            <Image src={dotImage} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <div className='flex flex-col md:items-end justify-center items-center text-left gap-10'>
                            <h1 className='text-[2rem]'>Contact Us</h1>
                            <p className='md:text-left text-center'>Have an eventful inquiry or just want to sprinkle some magic on your occasion? <br /> Reach out and let's turn your ideas into extraordinary moments!</p>
                        </div>
                        <hr />
                        <div className='flex md:flex-row flex-col gap-5 items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center'>
                                    <div><Image src={phone} /></div>
                                    <div>
                                        +91 1111111111
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div><Image src={address} /></div>
                                    <div>
                                        Address line one
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div><Image className='h-[35px] w-[30px] object-cover' src={instagram} /></div>
                                <div><Image className='h-[35px] w-[30px] object-cover' src={facebook} /></div>
                                <div><Image className='h-[35px] w-[30px] object-cover' src={youtube} /></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer