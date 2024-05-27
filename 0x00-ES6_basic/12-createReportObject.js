export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(allEmployyesObj) {
      return Object.keys(allEmployyesObj).length;
    },
  };

  return newObject;
}
