"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreator = void 0;
const common_1 = require("@nestjs/common");
const Uuid_1 = require("../../../Shared/domain/value-object/Uuid");
const Course_1 = require("../domain/Course");
const CourseName_1 = require("../domain/CourseName");
const CourseRepo = () => (0, common_1.Inject)('CourseRepository');
let CourseCreator = class CourseCreator {
    constructor(_repository) {
        this._repository = _repository;
    }
    async run(request) {
        const course = new Course_1.Course({
            id: new Uuid_1.Uuid(request.id),
            name: new CourseName_1.CourseName(request.name)
        });
        await this._repository.save(course);
    }
};
CourseCreator = __decorate([
    (0, common_1.Injectable)(),
    __param(0, CourseRepo()),
    __metadata("design:paramtypes", [Object])
], CourseCreator);
exports.CourseCreator = CourseCreator;
//# sourceMappingURL=CourseCreator.js.map