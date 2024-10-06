export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees, // Use computed property names to set the department name
  };
}
