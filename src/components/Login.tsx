import { useFormik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';

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
        }
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