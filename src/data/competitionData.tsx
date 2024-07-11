import { MonthYear } from "@/types/date";
import { markdown } from "@/utils/markdown";

type CompetitionDataItem = {
  title: React.ReactNode | string;
  date: Date;
  bullets: (React.ReactNode | string)[];
};

export const competitionData: CompetitionDataItem[] = [
  {
    title: markdown`
Finalist -- HKU Generative AI Hackathon for Social Good
    `,
    date: new Date("2023-10"),
    bullets: [
      markdown`
        **Led a team of 5 developers** to secure **2nd runner-up** in the Productive Collaborative Work Award
      `,
      markdown`
        Ranked as a **finalist out of 24 teams** by developing an ADHD-targeted application using **Spring Boot**, **Java**, and **React**.
      `,
    ],
  },
  {
    title: markdown`
Winner -- HKU Final Year Project Competition
    `,
    date: new Date("2024-04"),
    bullets: [
      markdown`
        Distinguished as one of the **11 winners (top 8%)** among 136 HKU CE/EEE final year projects.
      `,
      markdown`
        Worked on the title of "Implementation of a Singing Voice Synth with MIDI Programming" using React, FastAPI, and PyTorch.
      `,
    ],
  },
];
