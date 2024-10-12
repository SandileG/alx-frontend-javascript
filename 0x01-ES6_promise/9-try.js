// 9-try.js
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction(); // Execute the math function
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(error.toString()); // Ensure full error message gets captured
  }

  queue.push('Guardrail was processed'); // Append the final message
  return queue; // Return the queue
}
