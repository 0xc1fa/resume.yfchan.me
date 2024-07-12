import { GeneralInfo, WorkExperienceInfo } from "@/types/contactInfo";
import { markdown } from "@/utils/markdown";
import M from "markdown-to-jsx";

/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
export const projectData: GeneralInfo[] = [
  {
    title: "Wavy: A web-based Music Workstation (Individual)",
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
        Enhanced UX with a **resizable** and **scrollable** canvas featuring
        history, import/export, and clipboard functionalities.
      </M>,
      <M>
        Integrated backend voice synthesizer enabling the **generation of vocal
        tracks**.
      </M>,
      <M>
        Provided an isolated library for **custom utilization** and **style
        modification**. | Demo video:
        [http://youtu.be/uQ2K_xgbq7g](http://youtu.be/uQ2K_xgbq7g)
      </M>,
    ],
  },
  {
    title: "ICMS: Course Management Dashboard (Group)",
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
        **Led a 5-people backend development team** and was fully responsible
        for the **frontend** and **database** of the application.
      </M>,
      <M>
        Provides **real-time course schedules** and information based on the
        user's context and timing.
      </M>,
      <M>
        Integrated a **facial recognition** component for login using
        **Python**.
      </M>,
    ],
  },

  {
    title:
      "2-player Game: Game Utilizing Socket and Multi-threading (Individual)",
    details: [
      <M>
        Integrated **socket programming**, **multi-threading** to manage game
        state and user interactions.
      </M>,
      <M>
        Implemented a dynamic **Java Swing** GUI for real-time game status
        updates and player interactions.
      </M>,
      <M>
        Improved game stability by handling **network disruptions** and **player
        disconnections** effectively.
      </M>,
    ],
  },

  {
    title: "Folded: A interactive GUI card game (Individual)",
    details: [
      <M>
        Developed a **Java-based** card game using Swing, managing shuffling,
        betting, and rule enforcement.
      </M>,
      <M>
        Created interactive GUI elements for card replacement and result
        evaluation.
      </M>,
    ],
  },
];
