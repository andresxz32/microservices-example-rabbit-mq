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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursePutController = void 0;
const common_1 = require("@nestjs/common");
const CourseCreator_1 = require("../../../Contexts/app/Courses/application/CourseCreator");
let CoursePutController = class CoursePutController {
    constructor(_courseCreator) {
        this._courseCreator = _courseCreator;
    }
    async createCourse(course) {
        try {
            console.log('LOGGGG:', course);
            const { id, name } = course;
            await this._courseCreator.run({ id, name });
        }
        catch (_a) {
            console.log('error');
        }
    }
};
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CoursePutController.prototype, "createCourse", null);
CoursePutController = __decorate([
    (0, common_1.Controller)('courses'),
    __metadata("design:paramtypes", [CourseCreator_1.CourseCreator])
], CoursePutController);
exports.CoursePutController = CoursePutController;
//# sourceMappingURL=CoursePutController.js.map