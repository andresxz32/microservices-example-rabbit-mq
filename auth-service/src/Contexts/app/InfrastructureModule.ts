import { Module } from '@nestjs/common';
import { CourseProvider } from './Courses/infrastructure/CourseProvider';
import { FileCourseRepository } from './Courses/infrastructure/persistence/FileCourseRepository';


@Module({
    //Repositorys
    providers: [
        CourseProvider
    ],
    exports: [
        CourseProvider
    ],
})
export class InfrastructureModule { }
