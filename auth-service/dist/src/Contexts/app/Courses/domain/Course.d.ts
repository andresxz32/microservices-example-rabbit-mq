import { CourseId } from "../../Shared/domain/Courses/CourseId";
import { CourseName } from "./CourseName";
export declare class Course {
    readonly id: CourseId;
    readonly name: CourseName;
    constructor({ id, name }: {
        id: CourseId;
        name: CourseName;
    });
    static fromPrimitives(plainData: {
        id: string;
        name: string;
        duration: number;
    }): Course;
    toPrimitives(): any;
}
