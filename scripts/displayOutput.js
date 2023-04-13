/* Get the current date from the system */
const today = new Date();

/* extract the year, month, and date from current date */
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
const currentYear = today.getFullYear();

/* Create a list of days of a month  */
const daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

function calculateOutput() {
  const { month, day, year } = inputDate;

  /* calculate years */
  yearOutput = currentYear - year;

  /* calculate months */
  if (currentMonth >= month)
    /* get month when currentMonth is greater that month input */
    monthOutput = currentMonth - month;
  else {
    /* if input month exceeds currentMonth */
    yearOutput--;
    monthOutput = currentMonth + 12 - month;
  }

  /* calculate days  */
  if (currentDay >= day) {
    /* when the current date is greater */
    dayOutput = currentDay - day;
  } else {
    /*  if input date is greater than currentDay
        get daysPerMonth from the previous month 
        and subtract the day to get the remaining days 
      */
    dayOutput = daysPerMonth[currentMonth - 1] + currentDay - day;

    /*  w/o counting currentYear add 12 to the month to find the difference */
    if (monthOutput < 0) {
      monthOutput = 11;
      yearOutput--;
    }
  }
  return {
    years: yearOutput,
    months: monthOutput,
    days: dayOutput,
  };
}

function displayOutput() {
  const { years, months, days } = calculateOutput();

  /* Get output elements and animate result  */
  animateValue('year-result', 0, years, 1500);
  animateValue('month-result', 0, months, (2600 / 13) * (months + 1));
  animateValue('day-result', 0, days, (3100 / 31) * (days||1));
}

function animateValue(element, start, end, duration) {
  const currentElement = document.getElementById(element);
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    currentElement.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
