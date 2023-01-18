import { CourseName } from '../../../../../src/Contexts/app/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/app/Shared/domain/Courses/CourseId';
import { CreateCourseRequest } from '../../../../../src/Contexts/app/Courses/application/CreateCourseRequest';
export declare class CreateCourseRequestMother {
    static create(id: CourseId, name: CourseName): CreateCourseRequest;
    static random(): CreateCourseRequest;
    static invalidRequest(): CreateCourseRequest;
}
