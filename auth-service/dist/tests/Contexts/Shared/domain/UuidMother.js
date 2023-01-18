"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidMother = void 0;
const MotherCreator_1 = require("./MotherCreator");
class UuidMother {
    static random() {
        return MotherCreator_1.MotherCreator.random().datatype.uuid();
    }
}
exports.UuidMother = UuidMother;
//# sourceMappingURL=UuidMother.js.map