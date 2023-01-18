"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
const validate = require("uuid-validate");
const InvalidArgumentError_1 = require("./InvalidArgumentError");
class Uuid {
    constructor(value) {
        this.value = value;
        this.ensureIsValidUuid(value);
    }
    static random() {
        return new Uuid((0, uuid_1.v4)());
    }
    ensureIsValidUuid(id) {
        if (!validate(id)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
        }
    }
    toString() {
        return this.value;
    }
}
exports.Uuid = Uuid;
//# sourceMappingURL=Uuid.js.map