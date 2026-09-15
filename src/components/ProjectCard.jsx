import React from 'react'
import { FaCodeBranch } from 'react-icons/fa'

const ProjectCard = ({ title, description, tech, code }) => {
  return (
    <div className='project-card'>
      <div className='project-card-body'>
        <div className='project-card-header'>
          <FaCodeBranch className='project-card-icon' />
          <h3>{title}</h3>
        </div>

        <p>{description}</p>

        <div className='project-tech-tags'>
          {Array.isArray(tech) &&
            tech.map((item, index) => (
              <span
                key={index}
                className='project-tech-tag'
              >
                {item}
              </span>
            ))}
        </div>

        <div className='project-links'>
          <a
            href={code}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-source'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
