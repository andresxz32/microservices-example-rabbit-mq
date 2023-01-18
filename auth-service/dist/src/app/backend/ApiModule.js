"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const ApplicationModule_1 = require("../../Contexts/app/ApplicationModule");
const AuthPostController_1 = require("./Auth/AuthPostController");
const StatusGetController_1 = require("./StatusGetController");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            StatusGetController_1.StatusGetController,
            AuthPostController_1.AuthPostController
        ],
        imports: [ApplicationModule_1.ApplicationModule],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=ApiModule.js.map