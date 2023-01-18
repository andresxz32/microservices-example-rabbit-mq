export declare class Uuid {
    readonly value: string;
    constructor(value: string);
    static random(): Uuid;
    private ensureIsValidUuid;
    toString(): string;
}
