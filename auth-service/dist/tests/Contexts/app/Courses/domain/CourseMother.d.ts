import { Course } from '../../../../../src/Contexts/app/Courses/domain/Course';
import { CourseName } from '../../../../../src/Contexts/app/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/app/Shared/domain/Courses/CourseId';
import { CreateCourseRequest } from '../../../../../src/Contexts/app/Courses/application/CreateCourseRequest';
export declare class CourseMother {
    static create(id: CourseId, name: CourseName): Course;
    static fromRequest(request: CreateCourseRequest): Course;
    static random(): Course;
}
