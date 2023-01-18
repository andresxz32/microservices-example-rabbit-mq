"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCourseRepository = void 0;
const fs = require("fs");
const common_1 = require("@nestjs/common");
const v8_1 = require("v8");
const Course_1 = require("../../domain/Course");
let FileCourseRepository = class FileCourseRepository {
    constructor() {
        this.FILE_PATH = `${__dirname}/courses`;
    }
    async save(course) {
        fs.promises.writeFile(this._filePath(course.id.value), (0, v8_1.serialize)(course));
    }
    async search(courseId) {
        const courseData = await fs.promises.readFile(this._filePath(courseId));
        const { id, name } = (0, v8_1.deserialize)(courseData);
        return new Course_1.Course({ id, name });
    }
    _filePath(id) {
        return `${this.FILE_PATH}.${id}.repo`;
    }
};
FileCourseRepository = __decorate([
    (0, common_1.Injectable)()
], FileCourseRepository);
exports.FileCourseRepository = FileCourseRepository;
//# sourceMappingURL=FileCourseRepository.js.map