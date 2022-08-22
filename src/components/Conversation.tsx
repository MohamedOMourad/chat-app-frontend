import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Message, User } from '../type';
import ScrollToBottom from "react-scroll-to-bottom";
import { getMessages } from '../utils/API';
import jwtDecode from 'jwt-decode';
import MessageInput from './MessageInput';
import { io } from 'socket.io-client';

const Conversation = () => {
    const { id } = useParams()
    const [messages, setMassages] = useState<Message[]>([]);

    const decodedToken = jwtDecode(JSON.parse(localStorage.getItem("token")!)) as User;
    const socket = io("http://localhost:5001");

    const getaihaga = async () => {
        await getMessages(+id!, setMassages)
    }

    useEffect(() => {
        socket.emit('joiningRoom', { id })
        socket.on('recivedMessage', (val) => {
            setMassages((preMessages) => [...preMessages, val])
        });
        getaihaga()
    }, [])


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
                        <MessageInput chatId={id!} socket={socket} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Conversation;

