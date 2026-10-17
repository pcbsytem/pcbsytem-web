import { AboutMeData } from "@/data/linkedin";

interface ExperienceProps {
  data: AboutMeData;
}

export function Experience({ data }: { data: AboutMeData }) {
  return (
    <section className="content-container">
      <h3>Experience</h3>
      <div className="experience">
        <div className="item">
          <div className="title">
            <div>
              <p>Frontend Developer</p>
            </div>
          </div>
          <p>
            GFT Costa Rica - Industry assets management web app
          </p>
          <p>
            Developed web applications managing industry assets for a leading
            IT company
          </p>
        </div>
        <div className="item">
          <div className="title">
            <div>
              <p>Mobile Development</p>
            </div>
          </div>
          <p>iOS and Android applications</p>
          <p>
            Developed cross-platform mobile applications using React Native and
            native technologies
          </p>
        </div>
        <div className="item">
          <div className="title">
            <div>
              <p>Mentorship</p>
            </div>
          </div>
          <p>Mentoring junior and mid-level front-end developers</p>
          <p>Helping improve coding skills and best practices</p>
        </div>
      </div>
    </section>
  );
}
