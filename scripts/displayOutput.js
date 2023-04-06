/* Create a list of days of a month  */
let daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/* Get the current date from the system */
let today = new Date();

/* extract the year, month, and date from current date */
let currentMonth = today.getMonth();
let currentDay = today.getDate();
let currentYear = today.getFullYear();

function calculateTimePassed() {
  clearError('month');
  clearError('day');
  clearError('year');

  validateInputDate();
}

function calculateOutput() {
  let { month, day, year } = inputDate;

  /* calculate years */
  yearOutput = currentYear - year;

  /* calculate months */
  if (currentMonth + 1 >= month)
    /* get month when currentMonth is greater that month input */
    monthOutput = currentMonth + 1 - month;
  else {
    yearOutput--;
    /* if input month exceeds currentMonth */
    monthOutput = currentMonth + 1 - month + 12;
  }

  /* update for Leap Years  */
  if ((!(year % 4) && year % 100) || !(year % 400)) daysPerMonth[1] = 29;

  /* calculate days  */
  if (currentDay >= day) {
    /* when the current date is greater */
    dayOutput = currentDay - day;
  } else {
    /*  
        if input date is greater than currentDay
        get days per month from the previous month? 
        and subtract the day to get the remaining days 
      */
    dayOutput = daysPerMonth[currentMonth - 1] + currentDay - day;

    /*  w/o counting currentYear add 12 to the month to find the difference */
    if (monthOutput < 0) {
      monthOutput = 11;
      yearOutput--;
    }
  }

  outputToDisplay = {
    years: yearOutput,
    months: monthOutput,
    days: dayOutput,
  };

  return outputToDisplay;
}

function displayOutput() {
  let output = calculateOutput();

  /* Get output elements and animate result  */
  animateValue(document.getElementById('year-result'), 0, output.years, 1500);
  animateValue(document.getElementById('month-result'), 0, output.months,((2600 / 13) * (output.months+1)));
  animateValue(document.getElementById('day-result'), 0, output.days, (3100 / 31) * output.days);
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
