import './skills.scss'

export default function Skills() {
  return (
    <div className="skills">
      <ul className="tree-view">
        <li>Skills</li>
        <li>
          <details open>
            <summary>JavaScript</summary>
            <ul>
              <li>
                <details open>
                  <summary>Frontend</summary>
                  <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Day.js</li>
                    <li>Storybook</li>
                    <li>Redux</li>
                    <li>Recoil</li>
                  </ul>
                </details>
              </li>

              <li>
                <details open>
                  <summary>Backend</summary>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>GQL</li>
                    <li>Prisma</li>
                    <li>NestJS</li>
                    <li>Liquibase</li>
                    <li>PostgreSQL</li>
                    <li>SQL</li>
                    <li>Webpack</li>
                    <li>Babel.js</li>
                  </ul>
                </details>
              </li>

              <li>
                <details open>
                  <summary>Testing</summary>
                  <ul>
                    <li>React Testing Library</li>
                    <li>Jest</li>
                    <li>Cypress</li>
                    <li>Jasmine</li>
                    <li>Mocha</li>
                    <li>Chai</li>
                  </ul>
                </details>
              </li>

              <li>
                <details open>
                  <summary>Misc.</summary>
                  <ul>
                    <li>Socket.io</li>
                    <li>Phaser 4</li>
                    <li>Lodash</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Other</summary>
            <ul>
              <li>HTML/HTML5</li>
              <li>CSS/SCSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>C++</li>
              <li>Canva</li>
              <li>Figma</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>VS Code</li>
              <li>NetBeans</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}
