class Test4 extends Test2 {
    constructor(testValue) {
        super();
        this.testValue = testValue
    }

    set testProp(a) {
        this._testProp = a * 10;
    }
    get testProp() {
        if (this.testValue > 100) {
            return this.testValue;
        }
        return false;
    }

}