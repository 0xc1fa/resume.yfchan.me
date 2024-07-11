import { skillsData } from "@/data/skillsData";

export function SkillsSection() {
  return (
    <section id="technical-skills-section">
      <h2>Technical Skills</h2>
      <table className="technicalskills-table">
        <tbody>
          {skillsData.map((x, i) => (
            <tr key={i}>
              <th scope="row">{x.category}</th>
              <td>{x.items.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
