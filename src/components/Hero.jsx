import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted';


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>

      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img className='w-[32px] h-[32px]' src={discount} alt="discount" />
        <p className={`${styles.paragraph}`}>

          <span className='text-white'>20%  </span>    Discount for {" "}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full flex-wrap'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[32px] text-white ss:leading-[100px] leading-[50px]'>The Next <br className='sm:block hidden' /> {" "}
          <span className={`text-gradient`}>Generation</span>{" "}
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0 my-8"></div>
        <GetStarted />
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[32px] text-white ss:leading-[100px] leading-[50px] w-full'>
        Payment Method.

      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
        We examine annual percentage rates, annual fees.
      </p>
    </div>

    <div className={`${styles.flexCenter} flex-1 md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
<div className='absolute z-[0] left-20 w-[40%] h-[35%] top-0 pink__gradient'/>
<div className='absolute z-[1] w-[80%] rounded-full h-[35%] bottom-40 right-20 top-0 white__gradient'/>
<div className='absolute z-[2] w-[50%] h-[35%] right-20 bottom-20 top-0 blue__gradient'/>

    </div> 

    <div className={`${styles.flexCenter} ss:hidden`}>

    </div>
  </section>
)

export default Hero
