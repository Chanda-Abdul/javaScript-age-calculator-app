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
  clearError('month');
  monthInputValue = +monthInput.value;
});

dayInput.addEventListener('input', function () {
  clearError('day');
  dayInputValue = +dayInput.value;
});

yearInput.addEventListener('input', function () {
  clearError('year');
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
  if (dayInputValue == null || '') {
    validDay = false;
    showError('day-input-error', 'day-error', 'This field is required');
  } else if (
    day > daysPerMonth[month - 1] ||
    day > 31 ||
    day < 1 ||
    (day > currentDay && month == currentMonth + 1 && year == currentYear)
  ) {
    validDay = false;
    showError('day-input-error', 'day-error', 'Must be a valid day');
  }

  /* Validate Month */
  if (monthInputValue == null || '') {
    validMonth = false;
    showError('month-input-error', 'month-error', 'This field is required');
  } else if (
    (month > currentMonth + 1 && year == currentYear) ||
    month < 1 ||
    month > 12 ||
    (day > currentDay && month == currentMonth + 1 && year == currentYear)
  ) {
    validMonth = false;
    showError('month-input-error', 'month-error', 'Must be a valid month');
  }

  /* Validate Year */
  if (yearInputValue == null || '') {
    validYear = false;
    showError('year-input-error', 'year-error', 'This field is required');
  } else if (year > currentYear || year < 1) {
    validYear = false;
    showError('year-input-error', 'year-error', 'Must be in the past');
  }

  if (validMonth && validDay && validYear) {
    document.getElementById('btn-calculate').classList.add('slide-right');

    displayOutput();
  } else {
    document.getElementById('btn-calculate').classList.add('slide-left');

    return false;
  }
}

function showError(errorElement, errorMessageElement, errorMessage) {
  document.getElementById(errorElement).classList.add('input-error');
  document.getElementById(errorMessageElement).classList.add('display-error');
  document.getElementById(errorMessageElement).innerHTML = errorMessage;
}

function clearError(element) {
  document.getElementById('btn-calculate').classList.remove('slide-right');
  document.getElementById('btn-calculate').classList.remove('slide-left');
  document.getElementById(`${element}-error`).classList.remove('display-error');
  document
    .getElementById(`${element}-input-error`)
    .classList.remove('input-error');
}
