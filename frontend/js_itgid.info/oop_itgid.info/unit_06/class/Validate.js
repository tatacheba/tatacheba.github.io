class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(a) {
        return typeof a == 'number' ? true : false;
    }
    static isInt(a) {
        return Number.isInteger(a) ? true : false;
    }
    static isFloat(a) {
        return Number.isInteger(a) ? false : true;
    }
    static isChar(a) {
        return a.length == 1 ? true : false;
    }
    static isString(a) {
        return typeof a == 'string' ? true : false;
    }
    static isBoolean(a) {
        return typeof a == 'boolean' ? true : false;
    }
    static isArray(a) {
        return Array.isArray(a);
    }
    static toMoney(a) {
        let numbS = a.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + '.00';
        return numbS;
    }
}