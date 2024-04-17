# Unit-Testing-Task-

**String Calculator**

**Please make sure to do each step as its own commit and make sure to follow AAA pattern and test driven development. And make sure to include all possible test cases and achieve 100% coverage:**

1. **Create a simple calculator function.** 
2. You need to pass these test cases, it is important to properly implement the **`calc`** function.

```jsx
// calculator.test.js
const calc = require('./calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
  });
});
```

1. To enhance the test coverage and ensure thorough testing, add additional test cases. It is advised to intentionally make these new test cases fail initially. This approach allows for more robust validation of the **`calc`** function implementation. Once the new test cases fail, proceed with implementing the necessary changes in the **`calc`** function to make them pass 
2. **Allow `calc`** **to handle an unknown amount of numbers.**
3. **Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2**
