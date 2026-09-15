import React from 'react'
import { motion as Motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='skills-section'
        >
            <div className='container'>
                <h2 className='section-title'>My <span>Skills</span></h2>
                <p className='section-subtitle'>Technologies I work with to bring ideas to life</p>

                <div className='skills-grid'>
                    {skills.map((skill, index) => (
                        <div key={index} className='skill-card'>
                            <div className='skill-card-header'>
                                <skill.icon className='skill-icon' />
                                <h3>{skill.title}</h3>
                            </div>
                            <p>{skill.description}</p>
                            <div className='skill-tags'>
                                {skill.tags.map((tech) => (
                                    <span key={tech} className='skill-tag'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Motion.div>
    )
}

export default Skills
