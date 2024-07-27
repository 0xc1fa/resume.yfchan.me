import M from "markdown-to-jsx";

type CompetitionDataItem = {
	title: React.ReactNode | string;
	date: Date;
	bullets: (React.ReactNode | string)[];
};

/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
export const competitionData: CompetitionDataItem[] = [
	{
		title: <M>Finalist &mdash; HKU Generative AI Hackathon for Social Good</M>,
		date: new Date("2023-10"),
		bullets: [
			<M>
				Built a **clinical management system** using **Java/Spring Boot** with
				AI features to enhance doctor-client interactions.
			</M>,
			<M>
				**Led a team of 5 developers** to secure a top-3 position in the
				Productive Collaborative Work Award.
			</M>,
		],
	},
	{
		title: (
			<M>Winner (Individual) &mdash; HKU Final Year Project Competition</M>
		),
		date: new Date("2024-04"),
		bullets: [
			<M>
				Engineered an **AI-powered audio editing platform**, leveraging
				synthesis models to enhance user experiences.
			</M>,
			<M>
				Recognized as one of the winners among 136 final year projects at HKU
				CE/EEE.
			</M>,
		],
	},
];
