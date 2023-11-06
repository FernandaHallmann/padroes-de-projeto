import {EmailValidatorProtocol} from "./email-validator-protocol";
import isEmail from 'validator/lib/isEmail';

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
    isEmail(email: string): boolean {
        return isEmail(email);
    }
}