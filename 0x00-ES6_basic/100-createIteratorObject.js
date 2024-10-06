export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  let employeeList = [];

  for (const department of allEmployees) {
    employeeList = [...employeeList, ...department];
  }

  // Return the iterator for the employeeList
  return employeeList[Symbol.iterator]();
}
