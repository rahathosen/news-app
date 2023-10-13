export default async function GetNavigation() {
  const res = await fetch("https://www.dailyudayan.com/api/navigation", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
