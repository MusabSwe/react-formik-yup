import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form, Button } from 'react-bootstrap';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email address").required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character')
});
const Login = () => {
    //  There 2 types of form controlled and uncontrolled
    // 1- controlled form: the form data is handled by the state of the component
    // 2- uncontrolled form: the form data is handled by the DOM itself, by ref
    const formaik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: LoginSchema
    });
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
                                name='email'
                                value={formaik.values.email}
                            />
                        </Form.Group>
                        <div>{formaik.errors.email}</div>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={formaik.handleChange}
                                name='password'
                                value={formaik.values.password}
                            />
                        </Form.Group>
                        <div>{formaik.errors.password}</div>
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