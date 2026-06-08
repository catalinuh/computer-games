import Image from 'next/image'

import { ProjectType } from '../projects/data/projects'

import './project.scss'

interface ProjectProps {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="project">
      <div className="status-field-border project__name">
        <h4>{project.name}</h4>
      </div>
      <div className="status-field-border project__images">
        {project.images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.name} screenshot ${index + 1}`}
            width={400}
            height={300}
          />
        ))}
      </div>
      <div className="status-field-border project__description">
        <p>{project.description}</p>
      </div>
      <div className="status-field-border project__technologies">
        <h4>Technologies Used:</h4>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="status-field-border project__link">
        {project?.link?.length ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        ) : null}
      </div>
    </div>
  )
}
