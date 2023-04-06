# Frontend Mentor - Age calculator app

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

# Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


# Overview

## The challenge

Your challenge is to build out an age calculator app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

<b>Your users should be able to: </b>

- [x] View an age in <i>years</i>, <i>months</i>, and <i>days</i> after submitting a valid date through the form
- [x] Receive validation errors if:
  - [x] Any field is empty when the form is submitted
  - [x] The day number is not between <i>1-31</i>
  - [x] The month number is not between <i>1-12</i>
  - [x] The year is in the future
  - [x] The date is invalid e.g. <i>31/04/1991(there are 30 days in April)</i> 
- [x] View the optimal layout for the interface depending on their device's screen size
- [x] See hover and focus states for all interactive elements on the page
- [x] **Bonus**: See the age numbers animate to their final number when the form is submitted

## Screenshots
### Mobile
#### Initial
![](/assets/screens/mobile-initial.png)
#### Valid Input
![](/assets/screens/mobile-valid.png)
#### Invalid Empty Input
![](/assets/screens/mobile-error-null.png)
#### Invalid  Input
![](/assets/screens/mobile-error.png)
### Desktop
#### Initial
![](/assets/screens/desktop-initial.png)
#### Valid Input
![](/assets/screens/desktop-valid.png)
#### Invalid Empty Input
![](/assets/screens/desktop-error-null.png)
#### Invalid  Input
![](/assets/screens/desktop-error.png)
## Links

- Solution URL: [here](https://github.com/Chanda-Abdul/javaScript-age-calculator-app)
- Live Site URL: [here](https://heartfelt-peony-aad13d.netlify.app/)

# My process

## Built with

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="30" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="30" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="30" /> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="30" /> <img src="https://camo.githubusercontent.com/56a25d7a80ecd7be0919314d76dcae961ea7aac32dac11a7aa81644afa6daa53/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d42454d26636f6c6f723d303030303030266c6f676f3d42454d266c6f676f436f6c6f723d464646464646266c6162656c3d" alt="BEM icon" height="30" /> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma icon" height="30" /> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify icon" height="30" />

## What I learned

- Becoming more comfortable using <b>Sass</b> with <b>BEM</b> styling conventions for <b>CSS</b>
- <b>JavaScript DOM Manipulation</b>
- JavaScript <b>`Date()`</b>
- Validation for user date inputs 
  - Validates year for current year and previous months
  - Validates month input for current month and  previous months
  - Validates month input for current day and  previous days, also checks for leap year
  - also animates the ➡ button 
    ```ts
    function validateInputDate() {
      /* collect input from HTML form and convert into date format */
      inputDate = {
        ...
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
      } else if ( day > daysPerMonth[month - 1] || day > 31 || day < 1 || (day > currentDay && month == currentMonth + 1 && year == currentYear)
      ) {
        validDay = false;
        showError('day-input-error', 'day-error', 'Must be a valid day');
      }

      /* Validate Month */
      if (monthInputValue == null || '') {
        validMonth = false;
        showError(...);
      } else if (
        (month > currentMonth + 1 && year == currentYear) || month < 1 || month > 12 ||
        (day > currentDay && month == currentMonth + 1 && year == currentYear)
      ) {
        validMonth = false;
        showError(...);
      }

      /* Validate Year */
      if (yearInputValue == null || '') {
        validYear = false;
        showError(...);
      } else if (year > currentYear || year < 1) {
        validYear = false;
        showError(...);
      }

      if (validMonth && validDay && validYear) {
        document.getElementById('btn-calculate').classList.add('slide-right');
        displayOutput();

      } else {
        document.getElementById('btn-calculate').classList.add('slide-left');
        return false;
      }
    }
    ```
- Dynamically use JavaScript to add/clear error classes to HTML elements
    ```js
    function showError(errorElement, errorMessageElement, errorMessage) {
      document.getElementById(errorElement).classList.add('input-error');
      document.getElementById(errorMessageElement).classList.add('display-error');
      document.getElementById(errorMessageElement).innerHTML = errorMessage;
    }

    function clearError(element) {
      document.getElementById('btn-calculate').classList.remove('slide-right');
      document.getElementById('btn-calculate').classList.remove('slide-left');
      document.getElementById(`${element}-error`).classList.remove('display-error');
      document.getElementById(`${element}-input-error`).classList.remove('input-error');
    }
    ```
- Animated JavaScript Counter for output results
in `displayOutput.js`

    ```js
    function displayOutput() {
      let output = calculateOutput();

      /* Get output elements and animate result  */
      animateValue(document.getElementById('year-result'), 0, output.years, 1500);
      ...

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
    ```



## Useful resources

- [Standard built-in objects `Date()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - JavaScript `Date()` objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of <i>January 1, 1970, UTC (the epoch)</i>.
- [ChatGPT](https://chat.openai.com/) - to write the instructions... and some JavaScript
- [Age Calculator | Javascript Project](https://youtu.be/Mz9COyHPVwA) - To get some ideas
- [How to display JavaScript form error message in html form](https://youtu.be/nNIr0lF7KnU) - This helped.
- [Animating Number Counters](https://css-tricks.com/animating-number-counters/) -  How to use CSS counters to animate a number by adjusting the count.
- [A Handy Little System for Animated Entrances in CSS](https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/) 

## Author

- Website - [Chanda Abdul](https://www.Chandabdul.dev)
- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)

