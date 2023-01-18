import { Course } from '../../../../../src/Contexts/app/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/app/Courses/domain/CourseRepository';
export declare class CourseRepositoryMock implements CourseRepository {
    private saveMock;
    constructor();
    save(course: Course): Promise<void>;
    assertSaveHaveBeenCalledWith(expected: Course): void;
}
