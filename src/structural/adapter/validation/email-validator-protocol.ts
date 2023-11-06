export interface EmailValidatorProtocol {
    isEmail: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
    (email: string): boolean;
}