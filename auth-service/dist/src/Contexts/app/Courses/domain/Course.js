"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const CourseId_1 = require("../../Shared/domain/Courses/CourseId");
const CourseName_1 = require("./CourseName");
class Course {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
    }
    static fromPrimitives(plainData) {
        return new Course({
            id: new CourseId_1.CourseId(plainData.id),
            name: new CourseName_1.CourseName(plainData.name)
        });
    }
    toPrimitives() {
        return {
            id: this.id.value,
            name: this.name.value
        };
    }
}
exports.Course = Course;
//# sourceMappingURL=Course.js.map