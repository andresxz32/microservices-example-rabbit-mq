"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValueObject = void 0;
class NumberValueObject {
    constructor(value) {
        this.value = value;
    }
    equalsTo(other) {
        return this.value === other.value;
    }
    isBiggerThan(other) {
        return this.value > other.value;
    }
}
exports.NumberValueObject = NumberValueObject;
//# sourceMappingURL=NumberValueObject.js.map