import React from 'react';

interface Props {
  date: string;
}

const RelativeDate: React.FC<Props> = ({ date }) => {
  // Convert the input date string to a Date object
  const inputDate = new Date(date);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  // Define time units
  const minute = 60 * 1000; // 1 minute in milliseconds
  const hour = 60 * minute; // 1 hour in milliseconds
  const day = 24 * hour; // 1 day in milliseconds
  const month = 30 * day; // 1 month in milliseconds
  const year = 365 * day; // 1 year in milliseconds

  // Determine the appropriate format based on the time difference
  let relativeDate: string;
  if (timeDifference > year) {
    // More than a year ago, show the exact date
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    relativeDate = inputDate.toLocaleDateString(undefined, options);
  } else if (timeDifference > month) {
    // Less than a year but more than a month ago
    const monthsAgo = Math.floor(timeDifference / month);
    relativeDate = `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
  } else if (timeDifference > day) {
    // Less than a month but more than a day ago
    const daysAgo = Math.floor(timeDifference / day);
    relativeDate = `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  } else if (timeDifference > hour) {
    // Less than a day but more than an hour ago
    const hoursAgo = Math.floor(timeDifference / hour);
    relativeDate = `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  } else {
    // Less than an hour ago
    const minutesAgo = Math.floor(timeDifference / minute);
    relativeDate = `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
  }

  return relativeDate;
};

export default RelativeDate;
