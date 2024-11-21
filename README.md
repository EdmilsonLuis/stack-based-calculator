# Stack-based Calculator with Reverse Polish Notation (RPN)

This project is a simple stack-based calculator that supports mathematical expressions in Reverse Polish Notation (RPN). It converts infix expressions into RPN and evaluates the result. The implementation uses a stack data structure for both the conversion and calculation processes, providing an efficient and easy-to-understand way to handle mathematical expressions.

## Features

- **Infix to RPN Conversion**: Converts traditional infix expressions (e.g., `3 + 5 * (2 - 8)`) into RPN (e.g., `3 5 2 8 - * +`).
- **RPN Evaluation**: Evaluates mathematical expressions written in Reverse Polish Notation.
- **Operator Precedence and Associativity**: Supports operators like `+`, `-`, `*`, `/`, and `^` with correct precedence and associativity.

## How It Works

1. **Tokenizer**: The input expression is tokenized into an array of numbers and operators.
2. **Shunting Yard Algorithm**: The infix expression is converted to Reverse Polish Notation using an algorithm based on Dijkstra's Shunting Yard algorithm.
3. **RPN Evaluation**: The Reverse Polish Notation expression is evaluated using a stack to handle the operators and operands.

## Example Usage

```js
// Tokenizing and converting infix expression to RPN
const tokens = tokenizer("3-20*10^2");
console.log("Tokens:", tokens);

// Convert infix to RPN
const rpn = reverse(tokens);
console.log("RPN:", rpn);

// Calculate the result of the RPN expression
const result = calculate(rpn);
console.log("Result:", result);  // Output: 197
```

## Supported Operators

- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `^` (Exponentiation)

## Operator Precedence and Associativity

The following operator precedence and associativity rules are implemented:

| Operator | Precedence | Associativity |
|----------|------------|---------------|
| `^`      | 4          | Right         |
| `*`, `/` | 3          | Left          |
| `+`, `-` | 2          | Left          |

- **Precedence**: Operators with higher precedence are evaluated first.
- **Associativity**: Determines the direction in which operators with the same precedence are evaluated.
  - **Left-associative**: Operators like `+`, `-`, `*`, `/` are evaluated from left to right.
  - **Right-associative**: The `^` operator (exponentiation) is evaluated from right to left.

## How to Run

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/edmilsonluis/stack-based-calculator.git
```

### Step 2: Open and Run the Code

You can run the JavaScript file in any modern browser's developer console or use Node.js.

1. **In the browser**: Open the `index.html` file in your browser and use the developer console to run JavaScript.
2. **Using Node.js**: If you prefer to run the code using Node.js, simply open the terminal and run:

```bash
node rpn-calculator.js
```

### Step 3: Testing

You can modify the example expression in the code and see how the calculator works for different expressions.#   s t a c k - b a s e d - c a l c u l a t o r  
 