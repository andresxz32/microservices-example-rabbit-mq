

import { CourseMother } from '../domain/CourseMother';
import { CreateCourseRequestMother } from './CreateCourseRequestMother';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseCreator } from '../../../../../src/Contexts/app/Courses/application/CourseCreator';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/app/Courses/domain/CourseNameLengthExceeded';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
    repository = new CourseRepositoryMock();
    creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
    it('should create a valid course', async () => {
        const request = CreateCourseRequestMother.random();

        const course = CourseMother.fromRequest(request);

        await creator.run(request);

        repository.assertSaveHaveBeenCalledWith(course);
    });

    it('should throw error if course name length is exceeded', async () => {
        expect(() => {
            const request = CreateCourseRequestMother.invalidRequest();

            const course = CourseMother.fromRequest(request);

            creator.run(request);

            repository.assertSaveHaveBeenCalledWith(course);
        }).toThrow(CourseNameLengthExceeded);
    });
});