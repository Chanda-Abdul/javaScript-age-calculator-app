/* Create a list of days of a month  */
let daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/* Get the current date from the system */
let today = new Date();

/* extract the year, month, and date from current date */
let currentMonth = today.getMonth();
let currentDay = today.getDate();
let currentYear = today.getFullYear();

function calculateTimePassed() {
  document.querySelector('.month-error').classList.remove('display-error');
  document.querySelector('.day-error').classList.remove('display-error');
  document.querySelector('.year-error').classList.remove('display-error');

  validateInputDate();
}

function calculateOutput() {
  let { month, day, year } = inputDate;

  /* calculate years */
  yearOutput = currentYear - year;

  /* calculate months */
  if (currentMonth >= month)
    /* get month when currentMonth is greater that month input */
    monthOutput = currentMonth - month;
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

  /* Get output elements */
  let yearDisplay = document.getElementById('year-result');
  let monthDisplay = document.getElementById('month-result');
  let dayDisplay = document.getElementById('day-result');

  /* Then output result  */
  yearDisplay.innerHTML = output.years;
  monthDisplay.innerHTML = output.months;
  dayDisplay.innerHTML = output.days;
}
