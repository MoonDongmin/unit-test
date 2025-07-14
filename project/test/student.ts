export class Student {
    private studentId: number;
    private name: string;
    public stdentList: Array<Student> = [];

    constructor(_studentId: number, _name: string) {
        this.studentId = _studentId;
        this.name = _name;
    }

    createStudent(student: Student) {
        this.stdentList.push(student);
    }
    deleteStudent(studentId: number) {
        this.stdentList = this.stdentList.filter(student => student.studentId !== studentId);
    }

    verifyStudent(studentId: number): Student {
        const student = this.stdentList.find(student => student.studentId === studentId);
        if (!student) {
            throw new Error("Student not found");
        }
        return student;
    }

}