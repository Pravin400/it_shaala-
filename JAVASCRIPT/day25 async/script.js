// A Promise is an object representing an asynchronous operation
// A Promise has three states: pending, resolved, or rejected

const p1 = new Promise((resolve, reject) => {
    // Simulating a heavy operation (e.g., fetching data from an API, reading a file, etc.)

    resolve("data we got after our promise has been resolved"); // Successfully resolved promise

    reject("data will not be resolved"); // This will be ignored since resolve was already called
});

// Consuming the promise (handling the resolved or rejected state)

p1.then(data => console.log("From .then:", data)) 
    // Executes when the promise is resolved
    .catch(err => console.log("From .catch:", err)); 
    // Executes when the promise is rejected
