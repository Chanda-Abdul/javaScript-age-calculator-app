/* Get user input values */
let monthInput = document.getElementById('month');
let dayInput = document.getElementById('day');
let yearInput = document.getElementById('year');

let monthInputValue = null;
let dayInputValue = null;
let yearInputValue = null;

let inputDate = {
  fullDate: new Date(),
  month: monthInputValue,
  day: dayInputValue,
  year: yearInputValue,
};

/*  Listen for input changes */
monthInput.addEventListener('input', function () {
    monthInputValue = +monthInput.value;
  });
  
  dayInput.addEventListener('input', function () {
    dayInputValue = +dayInput.value;
  });
  
  yearInput.addEventListener('input', function () {
    yearInputValue = +yearInput.value;
  });

function validateInputDate() {
    /* collect input from HTML form and convert into date format */
    inputDate = {
      fullDate: new Date(
        `${yearInputValue}, ${monthInputValue}, ${dayInputValue}`
      ),
      month: monthInputValue,
      day: dayInputValue,
      year: yearInputValue,
    };
  
    let { month, day, year } = inputDate;
  
    /* Validate  Input */
    let validMonth = true;
    let validDay = true;
    let validYear = true;
  
    /* Update month for leap years */
    if ((!(year % 4) && year % 100) || !(year % 400)) daysPerMonth[1] = 29;
  
    /* Validate day of month is within range*/
    if (
      day > daysPerMonth[month - 1] ||
      day > 31 ||
      day < 1 ||
      (day > currentDay && month == currentMonth + 1 && year == currentYear)
    ) {
      validDay = false;
      showError('day-error', 'Must be a valid day');
    }
  
    /* Validate Month */
    if (
      (month > currentMonth + 1 && year == currentYear) ||
      month < 1 ||
      month > 12 ||
      (day > currentDay && month == currentMonth + 1 && year == currentYear)
    ) {
      validMonth = false;
      showError('month-error', 'Must be a valid month');
    }
  
    /* Validate Year */
    if (year > currentYear || year < 1) {
      validYear = false;
      showError('year-error', 'Must be in the past');
    }
  
    if (validMonth && validDay && validYear) {
      displayOutput();
    }
    return false;
  }
  
  function showError(errorElement, errorMessage) {
    document.getElementById(errorElement).classList.add('display-error');
    document.getElementById(errorElement).innerHTML = errorMessage;
  }