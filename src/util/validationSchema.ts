import * as Yup from 'yup';

const emails = ['musab@gmail.com', 'john@gmail.com', 'jane@gmail.com'];
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
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character')
});

export const RegisterSchema = Yup.object().concat(LoginSchema).shape({
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
});