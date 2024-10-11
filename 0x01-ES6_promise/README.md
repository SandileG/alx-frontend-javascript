# JavaScript Promises and Async/Await

In this project, we'll explore key concepts in JavaScript related to asynchronous programming, including Promises, async/await, and error handling with try/catch. By the end of this, you'll have a good understanding of how to handle asynchronous operations efficiently, avoid callback hell, and manage errors properly.

---

## Promises
A **Promise** in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation. Promises provide a way to handle asynchronous code more elegantly than traditional callbacks.

- **Why use Promises?**
  Promises allow for cleaner and more manageable code when working with asynchronous tasks such as network requests, file I/O, or timers.

- **How Promises Work:**
  A promise has three states:
  - **Pending**: Initial state, neither fulfilled nor rejected.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed.

### Key Methods of Promise:
1. **then()**: Used to specify what should happen when the promise is fulfilled.
   ```js
   promise.then((result) => { /* success handler */ });
   ```

2. **catch()**: Used to handle errors or rejections.
   ```js
   promise.catch((error) => { /* error handler */ });
   ```

3. **finally()**: Runs after the promise is either fulfilled or rejected.
   ```js
   promise.finally(() => { /* cleanup */ });
   ```

4. **resolve()**: Creates a resolved promise.
   ```js
   Promise.resolve(value);
   ```

5. **reject()**: Creates a rejected promise.
   ```js
   Promise.reject(error);
   ```

---

## Async/Await
The **async/await** syntax simplifies working with promises, allowing you to write asynchronous code in a more synchronous-looking manner.

### **async**:
- Declares a function as asynchronous. This function will return a promise implicitly.
   ```js
   async function fetchData() {
     // async code
   }
   ```

### **await**:
- Pauses the execution of an async function until the promise is fulfilled or rejected.
   ```js
   const result = await promise;
   ```

- **Why use async/await?**
  It makes the code more readable and easier to follow when dealing with complex chains of asynchronous operations.

---

## Try/Catch (Error Handling)
JavaScript provides the **try/catch** block for error handling.

- **Throw**: Used to manually trigger an error.
   ```js
   throw new Error('Something went wrong');
   ```

- **Try/Catch**: Wraps code that might throw an error. If an error occurs, it is caught and handled gracefully.
   ```js
   try {
     // code that may throw an error
   } catch (error) {
     // error handler
   }
   ```

### Combining Try/Catch with Async/Await:
When using async/await, you can use try/catch to handle errors within async functions.

```js
async function fetchData() {
  try {
    const result = await fetch(url);
    // process result
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Assignment Scope
- **Implement Promises**: Use promises to handle asynchronous operations such as fetching data or performing delayed tasks.
- **Utilize async/await**: Refactor promise-based code to use the async/await syntax for improved readability and control flow.
- **Error Handling**: Incorporate proper error handling with try/catch blocks in both promise chains and async functions.

---


