"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepositoryMock = void 0;
class CourseRepositoryMock {
    constructor() {
        this.saveMock = jest.fn();
    }
    async save(course) {
        this.saveMock(course);
    }
    assertSaveHaveBeenCalledWith(expected) {
        expect(this.saveMock).toHaveBeenCalledWith(expected);
    }
}
exports.CourseRepositoryMock = CourseRepositoryMock;
//# sourceMappingURL=CourseRepositoryMock.js.map