import { CourseCreator } from '../../../Contexts/app/Courses/application/CourseCreator';
export declare class CoursePutController {
    private readonly _courseCreator;
    constructor(_courseCreator: CourseCreator);
    createCourse(course: any): Promise<void>;
}
