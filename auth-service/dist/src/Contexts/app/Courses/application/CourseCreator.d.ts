import { CourseRepository } from "../domain/CourseRepository";
export declare class CourseCreator {
    private readonly _repository;
    constructor(_repository: CourseRepository);
    run(request: any): Promise<void>;
}
