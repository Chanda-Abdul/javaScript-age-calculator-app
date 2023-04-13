import { validateInputDate } from './userInput';

describe('validate full Input Date function', () => {
  test('should return true for valid input', () => {
    // Arrange
    const yearInputValue = 2022;
    const monthInputValue = 4;
    const dayInputValue = 12;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(true);
  });

  test('should return false for invalid input', () => {
    // Arrange
    const yearInputValue = null;
    const monthInputValue = 13;
    const dayInputValue = 32;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(false);
  });
});


describe('Check for leap year', () => {
  test('should return true for valid leap year input', () => {
    // Arrange
    const yearInputValue = 2000;
    const monthInputValue = 2;
    const dayInputValue = 29;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(true);
  });

  test('should return false for invalid leap year input', () => {
    // Arrange
    const yearInputValue = 2001;
    const monthInputValue = 2;
    const dayInputValue = 29;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(false);
  });
});


describe('Check recent days', () => {
  test('should return true for yesterdat', () => {
    // // Arrange
    // const yearInputValue = 2000;
    // const monthInputValue = 2;
    // const dayInputValue = 29;

    // // Act
    // const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // // Assert
    // expect(result).toBe(true);
  });

  test('should return false for tomorrow', () => {
    // // Arrange
    // const yearInputValue = 2001;
    // const monthInputValue = 2;
    // const dayInputValue = 29;

    // // Act
    // const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // // Assert
    // expect(result).toBe(false);
  });

  test('should return 0 for today', () => {
    // // Arrange
    // const yearInputValue = 2001;
    // const monthInputValue = 2;
    // const dayInputValue = 29;

    // // Act
    // const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // // Assert
    // expect(result).toBe(false);
  });
});

describe('Check for later date in current month', () => {
  // test('should return true for valid leap year input', () => {
  //   // Arrange
  //   const yearInputValue = 2000;
  //   const monthInputValue = 2;
  //   const dayInputValue = 29;

  //   // Act
  //   const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

  //   // Assert
  //   expect(result).toBe(true);
  // });

  // test('should return false for invalid leap year input', () => {
  //   // Arrange
  //   const yearInputValue = 2001;
  //   const monthInputValue = 2;
  //   const dayInputValue = 29;

  //   // Act
  //   const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

  //   // Assert
  //   expect(result).toBe(false);
  // });
});

describe('Check for correct days per month', () => {
  // test('should return true for valid leap year input', () => {
  //   // Arrange
  //   const yearInputValue = 2000;
  //   const monthInputValue = 2;
  //   const dayInputValue = 29;

  //   // Act
  //   const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

  //   // Assert
  //   expect(result).toBe(true);
  // });

  // test('should return false for invalid leap year input', () => {
  //   // Arrange
  //   const yearInputValue = 2001;
  //   const monthInputValue = 2;
  //   const dayInputValue = 29;

  //   // Act
  //   const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

  //   // Assert
  //   expect(result).toBe(false);
  // });
});

describe('validate Input Date function for each input field', () => {
  test('should return true for valid day input', () => {
    // Arrange
    const yearInputValue = 2022;
    const monthInputValue = 4;
    const dayInputValue = 12;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(true);
  });

  test('should return false for invalid day input', () => {
    // Arrange
    const yearInputValue = 2001;
    const monthInputValue = 12;
    const dayInputValue = 32;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(false);
  });

  test('should return true for valid month input', () => {
    // Arrange
    const yearInputValue = 2020;
    const monthInputValue = 4;
    const dayInputValue = 5;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(true);
  });

  test('should return false for invalid month input', () => {
    // Arrange
    const yearInputValue = 1999;
    const monthInputValue = 14;
    const dayInputValue = 12;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(false);
  });

  test('should return true for valid year input', () => {
    // Arrange
    const yearInputValue = 2011;
    const monthInputValue = 10;
    const dayInputValue = 10;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(true);
  });

  test('should return false for invalid year input', () => {
    // Arrange
    const yearInputValue = 2033;
    const monthInputValue = 12;
    const dayInputValue = 12;

    // Act
    const result = validateInputDate(yearInputValue, monthInputValue, dayInputValue);

    // Assert
    expect(result).toBe(false);
  });
});

  

describe('Validate that the function clears the error message when a valid day is entered', () => {
  test('validateInputDate clears the error message when a valid day is entered', () => {
    // Arrange
    const yearInputValue = 2001;
    const monthInputValue = 12;
    let dayInputValue = 32;

    // Act
    validateInputDate(yearInputValue, monthInputValue, dayInputValue);

// Assert
expect(document.getElementById('day-error').classList.contains('display-error')).toBe(true);
expect(document.getElementById('day-error').innerHTML).toBe('Must be a valid day');

dayInputValue = 15;

// Act
validateInputDate(yearInputValue, monthInputValue, dayInputValue);

// Assert
expect(document.getElementById('day-error').classList.contains('display-error')).toBe(false);
expect(document.getElementById('day-error').innerHTML).toBe('Must be a valid day').toBe(false);


  });

});
