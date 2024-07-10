type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";
type Year = "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30";
export type MonthYear = `${Month} 20${Year}`;
