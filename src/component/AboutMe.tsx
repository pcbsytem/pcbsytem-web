import { AboutMeData } from "@/data/linkedin";

interface AboutMeProps {
  data: AboutMeData;
}

export function AboutMe({ data }: { data: AboutMeData }) {
  return (
    <section className="content-container">
      <h3>About Me</h3>
      <div className="about-me">
        <h4>{data.summary}</h4>
        <br />
        <p>{data.intro}</p>
      </div>
    </section>
  );
}
