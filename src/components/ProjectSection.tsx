import { projectData } from "@/data/projectData";
import { Collapsible } from "./CollapsibleTitle";

export function ProjectSection() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <ul className="no-bullets">
        {projectData.map((x, index) => (
          <li key={index}>
            <Collapsible
              title={
                <>
                  <h3 className="inline-block">{x.title}</h3>
                  <div className="float-right font-bold">{x.subtitle}</div>
                </>
              }
            >
              <ul>
                {x.details?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Collapsible>
          </li>
        ))}
      </ul>
    </section>
  );
}
