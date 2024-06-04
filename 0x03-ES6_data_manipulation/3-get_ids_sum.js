export default function getStudentIdsSum(listOfStudents) {
  // Return 0 if listOfStudents is not an array
  if (!Array.isArray(listOfStudents)) return 0;

  const reducedSumOfIDs = listOfStudents.reduce(
    (sum, student) => sum + student.id,
    0
  );
  return reducedSumOfIDs;
}
