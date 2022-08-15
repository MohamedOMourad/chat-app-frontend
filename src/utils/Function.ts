import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { SignIn, signUp } from './API';

export const SignUpFormik = () => {
    const navigator = useNavigate();
    const formik = useFormik({
        initialValues: { firstName: "", lastName: "", email: "", password: "" },
        onSubmit: (values) => {
            signUp(values);
            navigator('/chat/users');
            formik.resetForm();
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            lastName: Yup.string().min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            password: Yup.string()
                .min(8, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            email: Yup.string().email("Invalid email").required("Required")
        }),
    });
    return formik;
}

export const LogInFormik = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (values) => {
            SignIn(values.email, values.password, dispatch, navigator);
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
    return formik;
}