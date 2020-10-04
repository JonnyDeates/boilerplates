export function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function validateExtraStrongPassword(password) {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /^[\w\s@#$&()\/-]+$/;
    if (password.length < 8) {
        return 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
        return 'Password must be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
        return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
        return 'Password must contain one upper case, lower case, special character, and number';
    }
    return null;
}
export function validateStrongPassword(password) {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\S]+/;
    if (password.length < 8) {
        return 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
        return 'Password must be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
        return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
        return 'Password must contain one upper case, lower case, and number';
    }
    return null;
}
export function validatePassword(password) {
    const REGEX_LETTER_NUMBER = /[^A-Za-z0-9]+/;
    if (password.length < 8) {
        return 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
        return 'Password must be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
        return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_LETTER_NUMBER.test(password)) {
        return 'Password must contain one letter and number';
    }
    return null;
}