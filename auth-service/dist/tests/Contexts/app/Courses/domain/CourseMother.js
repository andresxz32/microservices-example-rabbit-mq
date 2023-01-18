"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMother = void 0;
const CourseNameMother_1 = require("./CourseNameMother");
const CourseIdMother_1 = require("../../Shared/domain/Courses/CourseIdMother");
const Course_1 = require("../../../../../src/Contexts/app/Courses/domain/Course");
class CourseMother {
    static create(id, name) {
        return new Course_1.Course({ id, name });
    }
    static fromRequest(request) {
        return this.create(CourseIdMother_1.CourseIdMother.create(request.id), CourseNameMother_1.CourseNameMother.create(request.name));
    }
    static random() {
        return this.create(CourseIdMother_1.CourseIdMother.random(), CourseNameMother_1.CourseNameMother.random());
    }
}
exports.CourseMother = CourseMother;
//# sourceMappingURL=CourseMother.js.map