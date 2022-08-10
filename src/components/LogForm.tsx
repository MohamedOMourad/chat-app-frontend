import { useFormik, Field, ErrorMessage } from "formik";
import { Button, Form } from 'react-bootstrap';
import * as Yup from "yup";

const LogForm = () => {

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
        validationSchema: Yup.object({
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
                <Form.Label className="text-secondary">Email</Form.Label>
                <Form.Control
                    type="email" placeholder="Enter your email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.password ? <p className="text-danger">{formik.errors.email}</p> : null}
            </Form.Group>

            <Form.Group className=" mb-5">
                <Form.Label className="text-secondary">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.touched.password && formik.errors.email ? <p className="text-danger">{formik.errors.password}</p> : null}
            </Form.Group>
            <Button className="w-100 mb-3" variant="secondary" type="submit">
                Sign in
            </Button>
        </Form>
    )
}

export default LogForm;


