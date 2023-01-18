"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const CourseCreator_1 = require("./Courses/application/CourseCreator");
const InfrastructureModule_1 = require("./InfrastructureModule");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [InfrastructureModule_1.InfrastructureModule],
        providers: [CourseCreator_1.CourseCreator],
        exports: [CourseCreator_1.CourseCreator]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=ApplicationModule.js.map