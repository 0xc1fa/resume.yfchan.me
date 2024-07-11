type CollapsibleProps = {
  title: React.ReactElement | string;
  children?: React.ReactElement | string;
};
export function Collapsible(props: CollapsibleProps) {
  return (
    <details open>
      <summary>{props.title}</summary>
      {props.children}
    </details>
  );
}
