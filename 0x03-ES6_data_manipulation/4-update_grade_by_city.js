export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      newGrades.map(((Grades) => {
        // correct ids
        if (Grades.studentId === student.id) {
          // make sure theright grade are assigned the right student
          student.grade = Grades.grade;
		}
		  if (student.grade === undefined) {
		// if students grade is undefined, assign N/A to it
          student.grade = 'N/A';
        }
        return student;
      }));
      return student;
    });
}
