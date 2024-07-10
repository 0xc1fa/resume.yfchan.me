export function ProjectSection() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <ul className="no-bullets">
        <li>
          <details open>
            <summary>
              <h3 className="inline-block">
                Wavy: A web-based Music Workstation (Individual)
              </h3>
              <div className="float-right font-bold">
                <a
                  href="http://youtu.be/uQ2K_xgbq7g"
                  target="_blank"
                  className="mobile-hide"
                >
                  Demo Video
                </a>
              </div>
            </summary>
            <ul>
              <li>
                Enhanced UX with a <strong>resizable</strong> and{" "}
                <strong>scrollable</strong> canvas featuring history,
                import/export, and clipboard functionalities.
              </li>
              <li>
                Integrated backend voice synthesizer enabling the{" "}
                <strong>generation of vocal tracks</strong>.
              </li>
              <li>
                Provided an isolated library for{" "}
                <strong>custom utilization</strong> and{" "}
                <strong>style modification</strong>. | Demo video:{" "}
                <a href="http://youtu.be/uQ2K_xgbq7g" target="_blank">
                  http://youtu.be/uQ2K_xgbq7g
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>
              <h3 className="inline-block">
                ICMS: Course Management Dashboard (Group)
              </h3>
              <div className="float-right font-bold">
                <a
                  href="https://www.youtube.com/watch?v=4uMUNsvreuI"
                  target="_blank"
                  className="mobile-hide"
                >
                  Demo Video
                </a>
              </div>
            </summary>
            <ul>
              <li>
                <strong>Led a 5-people backend development team</strong> and was
                fully responsible for the <strong>frontend</strong> and{" "}
                <strong>database</strong> of the application.
              </li>
              <li>
                Provides <strong>real-time course schedules</strong> and
                information based on the user&apos;s context and timing.
              </li>
              <li>
                Integrated a <strong>facial recognition</strong> component for
                login using <strong>Python</strong>.
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>
              <h3>
                2-player Game: Game Utilizing Socket and Multi-threading
                (Individual)
              </h3>
            </summary>
            <ul>
              <li>
                Integrated <strong>socket programming</strong>,{" "}
                <strong>multi-threading</strong> to manage game state and user
                interactions.
              </li>
              <li>
                Implemented a dynamic <strong>Java Swing</strong> GUI for
                real-time game status updates and player interactions.
              </li>
              <li>
                Improved game stability by handling{" "}
                <strong>network disruptions</strong> and{" "}
                <strong>player disconnections</strong> effectively.
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>
              <h3>Folded: A interactive GUI card game (Individual)</h3>
            </summary>
            <ul>
              <li>
                Developed a <strong>Java-based</strong> card game using Swing,
                managing shuffling, betting, and rule enforcement.
              </li>
              <li>
                Created interactive GUI elements for card replacement and result
                evaluation.
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
  );
}
