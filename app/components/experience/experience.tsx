import { useState } from 'react'

import { experienceMap, experienceType } from '../../pages'

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
          <li role="tab" aria-selected={activeYear === 2020}>
            <a onClick={() => handleTabClick(2020)}>2020</a>
          </li>
          <li role="tab" aria-selected={activeYear === 2021}>
            <a onClick={() => handleTabClick(2021)}>2021</a>
          </li>
          <li role="tab" aria-selected={activeYear === 2022}>
            <a onClick={() => handleTabClick(2022)}>2022</a>
          </li>
          <li role="tab" aria-selected={activeYear === 2023}>
            <a onClick={() => handleTabClick(2023)}>2023</a>
          </li>
          <li role="tab" aria-selected={activeYear === 2024}>
            <a onClick={() => handleTabClick(2024)}>2024</a>
          </li>
          <li role="tab" aria-selected={activeYear === 2025}>
            <a onClick={() => handleTabClick(2025)}>2025</a>
          </li>
          <li role="tab" aria-selected={activeYear === 2026}>
            <a onClick={() => handleTabClick(2026)}>2026</a>
          </li>
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
