import { HeaderItemProps } from "@/components/HeaderItem";
import { getCommitHash } from "@/utils/getCommitHash";
import {
  FaBullhorn,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export async function getHeaderData(): Promise<HeaderItemProps[]> {
  const commitHash: string = await getCommitHash();

  return [
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
      title: "career@yfchan.me",
      href: "mailto:career@yfchan.me",
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
}
