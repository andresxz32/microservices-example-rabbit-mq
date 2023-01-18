import { Inject, Injectable } from "@nestjs/common";
import { Uuid } from "../../../Shared/domain/value-object/Uuid";
import { Course } from "../domain/Course";
import { CourseName } from "../domain/CourseName";
import { CourseRepository } from "../domain/CourseRepository";


const CourseRepo = () => Inject('CourseRepository');

@Injectable()
export class CourseCreator {
    constructor
        (
            @CourseRepo() private readonly _repository: CourseRepository,
        ) {
    }
    async run(request): Promise<void> {

        const course = new Course(
            {
                id: new Uuid(request.id),
                name: new CourseName(request.name)
            });

        await this._repository.save(course);
    }

}
