import { Hero } from "@/component";
import { AboutMe } from "@/component";
import { Skills } from "@/component";
import { Experience } from "@/component";
import { Stars } from "@/component";
import { heroData, aboutMeData, skillsData } from "@/data/linkedin";

export default function Home() {
  return (
    <main className="page_main__GlU4n">
      <div className="hero">
        <div className="content">
          <h1>{heroData.name}</h1>
          <p>{heroData.title}</p>
          <div className="profile" />
          <div className="icons">
            <a
              href={heroData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src="/_next/static/media/linkedin.1ab1bfb3.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href={heroData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src="/_next/static/media/github.6c3a67ee.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a href={heroData.socialLinks.email} target="_blank">
              <img
                className="social-icon"
                src="/_next/static/media/email.7cf746da.svg"
                alt="Email"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="page_container__aoG4z">
        <AboutMe data={aboutMeData} />
        <Skills data={skillsData} />
        <Experience data={aboutMeData} />
      </div>
      <Stars />
    </main>
  );
}
