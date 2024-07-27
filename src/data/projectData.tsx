import { GeneralInfo, WorkExperienceInfo } from "@/types/contactInfo";
import { markdown } from "@/utils/markdown";
import M from "markdown-to-jsx";

/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
export const projectData: GeneralInfo[] = [
	{
		title: "Wavy: A Web-based Music Workstation (Individual)",
		subtitle: (
			<a
				href="http://youtu.be/uQ2K_xgbq7g"
				target="_blank"
				className="mobile-hide"
			>
				Demo Video
			</a>
		),
		details: [
			<M>
				Integrated **AI technology** to synthesize audio based on user
				specifications.
			</M>,
			<M>
				Enabled **real-time data visualization** of user inputs with
				**interactive** modification capabilities.
			</M>,
			<M>
				Incorporated 27 distinct mouse and gesture handling features, optimized
				for both mobile and desktop platforms.
			</M>,
		],
	},
	{
		title: "Index2DB (Java): An Geospatial Database",
		details: [
			<M>
				Engineered a high-performance **indexing system for spatial data**,
				enhancing querying efficiency.
			</M>,
			<M>
				Implemented an **index-powered k-NN search algorithm** for rapid NN
				retrieval using pruning and threshold techniques.
			</M>,
			<M>
				Designed a disk-based data structure for efficient searches of large
				datasets.
			</M>,
		],
	},
	{
		title: "Lighthouse: Guiding Vehicle for the Visually Impaired",
		details: [
			<M>
				**Recognizes speech input** and provides synthesized speech responses
				for **voice command interaction**.
			</M>,
			<M>
				Utilized **computer vision to recognize surroundings** and offers
				real-time feedback with **collision avoidance**.
			</M>,
		],
	},
	{
		title: "ICMS: Interactive Course Management System",
		subtitle: (
			<a
				href="https://www.youtube.com/watch?v=4uMUNsvreuI"
				target="_blank"
				className="mobile-hide"
			>
				Demo Video
			</a>
		),
		details: [
			<M>
				**Led a team of 5** backend developers to deliver real-time course
				schedules and user-tailored information.
			</M>,
			<M>Integrated a **facial recognition login system** using OpenCV.</M>,
		],
	},
];
