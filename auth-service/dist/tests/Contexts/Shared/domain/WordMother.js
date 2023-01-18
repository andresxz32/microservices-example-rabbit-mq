"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordMother = void 0;
const MotherCreator_1 = require("./MotherCreator");
class WordMother {
    static random({ minLength = 1, maxLength }) {
        return MotherCreator_1.MotherCreator.random().lorem.word(Math.floor(Math.random() * (maxLength - minLength)) + minLength) || 'word';
    }
}
exports.WordMother = WordMother;
//# sourceMappingURL=WordMother.js.map