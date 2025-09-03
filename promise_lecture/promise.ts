// Promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World');
//     }, 3000);
// });
// console.log(promise);

// promise.then((value) => {
//     console.log(value);
// }).catch((reason) => {
//     console.log('ERROR', reason)
// });

// console.log('I am not blocked');

// Reading Files using Promises

import fs from 'fs'

// const promise = new Promise((resolve, reject) => {
//     fs.readFile('./someFile', (err, data) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(data.toString());
//         }
//     });
// });

// promise.then((value) => {
//     console.log(value);
// }).catch((reason) => {
//     console.log('ERROR', reason)
// });

// or we can use
// fs.readFile('./someFile', (err, data) => {
//     if (err) {
//         console.log('ERROR', err);
//     } else {
//         console.log(data.toString());
//     }
// });

// Making Network Requests using Promises

import axios from 'axios';

// const result = axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
//     console.log(response.data);
// }).catch((reson) => {
//     console.log(reson);
// });

// Async Await

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World');
//     }, 3000);
// });

// const myAsyncFunction = async () => {
//     await promise;
//     console.log('I am not blocked');
// }

// myAsyncFunction();

// Promise All

