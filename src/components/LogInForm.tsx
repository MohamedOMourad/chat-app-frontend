import { Button, Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LogInFormik } from "../utils/Function";

const LogForm = () => {
    const formik = LogInFormik();
    return (
        <Form className="w-50" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label className="text-secondary fw-bold">Email</Form.Label>
                <Form.Control
                    type="email" placeholder="Enter your email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.password ? <p className="text-danger">{formik.errors.email}</p> : null}
            </Form.Group>

            <Form.Group className=" mb-5">
                <Form.Label className="text-secondary fw-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.touched.password && formik.errors.email ? <p className="text-danger">{formik.errors.password}</p> : null}
            </Form.Group>
            <Button className="w-100 mb-3 btn btn-secondary btn-rounded" type="submit">
                Sign in
            </Button>
            <div className="text-center text-secondary fw-bold">Don't have an account, <Link to='/signup' className="text-decoration-none">sign up</Link></div>
        </Form>
    )
}

export default LogForm;


