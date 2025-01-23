const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    // Error handling missing here
    console.error(err); //Logs error, but doesn't handle it for the client
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const success = Math.random() < 0.5; // 50% chance of failure
    setTimeout(() => {
      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}