import { WorkExperienceInfo } from "@/types/contactInfo";
import M from "markdown-to-jsx";

/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
export const workData: WorkExperienceInfo[] = [
	{
		company: "Hospital Authority",
		posts: [
			{
				title: "Contract Junior Programmer - Full-time",
				fromDate: new Date("2024-08"),
				toDate: "now",
				details: [
					<M>
						Integrated and managed **Kafka** messaging systems within **Spring
						Boot** applications.
					</M>,
					<M>
						Implemented load testing with **k6** and unit testing with **JUnit**
						to ensure application performance and reliability.
					</M>,
					<M>
						Managed CI/CD pipeline using **GitHub Actions** to deploy
						applications to **OpenShift** via **Kubernetes**.
					</M>,
				],
			},
		],
	},
	{
		company: "NovBee",
		posts: [
			{
				title: "Full Stack Developer - Internship",
				fromDate: new Date("2023-08"),
				toDate: new Date("2024-01"),
				details: [
					<M>
						Developed the company **voting platform API and website**, handling
						both frontend and backend development.
					</M>,
					<M>
						Designed and implemented backend infrastructure and database schema
						on **Azure**, enhancing system reliability.
					</M>,
					<M>
						Integrated **user authentication** functionality into the system
						website.
					</M>,
					// <M>
					// 	Applied knowledge in **Node.js, React, TypeScript, Python,
					// 	PostgreSQL, GraphQL, Azure**.
					// </M>,
				],
			},
			{
				title: "Software Developer - Internship",
				fromDate: new Date("2023-06"),
				toDate: new Date("2023-08"),
				details: [
					<M>
						Developed an **data crawling system** with automatic ranking and
						filtering to enhance data quality.
					</M>,
					<M>
						Engineered a **data processing system** to efficiently process
						**over 500 hours** of audio and text data.
					</M>,
					<M>
						Managed full-stack development of the company website and API,
						ensuring seamless integration and functionality.
					</M>,
					// <M>
					// 	Applied knowledge in **Node.js, React, TypeScript, PostgreSQL,
					// 	GraphQL, Azure**.
					// </M>,
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
						Enhanced **Google search ranking** of 10 keywords **to the top 3
						positions** through refined SEO strategies.
					</M>,
					<M>
						Increased email engagement rates by **17-22%** by introducing
						interactive web contents.
					</M>,
					<M> Utilized 3D modeling techniques to simulate event venues.</M>,
				],
			},
		],
	},
];
