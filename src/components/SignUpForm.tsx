import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';


const SignUpForm = () => {
    const navigator = useNavigate();
    const formik = useFormik({
        initialValues: { firstName: "", lastName: "", email: "", password: "" },
        onSubmit: (values) => {
            console.log(values);
            navigator('/chat');
            formik.resetForm();
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(8, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            lastName: Yup.string().min(8, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            password: Yup.string()
                .min(8, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            email: Yup.string().email("Invalid email").required("Required")
        }),
    });
    return (
        <Form className="w-50" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label className="text-secondary">First name</Form.Label>
                <Form.Control
                    type="text" placeholder="Enter your first name" name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                {formik.touched.firstName && formik.errors.lastName && formik.errors.email && formik.errors.password ? <p className="text-danger">{formik.errors.firstName}</p> : null}
            </Form.Group>

            <Form.Group className=" mb-3">
                <Form.Label className="text-secondary">Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                {formik.touched.lastName && formik.errors.firstName && formik.errors.email && formik.errors.password ? <p className="text-danger">{formik.errors.firstName}</p> : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-secondary">Email</Form.Label>
                <Form.Control
                    type="email" placeholder="Enter your email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.firstName && formik.errors.lastName && formik.errors.password ? <p className="text-danger">{formik.errors.email}</p> : null}
            </Form.Group>

            <Form.Group className=" mb-5">
                <Form.Label className="text-secondary">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.touched.password && formik.errors.lastName && formik.errors.email && formik.errors.firstName ? <p className="text-danger">{formik.errors.password}</p> : null}
            </Form.Group>
            <Button className="w-100 mb-3 btn btn-secondary btn-rounded" type="submit">
                Sign up
            </Button>
            <div className="text-center text-secondary fw-bold">have an account, <Link to='/' className="text-decoration-none">log in</Link></div>
        </Form>
    )
}

export default SignUpForm