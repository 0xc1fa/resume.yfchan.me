import {
  FaDownload,
  FaBullhorn,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { HeaderItem, HeaderItemProps } from "./HeaderItem";
import { getCommitHash } from "@/utils/getCommitHash";

export default async function Header() {
  const commitHash: string = await getCommitHash();

  const items: HeaderItemProps[] = [
    {
      title: "Download",
      href: "http://resume.yfchan.me/Chan_Yat_Fu_Jacky.pdf",
      download: "Chan_Yat_Fu_Jacky.pdf",
      icon: <FaDownload />,
      screenOnly: true,
    },
    {
      title: "Check updates",
      href: `http://resume.yfchan.me/?from=${commitHash}`,
      icon: <FaBullhorn />,
      printOnly: true,
    },
    {
      title: "+852 6467 6899",
      icon: <FaPhoneAlt />,
    },
    {
      title: "yfchan.career@gmail.com",
      href: "mailto:yfchan.career@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      title: "0x001f",
      href: "https://github.com/0x001f",
      icon: <FaGithub />,
    },
    {
      title: "in/yatfuchan",
      href: "https://linkedin.com/in/yatfuchan",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <header>
      <h1>Chan Yat Fu Jacky</h1>
      {/* <div id="prev-commit-hash" hidden>
        {commitHash}
      </div> */}
      <address>
        {items.map((x) => (
          <HeaderItem key={x.title} {...x} />
        ))}
      </address>
    </header>
  );
}
