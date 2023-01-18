"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseNameMother = void 0;
const CourseName_1 = require("../../../../../src/Contexts/app/Courses/domain/CourseName");
const WordMother_1 = require("../../../Shared/domain/WordMother");
class CourseNameMother {
    static create(value) {
        return new CourseName_1.CourseName(value);
    }
    static random() {
        return this.create(WordMother_1.WordMother.random({ maxLength: 20 }));
    }
    static invalidName() {
        return "a".repeat(40);
    }
}
exports.CourseNameMother = CourseNameMother;
//# sourceMappingURL=CourseNameMother.js.map