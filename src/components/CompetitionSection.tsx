import { competitionData } from "@/data/competitionData";
import { Collapsible } from "./CollapsibleTitle";

const dateFormat = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "short",
});

export function CompetitionSection() {
	return (
		<section id="compeititions-section">
			<h2>Competitions, Honors and Awards</h2>
			<ul className="no-bullets">
				{competitionData.map((x, index) => (
					<li key={index}>
						<Collapsible
							title={
								<h3>
									{x.title} [{dateFormat.format(x.date)}]
								</h3>
							}
						>
							<ul>
								{x.bullets.map((b, index) => (
									<li key={index}>{b}</li>
								))}
							</ul>
						</Collapsible>
					</li>
				))}
			</ul>
		</section>
	);
}
