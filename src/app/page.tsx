import { CertSection } from "@/components/CertSection";
import { CompetitionSection } from "@/components/CompetitionSection";
import { EducationSection } from "@/components/EducationSection";
import Header from "@/components/Header";
import { Hotkeys } from "@/components/Hotkeys";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";
import Toast from "@/components/Toast";
import { WorkSection } from "@/components/WorkSection";
import { getCommitHash } from "@/utils/getCommitHash";
import { Suspense } from "react";

export default async function Home() {
	const thisHash = await getCommitHash();

	return (
		<>
			<Hotkeys />
			<Suspense>
				<Toast thisHash={thisHash} />
			</Suspense>
			<Header />
			<EducationSection />
			<CompetitionSection />
			<WorkSection />
			<CertSection />
			<ProjectSection />
			<SkillsSection />
		</>
	);
}
