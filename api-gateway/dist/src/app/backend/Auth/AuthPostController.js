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
exports.AuthPostController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_user_dto_1 = require("../../data-object/create-user-dto");
let AuthPostController = class AuthPostController {
    constructor(_clientProxy) {
        this._clientProxy = _clientProxy;
    }
    async signIn(authCredentialsDto) {
        return await this._clientProxy.send({ cmd: 'sign-in' }, authCredentialsDto);
    }
    async signUp(createUserDto) {
        return await this._clientProxy.send({ cmd: 'sign-up' }, createUserDto);
    }
};
__decorate([
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthPostController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthPostController.prototype, "signUp", null);
AuthPostController = __decorate([
    (0, common_1.Controller)('authentication'),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AuthPostController);
exports.AuthPostController = AuthPostController;
//# sourceMappingURL=AuthPostController.js.map