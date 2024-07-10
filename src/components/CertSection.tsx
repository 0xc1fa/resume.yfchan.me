import { FaExternalLinkAlt } from "react-icons/fa";
import { CertItem } from "./CertItem";
import { certData } from "@/data/certsData";

export function CertSection() {
  return (
    <section id="professional-certifications-section">
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <a
          href="http://058264110432-certifications-site-ap-east-1.s3-website.ap-east-1.amazonaws.com"
          target="_blank"
          style={{ color: "var(--accent-color)" }}
        >
          Professional Certification&nbsp;
          <FaExternalLinkAlt style={{ fontSize: "0.9rem" }} />
        </a>
      </h2>
      <ul className="no-bullets">
        {certData.map((x) => (
          <CertItem key={x.title} {...x} />
        ))}
      </ul>
    </section>
  );
}
