// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      resolve('Responce from API');
    }, 1000);
  });
}
