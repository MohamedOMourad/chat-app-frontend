import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Message, User } from '../type';
import * as Yup from "yup";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { getMessages } from '../utils/API';
import jwtDecode from 'jwt-decode';
const Conversation = () => {
    const { id } = useParams()
    const [messages, setMassage] = useState<Message[]>([]);
    const token = JSON.parse(localStorage.getItem("token")!);
    const decodedToken = jwtDecode(token) as User;
    console.log(decodedToken);
    useEffect(() => {
        getMessages(+id!, setMassage)
    }, [])
    const formik = useFormik({
        initialValues: {
            body: "",
        },
        validationSchema: Yup.object({
            body: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            // await createMessage(token, parseInt(id!), values)
            // formik.resetForm()
        },
    });

    return (
        <div className="row d-flex justify-content-center w-100">

            <div className="col-md-8 col-lg-12 col-xl-12">

                <div className="card" id="chat1" style={{ borderRadius: "15px" }}>

                    <div
                        className="card-header d-flex justify-content-between align-items-center p-3 text-dark border-bottom-0"
                        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                        <Link to='/chat/users' className="text-dark fs-5"><i className="fas fa-angle-left"></i></Link>
                        <p className="mb-0 fw-bold">Live chat</p>
                        <Link to='/chat/users' className="text-dark fs-5"><i className="fas fa-times"></i></Link>
                    </div>

                    <div className="card-body">
                        <ScrollToBottom>
                            {messages?.map((message, indx) => {
                                return (
                                    <div key={indx}>
                                        {message?.user?.email === decodedToken?.email ?
                                            <div className="d-flex flex-row justify-content-end mb-4">
                                                <div className="p-3 me-3 border" style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}>
                                                    <p className="small mb-0">{message?.body}</p>
                                                </div>
                                            </div>
                                            :
                                            <div className="d-flex flex-row justify-content-start mb-4">
                                                <div className="p-3 ms-3" style={{ borderRadius: "15px", backgroundColor: "rgba(57, 192, 237,.2)" }}>
                                                    <p className="small mb-0">{message?.body}</p>
                                                </div>
                                            </div>}
                                    </div>
                                )
                            })}
                        </ScrollToBottom>
                        <InputGroup >
                            <Form.Control
                                placeholder=""
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                name="body"
                                value={formik.values.body}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            <Button variant="dark" id="button-addon2" onClick={() => formik.handleSubmit()}>
                                SEND
                            </Button>
                        </InputGroup>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Conversation;

