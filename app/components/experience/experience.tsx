import { useState } from 'react'

import { experienceMap, experienceType } from './data/experience'

import './experience.scss'

export default function Experience() {
  const [activeYear, setActiveYear] = useState(2026)
  // TODO: Add keyboard navigation support (left and right arrow keys to navigate between tabs, and the Enter or Space key to activate a tab). (suggestion from AI but interesting one)

  const handleTabClick = (year: number) => {
    setActiveYear(year)
  }

  return (
    <div className="experience">
      <div className="window-body">
        <menu role="tablist" className="multirows">
          {Object.entries(experienceMap).map(([year]) => {
            const yearNumber = Number(year)

            return (
              <li
                key={year}
                role="tab"
                aria-selected={activeYear === yearNumber}
              >
                <a
                  onClick={() => handleTabClick(yearNumber)}
                  // for mobile device
                  onTouchEndCapture={() => handleTabClick(yearNumber)}
                >
                  {year}
                </a>
              </li>
            )
          })}
        </menu>

        <div className="window" role="tabpanel">
          <div className="window-body">
            {experienceMap[activeYear as keyof typeof experienceMap].map(
              (experience: experienceType) => (
                <fieldset key={experience.company}>
                  <legend>{experience.company}</legend>
                  <p>
                    {experience.role} | {experience.duration}
                  </p>
                  <ul>
                    {experience.description?.map(
                      (desc: string, index: number) => (
                        <li key={index}>{desc}</li>
                      )
                    )}
                  </ul>
                </fieldset>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
