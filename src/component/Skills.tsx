import { SkillsData } from "@/data/linkedin";

interface SkillsProps {
  data: SkillsData;
}

export function Skills({ data }: { data: SkillsData }) {
  return (
    <section className="content-container">
      <h3>Skills</h3>
      <div className="skills">
        {data.technical.map((skill, index) => (
          <div key={index} className="item">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
