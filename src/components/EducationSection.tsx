export function EducationSection() {
  return (
    <section id="education-section">
      <h2>Education</h2>
      <ul className="no-bullets">
        <li>
          <details open>
            <summary>
              <h3 className="inline-block">The University of Hong Kong</h3>
              <div className="float-right font-bold">
                Sept 2019 &ndash; June 2024
              </div>
            </summary>
            <div className="italic">BEng in Computer Engineering</div>
            <ul>
              <li>Penultimate Year GPA: 3.85 | Final Year GPA: 3.64</li>
              <li>
                A+ in Operating Systems, Digital System Design, Probabilistic
                Systems Analysis
              </li>
              <li>
                A range in OOP and Java, Advanced database systems, Computer and
                communication networks, Artificial intelligence, Machine
                learning, Algorithm design, Senior design project, Integrated
                design project, Intro to DBMS, Technical English for EEE
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
  );
}
