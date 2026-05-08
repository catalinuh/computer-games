import './experience.scss'

export default function Experience() {
  // To render a tab list, use a menu element with the [role=tablist] attribute. The children of this menu (li elements), should get a [role=tab] attribute.
  // Tabs should be managed by adding custom javascript code. All you need is to add the [aria-selected=true] attribute to the active tab.

  // TODO: Add keyboard navigation support (left and right arrow keys to navigate between tabs, and the Enter or Space key to activate a tab). (suggestion from AI but interesting one)
  // TODO: Make tabs work by adding state to track the active tab and conditionally rendering the content based on the selected tab.

  return (
    <div className="experience">
      <div className="window-body">
        <menu role="tablist" className="multirows">
          <li role="tab">
            <a href="#tabs">2020</a>
          </li>
          <li role="tab">
            <a href="#tabs">2021</a>
          </li>
          <li role="tab">
            <a href="#tabs">2022</a>
          </li>
          <li role="tab">
            <a href="#tabs">2023</a>
          </li>
          <li role="tab">
            <a href="#tabs">2024</a>
          </li>
          <li role="tab">
            <a href="#tabs">2025</a>
          </li>
          <li role="tab" aria-selected>
            <a href="#tabs">2026</a>
          </li>
        </menu>

        <div className="window" role="tabpanel">
          <div className="window-body">
            <fieldset>
              <legend>Charter Communications</legend>
              <p>Software Engineer III | April 2022 - December 2025</p>
              {/* This is all ai slop */}
              <ul>
                <li>
                  Led the development of a new internal tool that streamlined
                  the process of managing customer accounts, resulting in a 30%
                  reduction in time spent on account management tasks.
                </li>
                <li>
                  Implemented a new feature that allowed customers to easily
                  track their service usage and billing information, resulting
                  in a 20% increase in customer satisfaction.
                </li>
                <li>
                  Collaborated with cross-functional teams to design and
                  implement a new system for handling customer support requests,
                  resulting in a 25% reduction in response time.
                </li>
                <li>
                  Mentored junior developers and provided guidance on best
                  practices for software development, resulting in a 15%
                  increase in team productivity.
                </li>
              </ul>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}
