# ES6 Projects

This repository contains assignments and tasks focused on learning and implementing ES6 (ECMAScript 2015) features in JavaScript. ES6 introduces powerful new syntax and functionality that make JavaScript development more efficient and maintainable.

## Table of Contents
- [Introduction to ES6](#introduction-to-es6)
- [Features Covered](#features-covered)
  - [Let and Const](#let-and-const)
  - [Arrow Functions](#arrow-functions)
  - [Template Literals](#template-literals)
  - [Rest and Spread Operators](#rest-and-spread-operators)
  - [Object and Array Destructuring](#object-and-array-destructuring)
  - [Modules](#modules)
  - [Iterators and for-of Loops](#iterators-and-for-of-loops)
- [Project Rules and Constraints](#project-rules-and-constraints)
- [Installation](#installation)
- [How to Run the Code](#how-to-run-the-code)
- [Linting and Testing](#linting-and-testing)

## Introduction to ES6

ES6 (also known as ECMAScript 2015) brought significant improvements to JavaScript, making it easier to write cleaner and more efficient code. This project is designed to help developers understand and utilize these modern JavaScript features by working through practical tasks.

## Features Covered

### Let and Const
- `const` is used for declaring variables that are constant and cannot be reassigned. 
- `let` is used for variables that can be reassigned but are block-scoped, reducing scope-related issues present with `var`.

Example:
```js
const pi = 3.14159;
let radius = 10;
```

### Arrow Functions
- Arrow functions provide a concise syntax for defining functions. They have lexical scoping for `this` and can omit the `return` keyword when using implicit returns.

Example:
```js
const square = (x) => x * x;
```

### Template Literals
- Template literals make string interpolation and multi-line strings much simpler by using backticks (`) instead of quotes.

Example:
```js
const name = "World";
const greeting = `Hello, ${name}!`;
```

### Rest and Spread Operators
- The rest operator (`...`) allows functions to accept an indefinite number of arguments as an array. 
- The spread operator (`...`) allows arrays or objects to be expanded in places where multiple elements/arguments are expected.

Example:
```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### Object and Array Destructuring
- Destructuring allows for easy extraction of values from arrays or properties from objects into distinct variables.

Example:
```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;
```

### Modules
- ES6 introduced a module system, allowing code to be split into reusable files. You can use `export` and `import` to share code between files.

Example:
```js
// in math.js
export const add = (a, b) => a + b;

// in main.js
import { add } from './math.js';
```

### Iterators and for-of Loops
- The `for-of` loop provides a convenient way to iterate over iterable objects such as arrays and strings.

Example:
```js
const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
```

## Project Rules and Constraints

1. All files will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
2. Allowed editors: **vi**, **vim**, **emacs**, and **Visual Studio Code**.
3. All files should end with a new line.
4. A `README.md` file is mandatory at the root of the project folder.
5. JavaScript files must use the `.js` extension.
6. Code will be tested using the **Jest Testing Framework**.
7. Code will be analyzed using **ESLint** with specific rules provided.
8. All functions must be exported.

## Installation

1. Clone this repository:
    ```bash
    git clone git@github.com:SandileG/alx-frontend-javascript.git
    ```
2. Navigate into the project directory:
    ```bash
    cd alx-frontend-javascript
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## How to Run the Code

To run the scripts, use the following command:
```bash
npm run dev <file_name>.js
```
Example:
```bash
npm run dev 0-main.js
```

## Linting and Testing

To lint the codebase:
```bash
npm run lint
```

To run the tests:
```bash
npm test
```

To run both linting and tests together:
```bash
npm run full-test
```

---

This `README.md` gives an overview of the ES6 concepts covered and how to set up, run, and test the project.
