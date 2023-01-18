import { Body, Controller, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { CourseCreator } from '../../../Contexts/app/Courses/application/CourseCreator';



@Controller('courses')
export class CoursePutController {

    constructor(private readonly _courseCreator: CourseCreator) { }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async createCourse(@Body() course: any): Promise<void> {
        try {
            console.log('LOGGGG:', course)
            const { id, name } = course;

            await this._courseCreator.run({ id, name });
        } catch {
            console.log('error');
        }

    }
}
