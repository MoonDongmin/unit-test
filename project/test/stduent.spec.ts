import { describe, expect, it } from "bun:test";
import { Student } from "./student.ts";

describe("Student", () => {
    it("should createStudent", () => {
        const student = new Student(1, "John");
        student.createStudent(student);

        expect(student.stdentList.length).toBe(1);
    });

    it("should deleteStudent", () => {
        const student = new Student(1, "John");
        student.deleteStudent(1);
        expect(student.stdentList).toEqual([]);
    });

    it("should verifyStudent", () => {
        const student = new Student(1, "John");
        student.createStudent(student);
        const result = student.verifyStudent(1);
        expect(result).toEqual(student);
    });

    it("should throw error when verifyStudent", () => {
        const student = new Student(1, "John");
        expect(() => student.verifyStudent(2)).toThrow("Student not found");
    });

});