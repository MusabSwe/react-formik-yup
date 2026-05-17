import { useFormik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { RegisterSchema } from '../util/validationSchema';
const Register = () => {

    const formaik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {

            alert(JSON.stringify(values));
        },
        validationSchema: RegisterSchema
    })
    return (
        <section className='m-5'>
            <Row className="justify-content-center">
                <Col xs={6} >
                    <h3 className='mb-3'>Register</h3>
                    <Form onSubmit={formaik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="fname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name='fname'
                                placeholder="Enter first name"
                                value={formaik.values.fname}
                                onBlur={formaik.handleBlur}
                                onChange={formaik.handleChange}
                                isInvalid={!!(formaik.touched.fname && formaik.errors.fname)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formaik.errors.fname}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name='lname'
                                placeholder="Enter last name"
                                value={formaik.values.lname}
                                onBlur={formaik.handleBlur}
                                onChange={formaik.handleChange}
                                isInvalid={!!(formaik.touched.lname && formaik.errors.lname)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formaik.errors.lname}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name='email'
                                placeholder="Enter email"
                                onBlur={formaik.handleBlur}
                                value={formaik.values.email}
                                onChange={formaik.handleChange}
                                isInvalid={!!(formaik.touched.email && formaik.errors.email)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formaik.errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name='password'
                                placeholder="Password"
                                onBlur={formaik.handleBlur}
                                value={formaik.values.password}
                                onChange={formaik.handleChange}
                                isInvalid={!!(formaik.touched.password && formaik.errors.password)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formaik.errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name='confirmPassword'
                                placeholder="Confirm Password"
                                onBlur={formaik.handleBlur}
                                value={formaik.values.confirmPassword}
                                onChange={formaik.handleChange}
                                isInvalid={!!(formaik.touched.confirmPassword && formaik.errors.confirmPassword)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formaik.errors.confirmPassword}
                            </Form.Control.Feedback>
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

export default Register;