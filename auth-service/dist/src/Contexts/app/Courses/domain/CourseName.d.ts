import { StringValueObject } from "../../../Shared/domain/value-object/StringValueObject";
export declare class CourseName extends StringValueObject {
    constructor(value: string);
    private ensureLengthIsLessThan30Characters;
}
