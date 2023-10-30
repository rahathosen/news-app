export default async function getData() {
  const res = await fetch("https://the-daily-morning.vercel.app/api/content", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
