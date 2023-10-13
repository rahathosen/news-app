export default async function getData() {
  const res = await fetch("https://www.dailyudayan.com/api/blogpost", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
