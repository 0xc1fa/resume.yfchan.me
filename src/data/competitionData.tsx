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
    title: (
      <M>Finalist &mdash; HKU Generative AI Hackathon for Social Good</M>
    ),
    date: new Date("2023-10"),
    bullets: [
      <M>
        **Led a team of 5 developers** to secure **2nd runner-up** in the
        Productive Collaborative Work Award.
      </M>,
      <M>
        Ranked as a **finalist out of 24 teams** by developing an ADHD-targeted
        application using **Spring Boot**, **Java**, and **React**.
      </M>,
    ],
  },
  {
    title: <M>Winner &mdash; HKU Final Year Project Competition</M>,
    date: new Date("2024-04"),
    bullets: [
      <M>
        Distinguished as one of the **11 winners (top 8%)** among 136 HKU CE/EEE
        final year projects.
      </M>,
      <M>
        Worked on the title of "Implementation of a Singing Voice Synth with
        MIDI Programming" using React, FastAPI, and PyTorch.
      </M>,
    ],
  },
];
