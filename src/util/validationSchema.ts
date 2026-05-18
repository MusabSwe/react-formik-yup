import * as Yup from 'yup';

const emails = ['musab@gmail.com', 'john@gmail.com', 'jane@gmail.com'];
const getCharacterValidationError = (type: string) => {
    return `Password must contain at least one ${type}`;
}
export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email address")
        .required('Email is required')
        .test('checkEmailExists', 'Email is already in use', function (value, context) {
            console.log('value::: ', value, 'context::: ', context);
            return !emails.includes(value);
        }),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
        .matches(/[0-9]/, getCharacterValidationError('digit'))
        .matches(/[a-z]/, getCharacterValidationError('lowercase letter'))
        .matches(/[A-Z]/, getCharacterValidationError('uppercase letter'))
        .matches(/[@$!%*?&]/, getCharacterValidationError('special character')),
});

export const RegisterSchema = Yup.object().concat(LoginSchema).shape({
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please retype your password'),
});