// Write a function named guardrail that will accept one argument mathFunction (Function).
// This function should create and return an array named queue. When the mathFunction
//  function is executed, the value returned by the function should be appended to the queue.
// If this function throws an error, the error message should be appended to the queue.
// In every case, the message Guardrail was processed should be added to the queue.
// Basically, the queue should be a log of all the operations that were performed
// on the mathFunction function using the guardrail function.

// Logic: try/catch/finally

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
