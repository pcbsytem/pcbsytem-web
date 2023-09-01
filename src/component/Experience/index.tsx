import { CompanyLogo } from '../CompanyLogo'
import { ContentContainer } from '../ContentContainer'
import './index.css'

export function Experience() {
  const experiences = [
    {
      company: 'GFT Group',
      role: 'Frontend Developer',
      url: 'https://www.gft.com',
      path: '/.resources/gft/webresources/img/gft-favicon.ico',
      period: 'Sep/2021 - Present',
      description: `
      - I am currently working on the Industry - Equipment Visualization Asset project,
      an internal project of GFT Brazil in conjunction with GFT Costa Rica, whose
      objective is to monitor the status of equipment (truck, wind turbine, solar plate)
      used in our user's businesses.

      - I worked on the search Hub for Serasa. It's a product that you can find health
      financial information from companies you think will do business. I am developing
      some structure items (like SEO, Analytics, and AdSense) and new features.

      - I worked at the Nav app (it's an app that lets you see your exams and schedule
      exams). My role in this project was to develop new features, maintain existing
      ones, suggest improvements, and apply them in the development process as well
      as in app improvements.`
    },
    {
      company: 'Orgsystem',
      role: 'Frontend Developer',
      url: 'https://orgsystem.com.br',
      path: '/favicon-32x32.png',
      period: 'Nov/2016 - Sep/2017',
      description: `At that time, I was responsible for creating project structure, style code, and patterns and helping developers in their beginner and internship stages. I worked on religious systems like ArquiSP, an Arch Diocese of São Paulo app that people can follow church activities, and on other ERP systems like financial and commercial web apps.`
    },
    {
      company: 'ENGDigital Soluções em TI',
      role: 'Frontend Developer',
      url: 'https://engdigital.com.br',
      path: '/wp-content/uploads/2021/03/engdigital.png',
      period: 'Nov/2016 - Sep/2017',
      description: `Development EngDigital landing page (It isn't the current). I developed SPA Frontend that manages sales goals and I created some promotional material for the brand and manufacture other web systems.`
    },
    {
      company: 'SMN Information Technology',
      role: 'Frontend Developer',
      url: '',
      path: '',
      period: 'Nov/2016 - Sep/2017',
      description: `Together with my team I developed Web SPA with Angular for Unimed (Hospital in Brazil), This application management and follow services status. I helped in other Web applications with maintenance and changes, I worked in the furniture assembly management system and by the management of the Magalu (store) and I worked in other applications.`
    },
    {
      company: 'SMN Information Technology',
      role: 'Frontend Developer',
      url: '',
      path: '',
      period: 'Nov/2016 - Sep/2017',
      description: `I was studying Javascript, Jquery, HTML, CSS and created logo icons, developed web pages (landing page, SPA).`
    }
  ]

  return (
    <ContentContainer title="Experience">
      <div className="experience">
        {experiences.map((item, index) => (
          <div className="item" key={index}>
            <div className="title">
              <CompanyLogo
                name={item.company}
                url={item.url}
                path={item.path}
              />
              <div>
                <h4>{`${item.company} - ${item.role}`}</h4>
                <p>{item.period}</p>
              </div>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}
