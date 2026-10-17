export interface HeroData {
  name: string
  title: string
  experience: string
  skills: string[]
  location?: string
  about: string
  lookingFor: string
  socialLinks: {
    linkedin: string
    github: string
    email: string
  }
}

export interface AboutMeData {
  summary: string
  experienceYears: number
  notableProjects: string[]
  intro: string
}

export interface SkillsData {
  technical: string[]
  softSkills: string[]
}

export const heroData: HeroData = {
  name: "Patrick Cristian Barcelos",
  title: "Frontend Developer",
  experience: "7 years in web and mobile technologies",
  skills: ["NextJS", "ReactJS", "React Native", "Angular", "Typescript"],
  about: "Experienced front-end developer with skills in web and mobile technologies. I have expertise in NextJS, ReactJS, React Native, Angular, and Typescript. I have worked on a lot of kinds of projects, from small websites to large-scale web applications and mobile apps. I have mentored junior and mid-level front-end developers and helped them improve their coding skills and best practices. I have also worked on a project with GFT Costa Rica, a leading IT company, where I built a web app that manages industry assets. I have developed web and mobile apps for various platforms, such as iOS and Android, using React Native and native technologies. I have a keen eye for design and usability and I can create beautiful and user-friendly interfaces that work well on different devices and resolutions. I can work under pressure and deliver high-quality results within tight deadlines. I am proactive and always eager to learn new things and take on new challenges. I work fast and efficiently, without compromising quality or functionality. I love web and mobile development and I enjoy creating amazing user experiences that solve real problems. I am looking for long-term or short-term projects where I can use my skills and knowledge to help you achieve your goals.",
  lookingFor: "Looking for long-term or short-term projects where I can use my skills and knowledge to help you achieve your goals",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/patrick-cristian-barcelos-374ab233/",
    github: "https://github.com/pcbsytem",
    email: "mailto:pcbsystem@hotmail.com"
  }
}

export const aboutMeData: AboutMeData = {
  summary: "Experienced front-end developer with skills in web and mobile technologies",
  experienceYears: 7,
  notableProjects: ["Web app managing industry assets (GFT Costa Rica)", "Various iOS and Android applications", "Personal portfolio website"],
  intro: "Hi, I'm a front-end developer with 7 years of experience in web and mobile technologies."
}

export const skillsData: SkillsData = {
  technical: ["NextJS", "ReactJS", "React Native", "Angular", "Typescript", "Firebase", "CSS3", "HTML5"],
  softSkills: ["Mentorship", "Problem-solving", "Communication", "Time management", "Pressure resilience"],
}