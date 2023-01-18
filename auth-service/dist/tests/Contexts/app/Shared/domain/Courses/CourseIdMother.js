"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseIdMother = void 0;
const CourseId_1 = require("../../../../../../src/Contexts/app/Shared/domain/Courses/CourseId");
const UuidMother_1 = require("../../../../Shared/domain/UuidMother");
class CourseIdMother {
    static create(value) {
        return new CourseId_1.CourseId(value);
    }
    static random() {
        return this.create(UuidMother_1.UuidMother.random());
    }
}
exports.CourseIdMother = CourseIdMother;
//# sourceMappingURL=CourseIdMother.js.map