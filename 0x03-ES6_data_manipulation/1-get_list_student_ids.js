export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) return [];
  const arrayOfIDs = objArray.map((obj) => obj.id);
  return arrayOfIDs;
}
