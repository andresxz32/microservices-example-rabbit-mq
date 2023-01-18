"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileCourseRepository_1 = require("../../../../../../src/Contexts/app/Courses/infrastructure/persistence/FileCourseRepository");
const CourseMother_1 = require("../../domain/CourseMother");
describe('FileCourseRepository', () => {
    it('should save a course', async () => {
        const repository = new FileCourseRepository_1.FileCourseRepository();
        const expectedCourse = CourseMother_1.CourseMother.random();
        await repository.save(expectedCourse);
        const course = await repository.search(expectedCourse.id.value);
        expect(course).toEqual(expectedCourse);
    });
});
//# sourceMappingURL=FileCourseRepository.test.js.map