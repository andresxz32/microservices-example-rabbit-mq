"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseProvider = void 0;
const FileCourseRepository_1 = require("./persistence/FileCourseRepository");
exports.CourseProvider = {
    provide: 'CourseRepository',
    useClass: FileCourseRepository_1.FileCourseRepository
};
//# sourceMappingURL=CourseProvider.js.map