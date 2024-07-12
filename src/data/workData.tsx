import { WorkExperienceInfo } from "@/types/contactInfo";
import M from "markdown-to-jsx";

/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
export const workData: WorkExperienceInfo[] = [
  {
    company: "NovBee Limited",
    posts: [
      {
        title: "Full Stack Developer - Internship",
        fromDate: new Date("2023-08"),
        toDate: new Date("2024-01"),
        details: [
          <M>
            Developing the company website and related API service using
            **Node.js, React, and Python**.
          </M>,
          <M>
            Conceived and executed the **backend infrastructure** and **database
            schema** for the company utilizing Azure.
          </M>,
          <M>
            Incorporated **user authentication** functionality into the system
            website.
          </M>,
          <M>
            Applied knowledge in **Node.js, React, TypeScript, Python,
            PostgreSQL, GraphQL, Azure**.
          </M>,
        ],
      },
      {
        title: "Software Developer - Internship",
        fromDate: new Date("2023-06"),
        toDate: new Date("2023-08"),
        details: [
          <M>
            Engineered a data processing pipeline that gather and cleanup **500+
            hours of audio data** using **Python and Selenium**.
          </M>,
          <M>
            Engineered a Singing Voice Synthesis model that result in high MOS
            utilizing **PyTorch**.
          </M>,
          <M>
            Developed the company website and related API service using
            **Node.js and React**.
          </M>,
          <M>
            Applied knowledge in **Node.js, React, TypeScript, PostgreSQL,
            GraphQL, Azure**.
          </M>,
        ],
      },
    ],
  },
  {
    company: "Homie Living",
    posts: [
      {
        title: "Digital Marketing and Data Analytics Intern - Internship",
        fromDate: new Date("2022-05"),
        toDate: new Date("2022-08"),
        details: [
          <M>
            Enhanced Google search ranking of **10 keywords** to the **top 3
            positions** through refined **SEO** strategies.
          </M>,
          <M>
            Increased email open and engagement rates by **22%** and **17%**
            respectively by improving content quality.
          </M>,
          <M>Applied knowledge in **Python** and **SEO**.</M>,
        ],
      },
    ],
  },
];
