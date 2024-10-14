Here’s a detailed README covering **Classes** and **Metaprogramming**:

---

# JavaScript: Classes and Metaprogramming

## Overview

This project dives into JavaScript's advanced object-oriented programming (OOP) concepts, specifically **Classes** and **Metaprogramming**. By the end, you'll understand how to define and manipulate classes, and harness the power of metaprogramming techniques using symbols and proxies.

---

## Classes in JavaScript

### 1. Defining a Class

A **class** in JavaScript provides a blueprint for creating objects. It allows you to define the structure and behavior of objects by grouping properties and methods together. Here's how you can define a class:

```js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

In this example:
- **constructor()** is a special method that initializes new instances of the class. It automatically runs when a new object is created from the class.

### 2. Adding Methods to a Class

Methods are functions that belong to a class. They are defined within the class body but outside the constructor.

```js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
```

- The method `greet` can be called on an instance of the class like this:

```js
const user = new User('Alice', 25);
console.log(user.greet()); // Output: Hello, my name is Alice.
```

### 3. Static Methods

**Static methods** belong to the class itself rather than instances of the class. They are called directly on the class and are useful for utility or helper functions.

```js
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(2, 3)); // Output: 5
```

In this case, the `add` method can be accessed directly on the `MathHelper` class, without needing to create an instance.

### 4. Extending a Class

You can create a subclass that inherits properties and methods from a parent class using the `extends` keyword. This allows for **inheritance** and code reuse.

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi, I'm ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, position) {
        super(name); // Calls the constructor of the parent class
        this.position = position;
    }

    describe() {
        return `${this.name} works as a ${this.position}`;
    }
}

const employee = new Employee('Bob', 'Developer');
console.log(employee.greet()); // Output: Hi, I'm Bob
console.log(employee.describe()); // Output: Bob works as a Developer
```

- The `super()` method calls the constructor of the parent class, allowing access to inherited properties.

---

## Metaprogramming

**Metaprogramming** refers to the ability of a program to manipulate or introspect itself at runtime. In JavaScript, metaprogramming can be achieved using features like **symbols** and **proxies**.

### 1. Symbols

Symbols are unique and immutable primitive values that can be used as object keys. They are useful for adding "hidden" properties to objects that won't interfere with other code.

```js
const sym = Symbol('description');
const user = {
    [sym]: 'This is a hidden value',
    name: 'John',
};

console.log(user.name); // Output: John
console.log(user[sym]); // Output: This is a hidden value
```

- Symbols prevent naming collisions because each symbol is unique, even if they have the same description.

### 2. Proxies

A **proxy** allows you to intercept and redefine fundamental operations of objects, such as property lookups, assignments, and function invocations.

```js
const handler = {
    get: function(target, prop) {
        if (prop === 'age') {
            return 'Private';
        }
        return target[prop];
    }
};

const user = { name: 'Alice', age: 30 };
const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name); // Output: Alice
console.log(proxyUser.age); // Output: Private
```

- In this example, the proxy intercepts access to the `age` property and returns 'Private' instead of the actual value.

---

## Learning Objectives

By the end of this project, you should be able to:
- **Define a Class**: Understand how to create and use classes for object-oriented programming in JavaScript.
- **Add Methods to a Class**: Know how to add instance and static methods to your classes.
- **Static Methods**: Learn when and how to use static methods for utility functions.
- **Extend a Class**: Understand how to use inheritance to extend the functionality of existing classes.
- **Metaprogramming**: Gain knowledge of symbols and proxies, and how they can be used for advanced programming techniques.

---
