import { workData } from "@/data/workData";
import { Collapsible } from "./CollapsibleTitle";
import {
	WorkExperienceInfo,
	WorkExperienceInfoWithoutNow,
} from "@/types/contactInfo";

const dateFormat = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "long",
});

export function WorkSection() {
	const getMinDate = (info: WorkExperienceInfo) =>
		info.posts?.reduce(
			(acc, val) => (val.fromDate < acc ? val.fromDate : acc),
			new Date("2080-06")
		);

	const getMaxDate = (info: WorkExperienceInfoWithoutNow) =>
		info.posts?.reduce(
			(acc, val) => (val.toDate > acc ? val.toDate : acc),
			new Date("2001-06")
		);

	return (
		<section id="work-experience-section">
			<h2>Work Experience</h2>
			<ul className="semantic-only">
				{workData.map((item, index) => (
					<li key={index}>
						<Collapsible
							title={
								<>
									<h3 className="inline-block">{item.company}</h3>
									<div className="float-right font-bold">
										{dateFormat.format(getMinDate(item))}&nbsp;&ndash;&nbsp;
										{item.posts?.some(p => p.toDate === "now")
											? "Now"
											: dateFormat.format(
													getMaxDate(item as WorkExperienceInfoWithoutNow)
											  )}
									</div>
								</>
							}
						>
							<ul className="semantic-only">
								{item.posts?.map((p, index) => (
									<li key={index}>
										<h4 className="font-normal italic">
											{p.title} / {dateFormat.format(p.fromDate)}
											&nbsp;&ndash;&nbsp;
											{p.toDate === "now" ? "Now" : dateFormat.format(p.toDate)}
										</h4>
										<ul>
											{p.details?.map((y, index) => (
												<li key={index}>{y}</li>
											))}
										</ul>
									</li>
								))}
							</ul>
						</Collapsible>
					</li>
				))}
			</ul>
		</section>
	);
}
