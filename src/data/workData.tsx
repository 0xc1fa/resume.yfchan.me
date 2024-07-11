import { WorkExperienceInfo } from "@/types/contactInfo";
import { markdown } from "@/utils/markdown";

export const workData: WorkExperienceInfo[] = [
  {
    company: "NovBee Limited",
    posts: [
      {
        title: "Full Stack Developer - Internship",
        fromDate: new Date("2023-08"),
        toDate: new Date("2024-01"),
        details: [
          markdown`
            Developing the company website and related API service using **Node.js, React, and Python**.
          `,
          markdown`
            Conceived and executed the **backend infrastructure** and **database schema** for the company utilizing Azure.
          `,
          markdown`
            Incorporated **user authentication** functionality into the system website.
          `,
          markdown`
            Applied knowledge in **Node.js, React, TypeScript, Python, PostgreSQL, GraphQL, Azure**.
          `,
        ],
      },
      {
        title: "Software Developer - Internship",
        fromDate: new Date("2023-06"),
        toDate: new Date("2023-08"),
        details: [
          markdown`
            Engineered a data processing pipeline that gather and cleanup **500+ hours of audio data** using **Python and Selenium**.
          `,
          markdown`
            Engineered a Singing Voice Synthesis model that result in high MOS utilizing **PyTorch**.
          `,
          markdown`
            Developed the company website and related API service using **Node.js and React**.
          `,
          markdown`
            Applied knowledge in **Node.js, React, TypeScript, PostgreSQL, GraphQL, Azure**.
          `,
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
          markdown`
            Enhanced Google search ranking of **10 keywords** to the **top 3 positions** through refined **SEO** strategies.
          `,
          markdown`
            Increased email open and engagement rates by **22%** and **17%** respectively by improving content quality.
          `,
          markdown`
            Applied knowledge in **Python** and **SEO**.
          `,
        ],
      },
    ],
  },
];
