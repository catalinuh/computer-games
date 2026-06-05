import Image from 'next/image'

import { ProjectType } from '../projects/data/projects'

import './project.scss'

interface ProjectProps {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="project">
      <h4>{project.name}</h4>
      {project.images?.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${project.name} screenshot ${index + 1}`}
          width={400}
          height={300}
        />
      ))}
      <p>{project.description}</p>
      <h4>Technologies Used:</h4>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.link}
        </a>
      )}
    </div>
  )
}
