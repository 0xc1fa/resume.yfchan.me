import { FaExternalLinkAlt } from "react-icons/fa";
import { CertItem } from "./CertItem";
import { certData } from "@/data/certsData";
import { certificationSiteUrl } from "@/data/url";

export function CertSection() {
  return (
    <section id="professional-certifications-section">
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <a
          href={certificationSiteUrl}
          target="_blank"
          style={{ color: "var(--accent-color)" }}
        >
          Professional Certification&nbsp;
          <FaExternalLinkAlt style={{ fontSize: "0.9rem" }} />
        </a>
      </h2>
      <ul className="no-bullets">
        {certData.map((x, index) => (
          <CertItem key={index} {...x} />
        ))}
      </ul>
    </section>
  );
}
