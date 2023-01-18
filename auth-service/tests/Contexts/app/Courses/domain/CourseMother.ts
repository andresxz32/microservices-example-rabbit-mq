import { CourseNameMother } from './CourseNameMother';
import { CourseIdMother } from '../../Shared/domain/Courses/CourseIdMother';
import { Course } from '../../../../../src/Contexts/app/Courses/domain/Course';
import { CourseName } from '../../../../../src/Contexts/app/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/app/Shared/domain/Courses/CourseId';
import { CreateCourseRequest } from '../../../../../src/Contexts/app/Courses/application/CreateCourseRequest';


export class CourseMother {
  static create(id: CourseId, name: CourseName): Course {
    return new Course({ id, name });
  }

  static fromRequest(request: CreateCourseRequest): Course {
    return this.create(
      CourseIdMother.create(request.id),
      CourseNameMother.create(request.name)
    );
  }

  static random(): Course {
    return this.create(CourseIdMother.random(), CourseNameMother.random());
  }
}