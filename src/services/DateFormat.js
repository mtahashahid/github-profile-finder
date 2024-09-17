import { format } from "date-fns";

export default function formatDate(date) {
  const formattedDate = format(new Date(date), "dd MMM yyyy");
  // Output formattedDate: "03 Nov 2019"
  return formattedDate;
}
