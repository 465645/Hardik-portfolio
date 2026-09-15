import React from 'react'
import { motion as Motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'

const About = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='about-section'
        >
            <div className='container'>
                <h2 className='section-title'>About <span>Me</span></h2>
                <p className='section-subtitle'>Get to know more about my academic background and passions</p>

                <div className='about-inner'>
                    <div className='about-img-wrap'>
                        <Motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            src={assets.profile}
                            alt='Hardik Jain'
                        />
                    </div>

                    <Motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='about-content'
                    >
                        <div style={{ borderRadius: '1rem', padding: '0 0 2rem 0' }}>
                            <h3>My Academic & Professional Journey</h3>
                            <p>
                                I am pursuing a <strong>Bachelor of Technology (BTech) in Computer Science</strong> at <strong>Walchand Institute of Technology, Solapur (Class of 2028)</strong>, concurrently enrolled in the <strong>Bachelor in Science (BS) in Data Science and Applications</strong> program at <strong>IIT Madras (2025 - 2029)</strong>. Previously, I completed my higher secondary schooling with PCM at PRJ Gyanjaya School.
                            </p>
                            <p>
                                With practical exposure through an <strong>Internship Trainee role at YHills</strong> focused on data handling and machine learning model training, I bridge the worlds of data intelligence, software development, and creative media. Currently, I also lead design and media at the <strong>Computer Society of India (CSI)</strong>, and actively participate in <strong>The Sportify (IIT Madras)</strong> and <strong>SAHITYIKA Literary Society</strong>.
                            </p>
                        </div>

                        <div className='about-cards'>
                            {aboutInfo.map((data, index) => (
                                <div key={index} className='about-card'>
                                    <div className='about-card-icon'>
                                        <data.icon />
                                    </div>
                                    <h4>{data.title}</h4>
                                    <p>{data.description}</p>
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </div>
        </Motion.div>
    )
}

export default About
