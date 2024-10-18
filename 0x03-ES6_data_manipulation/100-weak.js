// Export the WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize the count for the endpoint
  }

  // Increment the query count for the endpoint
  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  // If the query count is 5 or more, throw an error
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
