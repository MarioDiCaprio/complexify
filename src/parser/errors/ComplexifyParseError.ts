export default class ComplexifyParseError extends Error {

    constructor(message: string, cause?: any) {
        super(message, cause);
        this.name = 'ComplexifyParseError';
    }

}