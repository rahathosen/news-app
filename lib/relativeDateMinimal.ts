import React from "react";

interface Props {
  date: string;
}

const RelativeDateMinimal: React.FC<Props> = ({ date }) => {
  // Convert the input date string to a Date object
  const inputDate = new Date(date);

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  // Format the input date according to the specified options
  const formattedDate = inputDate.toLocaleDateString(undefined, options);

  return formattedDate;
};

export default RelativeDateMinimal;
