import React from 'react'
import { motion as Motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='hero-section'
        >
            <div className='hero-inner'>
                {/* Left Side */}
                <div className='hero-text'>
                    <h1>Hi, I'm <span>Hardik Jain</span></h1>
                    <h2 className='typewriter'>Data Science & CS</h2>
                    <p>
                        B.Tech CSE student at Walchand Institute of Technology & BS Data Science at IIT Madras.
                        Passionate about Machine Learning, full-stack development, and creative digital media.
                    </p>
                    <div className='hero-buttons'>
                        <a href='#projects' className='btn-primary'>View Work</a>
                        <a href='#contact' className='btn-outline'>Contact Me</a>
                        <a
                            href='https://www.linkedin.com/in/hardik-jain-b3b712284'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-primary'
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className='hero-image'>
                    <div className='profile-wrapper'>
                        <div className='profile-glow animate-pulse-slow'></div>
                        <Motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut'
                            }}
                            src={assets.profile}
                            alt='Hardik Jain - Profile Photo'
                            className='profile-img animate-float'
                        />
                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default Hero
