export default function getStudentsByLocation(listOfStudents, city) {
  // Return an empty array if listOfStudents is not an array
  if (!Array.isArray(listOfStudents)) return [];

  const filteredByCity = listOfStudents.filter((obj) => obj.location === city);
  return filteredByCity;
}
