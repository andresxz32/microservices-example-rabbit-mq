import { CourseNameMother } from '../domain/CourseNameMother';
import { CourseIdMother } from '../../Shared/domain/Courses/CourseIdMother';
import { CourseName } from '../../../../../src/Contexts/app/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/app/Shared/domain/Courses/CourseId';
import { CreateCourseRequest } from '../../../../../src/Contexts/app/Courses/application/CreateCourseRequest';

export class CreateCourseRequestMother {
    static create(id: CourseId, name: CourseName): CreateCourseRequest {
        return { id: id.value, name: name.value};
    }

    static random(): CreateCourseRequest {
        return this.create(CourseIdMother.random(), CourseNameMother.random());
    }

    static invalidRequest(): CreateCourseRequest {
        return {
            id: CourseIdMother.random().value,
            name: CourseNameMother.invalidName()
        };
    }
}