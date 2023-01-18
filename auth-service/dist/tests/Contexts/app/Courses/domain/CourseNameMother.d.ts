import { CourseName } from '../../../../../src/Contexts/app/Courses/domain/CourseName';
export declare class CourseNameMother {
    static create(value: string): CourseName;
    static random(): CourseName;
    static invalidName(): string;
}
