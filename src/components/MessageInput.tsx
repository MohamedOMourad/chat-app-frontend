import React, { useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { io, Socket } from 'socket.io-client';
import { createMessage } from '../utils/API';

const MessageInput = ({ chatId, socket }: { chatId: string, socket: Socket }) => {

    const token = JSON.parse(localStorage.getItem("token")!);

    const formik = useFormik({
        initialValues: {
            body: "",
        },
        validationSchema: Yup.object({
            body: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            const res = await createMessage({ ...values, chatId })
            socket.emit('sendMessage', res);
            formik.resetForm()
        },
    });
    return (
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
    )
}

export default MessageInput
