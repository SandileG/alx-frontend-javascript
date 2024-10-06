export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Create a new array to hold the modified values

  for (const value of array) { // Use for...of to iterate over array values
    newArray.push(appendString + value); // Append the modified value to newArray
  }

  return newArray; // Return the new array instead of modifying the input array
}
