import React from 'react'
import { motion as Motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='experience'
            className='work-section'
        >
            <div className='container'>
                <h2 className='section-title'>
                    Work <span>Experience</span>
                </h2>
                <p className='section-subtitle'>
                    A brief overview of my professional journey.
                </p>
                <div className='work-timeline'>
                    {workData.map((data, index) => (
                        <div key={index} className='timeline-item'>
                            {/* timeline dot */}
                            <div className='timeline-dot'></div>

                            {/* timeline card box */}
                            <div className='timeline-box'>
                                <div className='timeline-header'>
                                    <h3>{data.role}</h3>
                                    <span className='timeline-duration'>{data.duration}</span>
                                </div>
                                <p className='timeline-company'>{data.company}</p>
                                <p className='timeline-desc'>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Motion.div>
    )
}

export default Work
