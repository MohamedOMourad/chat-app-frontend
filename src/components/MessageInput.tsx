import React, { useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { io, Socket } from 'socket.io-client';
import { createMessage, getChat } from '../utils/API';
import { useAppSelector } from '../redux/hooks';
import { useDispatch } from 'react-redux';

const MessageInput = ({ chatId, socket }: { chatId: string, socket: Socket }) => {
    const dispatch = useDispatch()
    const userIds = useAppSelector((state) => state.users.convUsers);
    const token = useAppSelector((state) => state.authentication.token)

    useEffect(() => {
        getChat(+chatId!, dispatch,token)
    }, [])

    const formik = useFormik({
        initialValues: {
            body: "",
        },
        validationSchema: Yup.object({
            body: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            const res = await createMessage({ ...values, chatId },token);
            socket.emit('sendMessage', { message: res, userIds });
            formik.resetForm()
        },
    });
    return (
        <InputGroup >
            <Form.Control
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
