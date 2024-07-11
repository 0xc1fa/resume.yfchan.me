import { GeneralInfo, WorkExperienceInfo } from "@/types/contactInfo";
import { markdown } from "@/utils/markdown";

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
      markdown`
        Enhanced UX with a **resizable** and **scrollable** canvas featuring history, import/export, and clipboard functionalities.
      `,
      markdown`
        Integrated backend voice synthesizer enabling the **generation of vocal tracks**.
      `,
      markdown`
        Provided an isolated library for **custom utilization** and **style modification**. | Demo video: [http://youtu.be/uQ2K_xgbq7g](http://youtu.be/uQ2K_xgbq7g)
      `,
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
      markdown`
        **Led a 5-people backend development team** and was fully responsible for the **frontend** and **database** of the application.
      `,
      markdown`
        Provides **real-time course schedules** and information based on the user&apos;s context and timing.
      `,
      markdown`
        Integrated a **facial recognition** component for login using **Python**.
      `,
    ],
  },

  {
    title:
      "2-player Game: Game Utilizing Socket and Multi-threading (Individual)",
    details: [
      markdown`
        Integrated **socket programming**, **multi-threading** to manage game state and user interactions.
      `,
      markdown`
        Implemented a dynamic **Java Swing** GUI for real-time game status updates and player interactions.
      `,
      markdown`
        Improved game stability by handling **network disruptions** and **player disconnections** effectively.
      `,
    ],
  },

  {
    title: "Folded: A interactive GUI card game (Individual)",
    details: [
      markdown`
        Developed a **Java-based** card game using Swing, managing shuffling, betting, and rule enforcement.
      `,
      markdown`
        Created interactive GUI elements for card replacement and result evaluation.
      `,
    ],
  },
];
