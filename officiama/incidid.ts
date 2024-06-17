class School {
  private students: Student[];
  private teachers: Teacher[];

  constructor() {
    this.students = [];
    this.teachers = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  getStudents() {
    return this.students;
  }

  getTeachers() {
    return this.teachers;
  }
}
