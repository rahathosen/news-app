export default function CurrentTIme() {
  // Create arrays for days and months
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the current date
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <div>
      <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400  text-sm bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
        <span className="font-semibold ">{`${dayOfWeek}`}</span>,{" "}{`${month} ${day}, ${year}`}       
      </span>
    </div>
  );
}
