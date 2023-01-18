"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseMother_1 = require("../domain/CourseMother");
const CreateCourseRequestMother_1 = require("./CreateCourseRequestMother");
const CourseRepositoryMock_1 = require("../__mocks__/CourseRepositoryMock");
const CourseCreator_1 = require("../../../../../src/Contexts/app/Courses/application/CourseCreator");
const CourseNameLengthExceeded_1 = require("../../../../../src/Contexts/app/Courses/domain/CourseNameLengthExceeded");
let repository;
let creator;
beforeEach(() => {
    repository = new CourseRepositoryMock_1.CourseRepositoryMock();
    creator = new CourseCreator_1.CourseCreator(repository);
});
describe('CourseCreator', () => {
    it('should create a valid course', async () => {
        const request = CreateCourseRequestMother_1.CreateCourseRequestMother.random();
        const course = CourseMother_1.CourseMother.fromRequest(request);
        await creator.run(request);
        repository.assertSaveHaveBeenCalledWith(course);
    });
    it('should throw error if course name length is exceeded', async () => {
        expect(() => {
            const request = CreateCourseRequestMother_1.CreateCourseRequestMother.invalidRequest();
            const course = CourseMother_1.CourseMother.fromRequest(request);
            creator.run(request);
            repository.assertSaveHaveBeenCalledWith(course);
        }).toThrow(CourseNameLengthExceeded_1.CourseNameLengthExceeded);
    });
});
//# sourceMappingURL=CourseCreator.test.js.map