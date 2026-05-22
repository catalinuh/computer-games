import { useState } from 'react'

import { skills } from './data/skills'

import './skills.scss'

export default function Skills() {
  const [isOpen, setIsOpen] = useState(true)

  const handleDetailClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="skills">
      <ul className="tree-view">
        <li>Skills</li>
        <li>
          {skills.map((skill, index) => {
            const skillGroup = Object.keys(skill)[0]
            const skillSubCategory = skill[skillGroup]

            return (
              <details
                key={index}
                open={isOpen}
                onClick={handleDetailClick}
                // for mobile
                onTouchEndCapture={handleDetailClick}
              >
                <summary>{skillGroup}</summary>

                {typeof skillSubCategory === 'object' &&
                !Array.isArray(skillSubCategory) ? (
                  <ul>
                    {Object.entries(skillSubCategory).map(
                      ([category, skills], idx) => (
                        <li key={idx}>
                          <details
                            key={idx}
                            open={isOpen}
                            onClick={handleDetailClick}
                            // for mobile
                            onTouchEndCapture={handleDetailClick}
                          >
                            <summary>{category}</summary>

                            <ul>
                              {skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <ul>
                    {skillSubCategory.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                )}
              </details>
            )
          })}
        </li>
      </ul>
    </div>
  )
}
