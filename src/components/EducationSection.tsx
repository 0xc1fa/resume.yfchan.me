export function EducationSection() {
	return (
		<section id="education-section">
			<h2>Education</h2>
			<ul className="no-bullets">
				<li>
					<details open>
						<summary>
							<h3 className="inline-block">The University of Hong Kong</h3>
							<div className="float-right font-bold">
								Sept 2019 &ndash; June 2024
							</div>
						</summary>
						<div className="italic">BEng in Computer Engineering</div>
						<ul>
							<li>Penultimate Year GPA: 3.85 | Final Year GPA: 3.64</li>
							<li>
								A+ in key courses including Operating Systems, Digital System
								Design, Probabilistic Systems Analysis
							</li>
							<li>
								A-range in key courses including Advanced DB Systems, AI, ML,
								Computer Networks, Algorithm design, OOP & Java
							</li>
						</ul>
					</details>
				</li>
			</ul>
		</section>
	);
}
