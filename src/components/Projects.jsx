import React from 'react'
import { motion as Motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            id='projects'
            className='projects-section'
        >
            <div className='container'>
                <h2 className='section-title'>
                    My <span>Projects</span>
                </h2>

                <p className='section-subtitle'>
                    A selection of my recent work.
                </p>

                <div className='projects-grid'>
                    {Array.isArray(projects) && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <div key={index} style={{ width: '100%' }}>
                                <ProjectCard {...project} />
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#6b7280', gridColumn: '1 / -1', textAlign: 'center' }}>
                            No projects found.
                        </p>
                    )}
                </div>
            </div>
        </Motion.div>
    )
}

export default Projects
