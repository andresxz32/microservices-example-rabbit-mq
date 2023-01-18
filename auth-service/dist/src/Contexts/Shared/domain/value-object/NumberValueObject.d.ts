export declare abstract class NumberValueObject {
    readonly value: number;
    constructor(value: number);
    equalsTo(other: NumberValueObject): boolean;
    isBiggerThan(other: NumberValueObject): boolean;
}
