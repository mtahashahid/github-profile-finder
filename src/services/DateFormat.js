import { format } from "date-fns";

/**
 * This function will return formatted date
 * @param {*} date
 * @returns formattedDate
 */

export default function formatDate(date) {
  const formattedDate = format(new Date(date), "dd MMM yyyy");
  // Output formattedDate: "03 Nov 2019"
  return formattedDate;
}
