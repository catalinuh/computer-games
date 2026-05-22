import { useState } from 'react'

import { skills, skillsTypeMenuOpen } from './data/skills'

import './skills.scss'

export default function Skills() {
  const [isOpen, setIsOpen] = useState(skillsTypeMenuOpen)

  const handleDetailClick = (
    e:
      | React.MouseEvent<HTMLDetailsElement>
      | React.TouchEvent<HTMLDetailsElement>,
    category: string
  ) => {
    e.stopPropagation() // Stops the parent detail's onClick from firing when a child detail is clicked
    console.log('handleDetailClick', category)

    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [category]: !prevIsOpen[category],
    }))
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
                open={isOpen[skillGroup]}
                onClick={(e) => handleDetailClick(e, skillGroup)}
                // for mobile
                onTouchEndCapture={(e) => handleDetailClick(e, skillGroup)}
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
                            open={isOpen[category]}
                            onClick={(e) => handleDetailClick(e, category)}
                            // for mobile
                            onTouchEndCapture={(e) =>
                              handleDetailClick(e, category)
                            }
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
