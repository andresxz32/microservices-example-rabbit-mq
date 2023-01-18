import { Module } from '@nestjs/common';
import { CourseCreator } from './Courses/application/CourseCreator';
import { InfrastructureModule } from './InfrastructureModule';



@Module({
    imports: [InfrastructureModule],
    //Use cases
    providers: [CourseCreator],
    exports: [CourseCreator]
})
export class ApplicationModule { }
