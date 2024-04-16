function calc(...args) {
    
    if (args.length % 2 !== 1) {
      throw new Error('Invalid number of arguments');
    }
  
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '%': 2,
      '^': 3
    };
  
    const stack = [];
    const output = [];
  
    for (const arg of args) {
      if (typeof arg === 'number') {
        if (arg > 1000) { 
          output.push(0);
        } else {
          output.push(arg);
        }
      } else if (arg in precedence) {
        while (
          stack.length &&
          precedence[arg] <= precedence[stack[stack.length - 1]]
        ) {
          output.push(stack.pop());
        }
        stack.push(arg);
      } else {
        throw new Error('Invalid operator');
      }
    }
  
    while (stack.length) {
      output.push(stack.pop());
    }
  
    const evaluate = (a, operator, b) => {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          if (b === 0) {
            throw new Error('Division by zero');
          }
          return a / b;
        case '%':
          return a % b;
        case '^':
          return Math.pow(a, b);
        default:
          throw new Error('Invalid operator');
      }
    };
  
    for (const token of output) {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(evaluate(a, token, b));
      }
    }
  
    return stack[0];
  }
  
  module.exports = calc;
