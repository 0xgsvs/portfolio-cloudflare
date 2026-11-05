const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return formatter.format(new Date(Date.UTC(year, month - 1, day)));
}
