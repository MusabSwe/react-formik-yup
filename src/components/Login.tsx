import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email address").required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character')
});

// let incomingEmail = 'musab@gmail.com';
const Login = () => {
    //  There 2 types of form controlled and uncontrolled
    // 1- controlled form: the form data is handled by the state of the component
    // 2- uncontrolled form: the form data is handled by the DOM itself, by ref
    const formaik = useFormik({
        initialValues: {
            email: '',  // incomingEmail ?? '',
            password: ''
        },
        enableReinitialize: true, // when the initialValues change it will reinitialize the form with the new initialValues, useful when you want to reset the form after submit or when you want to edit the form and you want to fill the form with the data of the item that you want to edit
        // validate: (values) => {
        //     console.log('values::: ', values);
        // }, // invoked when the user changes the value of the input field or when the user clicks outside the input field, useful when you want to validate the form without using a validation schema, you can use this function to validate the form and show the error messages if there are any
        validateOnBlur: true, // when the user clicks outside the input field it will validate the form and show the error messages if there are any
        validateOnChange: true, // when the user changes the value of the input field it will validate the form and show the error messages if there are any
        // validateOnMount: true, // when the component is mounted it will validate the form and show the error messages if there are any
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: LoginSchema
    });

    useEffect(() => {
        if(formaik.values.email) return;
        formaik.setFieldValue('email', 'musab@gmail.com');
    }, [formaik])
    // Formik is a controlled form library, it means that the form data is handled by the state of the component, and the formik object is used to handle the form data and the form state, it has many properties and methods that you can use to handle the form data and the form state, such as values, errors, touched, isValid, isSubmitting, handleChange, handleBlur, handleSubmit, etc.
    // useful for debugging purposes to see the formik object and its properties, you can see the values, errors, touched, isValid, isSubmitting, etc. properties of the formik object
    // and also if you want to navigate or check custom error messages or custom validation you can use this useEffect to see the formik object and its properties
    // useEffect(() => {
    //     console.log('form ::: ', formaik);
    //     if(Object.keys(formaik.errors).length > 0){
    //         console.log('form is not valid');
    //     }
    // }, [formaik])
    // notes
    // - formik.touched.email is used to check if the user has touched the email field or not, if the user has touched the email field and there is an error in the email field, it will show the error message, otherwise it will show null
    //  - when the user submit all totuched fields will be true and if there is an error in any field it will show the error message for that field
    return (
        <section className='m-5'>
            <h1>Login</h1>
            <Row className="justify-content-center">
                <Col xs={6} >
                    {/* handleSubimt when user submits the form will call the onSubmit function of useFormik */}
                    <Form onSubmit={formaik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                onChange={formaik.handleChange}
                                onBlur={formaik.handleBlur}
                                name='email'
                                value={formaik.values.email}
                            />
                        </Form.Group>
                        <div className='text-danger m-1'>
                            {
                                formaik.touched.email && formaik.errors.email ?
                                    formaik.errors.email : null
                            }
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={formaik.handleChange}
                                onBlur={formaik.handleBlur}
                                name='password'
                                value={formaik.values.password}
                            />
                        </Form.Group>
                        <div className='text-danger m-1'>
                            {
                                formaik.touched.password && formaik.errors.password ?
                                    formaik.errors.password : null
                            }
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

        </section>
    );
}

export default Login;