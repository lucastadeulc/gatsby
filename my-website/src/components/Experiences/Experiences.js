import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import './styles.css';

const experiences = [
  {
    company: "Baires Dev - Senior Software Engineer",
    date: "May, 2021 | July, 2023",
    client: "Client: Think it first",
    description: [
      "Created, developed, and maintained over 20 WordPress sites with HTML, CSS, Javascript, PHP, and WP Sage.",
      "Transformed multiple UI design and web page design into responsive and pixel-perfect custom themes, built from scratch, on multiple WordPress sites.",
      "Developed multiple WordPress plugins for various complex and unique features, including integrations with Woocommerce, Woocommerce Subscriptions, Woocommerce Teams, Stripe, Hubspot, and other API’s.",
      "Collaborated with account executives, creative directors, designers, and project managers to determine an appropriate approach and develop plans for the creation and delivery of sustainable code adhering to WordPress PHP Coding Standards.",
      "Conducted code reviews of projects. Identified and improved repetitive or non-optimal areas of the codebase. Worked to improve internal procedures, processes, communication, and ran knowledge sharing meetings.",
      "Participated in the testing phase of projects in collaboration with the internal project team. Defined and implemented solutions for bugs and usability problems that arose from testing.",
      "Acted as a technical support resource for non-developer team members, bridging design and development. Created documentation for the development team.",
      "Adhered to ADA compliance and SEO best practices while developing sites, also improving site speed. Followed agile methodologies and performed unit testing.",
      "Guided other developers in BairesDev, teaching PHP and WordPress."
    ],
    derivables: [
      "<a href='https://heavyocity.com/'>https://heavyocity.com/</a> - Worked on the creation of the new theme from scratch, and on plugins for the integration of Wordpress and Shopify. Also worked on the support of the server and error tracking, resulting in Heavyocity best black friday sale.",
      "<a href='https://vetgirlontherun.com/'>https://vetgirlontherun.com/</a> - Worked on the development of plugins integrated with Woocommerce, which made possible the addition of new features for over 100,000 subscribers.",
      "<a href='https://elmwealth.com/'>https://elmwealth.com/</a> - Worked on the creation of a pixel perfect theme.",
      "<a href='https://salterspiralstair.com/'>https://www.salterspiralstair.com/</a>",
      "<a href='https://mattressauthority.com/'>https://mattressauthority.org/</a>",
      "And many others."
    ]
  },
  {
    company: "Dextra - Senior Software Engineer & Team Leader",
    date: "Nov, 2020 | May, 2021",
    client: "Client: Service Central | RepairQ",
    description: [
      "Architected, developed and tested the solution using Yii framework and Lumen.",
      "Acted as a Team Leader of a 10-developer pod.",
      "Prioritized the backlog, ensured meeting delivery dates and gave support to the development team. Followed agile methodologies and performed unit testing.",
      "Developed an integration from RepairQ with Apple, making possible the connection with Apple Authorized Service Providers.",
      "Developed a POC for Google under 15 days, which resulted in Service Central's biggest contract."
    ]
  },
  {
    company: "Startup Runner - Senior Software Engineer",
    date: "Mar, 2020 | Apr, 2021 | Part Time",
    client: "Client: Startup Runner | Socap Global, Artist Marketplace and others",
    description: [
      "Developed Wordpress themes and plugins for startups from the US, including payment gateway integrations for Stripe and Boleto.",
      "Worked closely with the CEO of Artist Marketplace on the development of their Wordpress multisite, making possible the Brazilian version of the website.",
      "Adhered to ADA compliance and SEO best practices while developing sites, also improving site speed. Followed agile methodologies and performed unit testing."
    ],
  },
  {
    company: "Polo IT - Systems Analyst & Team Leader",
    date: "Dec, 2019 | Nov, 2020",
    client: "Client: Polo IT | Intelimonitor",
    description: [
      "Led the development team and worked as a Systems Analyst, working directly on the architecture and design of implementations. Collaborated with clients and stakeholders to make sure scoping and quality meet desired standards.",
      "Created microservice-oriented systems and mobile apps.",
      "Followed agile methodologies and performed unit testing."
    ],
  },
  {
    company: "Toquio 4 - Software Engineer",
    date: "Apr, 2015 | Sep, 2020 | Part Time",
    client: "Client: Toquio 4 | Salvador Card and others",
    description: [
      "Architected, created and developed (both backend and frontend of) the system responsible for organizing BRL $5 million monthly sales, including deposit conference, financial reports and business intelligence.",
      "Followed agile methodologies and performed unit testing."
    ],
  },
  {
    company: "COGEL - Senior Software Engineer & Development Manager",
    date: "Jun, 2013 | Dec, 2019",
    client: "Client: City Government",
    description: [
      "Worked closely with upper management to make sure that the scope, direction, and quality of each project was on schedule and in line with the proposals.",
      "Coordinated the team with exceptional resource gathering, followed agile methodologies and performed unit testing.",
      "Developed reliable solutions with big improvements for the city."
    ],
  },
];

const ExperiencesAccordion = () => {
  return (
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible >
      {experiences.map((experience, index) => (
        <Accordion.Item className="AccordionItem" value={`item-${index + 1}`} key={`item-${index + 1}`}>
          <Accordion.Trigger className="AccordionTrigger">
            <div className="TriggerLeft">{experience.company}</div>
            <div className="TriggerRight">{experience.date}</div>
          </Accordion.Trigger>
          <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">
              <b>{experience.client}</b>
              {experience.description.map((paragraph, paragraphIndex) => (
                <p key={`p-${index}-${paragraphIndex}`}>{paragraph}</p>
              ))}
              {experience.derivables && experience.derivables.length > 0 && (
                <div>
                  <b>Derivables:</b>
                  {experience.derivables.map((derivable, derivableIndex) => (
                    <p
                      key={`d-${index}-${derivableIndex}`}
                      dangerouslySetInnerHTML={{ __html: derivable }}
                    ></p>
                  ))}
                </div>
              )}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default ExperiencesAccordion;