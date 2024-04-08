import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import {motion} from 'framer-motion'

import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = {type: 'spring', duration: 3}

  const mobile = window.innerWidth <= 768 ? true : false;

  return (

    <div className="hero"  id='home'>


      {/* left part of Hero(Hero--> Front page/UI) */}
      <div className='left-h'>

        <Header/>

        {/* the best ad */}
        <div className='the-best-ad'>

          <motion.div
           initial={{left: mobile? '165px' : '238px'}}
           whileInView={{left: '8px'}}
           transition={{...transition, type: 'tween'}}
           >

          </motion.div>

          <span>THE BEST FITNESS CLUB IN THE TOWN</span>

        </div>


        {/* Hero Heading */}
        <div className='hero-text'>

          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>

        </div>


        {/* Figures */}
        <div className='figures'>

          <div>

            <span>
              <NumberCounter end={130} start={100} delay='4' preFix='+'/>
            </span>

            <span>expert coaches</span>

          </div>

          <div>

            <span>
            <NumberCounter end={650} start={500} delay='4' preFix='+'/>
            </span>

            <span>members joined</span>

          </div>

          <div>

            <span>
            <NumberCounter end={50} start={10} delay='3' preFix='+'/>
            </span>

            <span>fitness programs</span>

          </div>

        </div>


        {/* Hero buttons */}
        <div className='hero-buttons'>

          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>

        </div>


      </div>



      {/* right part of Hero(Hero--> Front page/UI) */}
      <div className='right-h'>

        <button className='btn'>Join Now</button>

        <motion.div className='heart-rate'
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
          >

          <img src={Heart} alt=""/>

          <span>Heart Rate</span>

          <span>112 bpm</span>

        </motion.div>


        <img src={hero_image} alt="" className='hero-image'/>

        <motion.img src={hero_image_back} alt="" className='hero-image-back'
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
        />


        <motion.div className='calories'
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
          >

          <img src={Calories} alt=""/>

          <div>
            <span>Calories Burned</span>
            <span>414 kcal</span>
          </div>
           
        </motion.div>

      </div>


      <div className='blur  hero-blur'></div>
      
    </div>

  )
}

export default Hero
