export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees); // Get arrays of employees from each department
  let employeeList = [];

  // Flatten the array of employees into one list
  for (const department of allEmployees) {
    employeeList = [...employeeList, ...department];
  }

  // Return the iterator for the employeeList
  return employeeList[Symbol.iterator]();
}
