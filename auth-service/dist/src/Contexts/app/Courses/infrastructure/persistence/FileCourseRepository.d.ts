import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";
export declare class FileCourseRepository implements CourseRepository {
    private FILE_PATH;
    save(course: Course): Promise<void>;
    search(courseId: string): Promise<Course>;
    private _filePath;
}
