export const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function formatDate(date: string | null): string {
  if (!date) return "";
  const [year, month] = date.split("-");
  if (!month) return year; // Fallback for year-only or null
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export function formatDateRange(start: string, end: string | null): string {
  return `${formatDate(start)} - ${end ? formatDate(end) : "Present"}`;
}
