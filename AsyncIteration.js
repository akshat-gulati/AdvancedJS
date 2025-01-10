async function* asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Usage
  const iterator = asyncGenerator();
//   iterator.next().then(console.log); // { value: 1, done: false }
//   iterator.next().then(console.log); // { value: 2, done: false }
//   iterator.next().then(console.log); // { value: 3, done: false }
//   iterator.next().then(console.log); // { value: undefined, done: true }



//   For Await...Of Loop
// The for await...of loop is used to iterate over async iterable objects. It can be used inside an async function or a module:

async function processAsyncIterable(iterable) {
  for await (const value of iterable) {
    console.log(value);
  }
}

// Usage
processAsyncIterable(asyncGenerator());


// Practical Example
// Here's a practical example of using async iteration to fetch data from an API in chunks:

async function* fetchChunks(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    if (value) {
      yield value;
    }
  }
}

// Usage
async function processChunks(url) {
  for await (const chunk of fetchChunks(url)) {
    console.log(new TextDecoder().decode(chunk));
  }
}

processChunks('https://api.example.com/data');