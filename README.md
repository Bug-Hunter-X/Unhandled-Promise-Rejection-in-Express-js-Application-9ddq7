# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: improper handling of promise rejections in asynchronous operations.  The `bug.js` file showcases the issue, while `bugSolution.js` provides the corrected implementation.

## Problem

The `bug.js` example uses an asynchronous operation (`someAsyncOperation`) that has a 50% chance of failing.  If the operation fails, the error is logged to the console, but the client receives no indication of the error. This can lead to a silent failure and a poor user experience.  Furthermore, unhandled promise rejections can crash the Node.js process.

## Solution

The `bugSolution.js` file demonstrates the correct approach. It uses a `try...catch` block to handle errors that occur during asynchronous operations.  The client now receives a proper error response (e.g., a 500 status code), providing feedback and a better user experience.  Additionally, handling the rejection prevents the process from crashing.

## How to Run

1. Clone the repository
2. Navigate to the repository directory
3. Install dependencies: `npm install express`
4. Run the buggy code: `node bug.js`
5. Run the solution: `node bugSolution.js`
