import { MonthYear } from "@/types/date";

export type CertItemProps = {
  title: string;
  vendor: Vendor;
  date: MonthYear;
};
export function CertItem(props: CertItemProps) {
  return (
    <li style={{ marginBottom: "0.1rem" }}>
      <strong>{props.title}</strong>
      <span className="mobile-hide">
        &nbsp;&mdash; {props.vendor} [{props.date}]
      </span>
    </li>
  );
}
