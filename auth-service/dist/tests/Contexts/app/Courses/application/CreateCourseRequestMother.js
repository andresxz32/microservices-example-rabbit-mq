"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseRequestMother = void 0;
const CourseNameMother_1 = require("../domain/CourseNameMother");
const CourseIdMother_1 = require("../../Shared/domain/Courses/CourseIdMother");
class CreateCourseRequestMother {
    static create(id, name) {
        return { id: id.value, name: name.value };
    }
    static random() {
        return this.create(CourseIdMother_1.CourseIdMother.random(), CourseNameMother_1.CourseNameMother.random());
    }
    static invalidRequest() {
        return {
            id: CourseIdMother_1.CourseIdMother.random().value,
            name: CourseNameMother_1.CourseNameMother.invalidName()
        };
    }
}
exports.CreateCourseRequestMother = CreateCourseRequestMother;
//# sourceMappingURL=CreateCourseRequestMother.js.map