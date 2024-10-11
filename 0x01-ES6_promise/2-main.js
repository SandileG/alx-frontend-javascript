// 2-main.js
import handleResponseFromAPI from './2-then';

const promise = Promise.resolve(); // You can change this to Promise.reject() to test the rejection case
handleResponseFromAPI(promise);
