function fetchArray() {
  return new Promise((resolve) => {
    resolve([1, 2, 3, 4, 5]);
  });
}

// manejo la promesa con then y un callback

const promise = fetchArray().then((arr) => {
  console.log(arr);
  return arr.map((num) => num + 1);
});

promise.then((result) => console.log(result));

fetchArray()
  .then((arr) => arr.map((num) => num + 1))
  .then((result) => console.log(result));
