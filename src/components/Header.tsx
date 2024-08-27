import { HeaderItem, HeaderItemProps } from "./HeaderItem";
import { getHeaderData } from "@/data/headerData";

export default async function Header() {
	const items: HeaderItemProps[] = await getHeaderData();

	return (
		<header>
			<h1>Chan Yat Fu Jacky</h1>
			<address>
				{items.map((x, index) => (
					<HeaderItem key={index} {...x} />
				))}
			</address>
		</header>
	);
}
