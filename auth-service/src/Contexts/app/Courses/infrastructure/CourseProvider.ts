import { Provider } from "@nestjs/common";
import { FileCourseRepository } from "./persistence/FileCourseRepository";


export const CourseProvider: Provider = {
    provide: 'CourseRepository',
    useClass: FileCourseRepository
}
