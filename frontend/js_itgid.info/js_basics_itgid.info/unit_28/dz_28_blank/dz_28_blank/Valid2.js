class Valid2 extends Valid {
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        this.isValid = true;
        if (this.email == false) {
            this.isValid = false;
            this.emailError = 'email empty';
        }
        if (this.password.length <= 6) {
            this.isValid = false;
            this.passwordError = 'min length 6';
        }
    };
}