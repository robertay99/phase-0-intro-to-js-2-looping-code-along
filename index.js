// Code your solutions in this file
function writeCards(names, event) {
    const messages = []; // Create an empty array to hold messages
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages; // Return the array of messages
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  function countDown(num) {
    let i = num; // Start from the given number
    while (i >= 0) {
      console.log(i); // Log the current number
      i--; // Decrement the counter
    }
  }
  
  countDown(10);
  