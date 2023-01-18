import * as fs from 'fs';
import { Injectable } from "@nestjs/common";
import { deserialize, serialize } from "v8";
import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

@Injectable()
export class FileCourseRepository implements CourseRepository {
    private FILE_PATH = `${__dirname}/courses`

    async save(course: Course): Promise<void> {
        fs.promises.writeFile(this._filePath(course.id.value), serialize(course))
    }

    async search(courseId: string): Promise<Course> {
        const courseData = await fs.promises.readFile(this._filePath(courseId));
        const { id, name } = deserialize(courseData);
        return new Course({ id, name })
    }

    private _filePath(id: string) {
        return `${this.FILE_PATH}.${id}.repo`
    }

}