export function CompetitionSection() {
  return (
    <section id="compeititions-section">
      <h2>Competitions, Honors and Awards</h2>
      <ul className="no-bullets">
        <li>
          <details open>
            <summary>
              <h3>
                Finalist &mdash; HKU Generative AI Hackathon for Social Good
                [Oct 2023]
              </h3>
            </summary>
            <ul>
              <li>
                <strong>Led a team of 5 developers</strong> to secure{" "}
                <strong>2nd runner-up</strong> in the Productive Collaborative
                Work Award
              </li>
              <li>
                Ranked as a <strong>finalist out of 24 teams</strong> by
                developing an ADHD-targeted application using{" "}
                <strong>Spring Boot</strong>, <strong>Java</strong>, and{" "}
                <strong>React</strong>.
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>
              <h3>
                Winner &mdash; HKU Final Year Project Competition [Apr 2024]
              </h3>
            </summary>
            <ul>
              <li>
                Distinguished as one of the
                <strong>11 winners (top 8%)</strong> among 136 HKU CE/EEE final
                year projects.
              </li>
              <li>
                Worked on the title of &quot;Implementation of a Singing Voice
                Synth with MIDI Programming&quot; using React, FastAPI, and
                PyTorch.
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
  );
}
