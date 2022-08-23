import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { User } from '../type';
import ScrollToBottom from "react-scroll-to-bottom";
import { getChat, getMessages } from '../utils/API';
import jwtDecode from 'jwt-decode';
import MessageInput from './MessageInput';
import { Socket } from 'socket.io-client';
import { useAppSelector } from '../redux/hooks';
import { useDispatch } from 'react-redux';
import { addToMessages } from '../redux/messages';

const Conversation = ({ socket }: { socket: Socket }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const chats = useAppSelector((state) => state.chats.chats);
    const messages = useAppSelector((state) => state.messages.messages)
    const [userName, setUserName] = useState('');
    const [decodedToken, setDecodedToken] = useState<User>();
    const token = useAppSelector((state) => state.authentication.token)
    useEffect(() => {
        setDecodedToken(jwtDecode(token) as User);
        const chat = chats.find(chat => chat.id === +id!);
        setUserName(chat?.name!)
    }, [])

    // useEffect(() => {
    //     getMessages(+id!, dispatch)
    // }, [])

    const awaitMessages = async () => {
        await getMessages(+id!, dispatch, token)
    }

    useEffect(() => {
        socket.on('recivedMessage', (message) => {
            dispatch(addToMessages(message))
        });
        awaitMessages()
    }, [])



    return (
        <div className="row d-flex justify-content-center w-100">

            <div className="col-md-8 col-lg-12 col-xl-12">

                <div className="card" id="chat1" style={{ borderRadius: "15px" }}>

                    <div
                        className="card-header d-flex justify-content-between align-items-center p-3 text-dark border-bottom-0"
                        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                        <Link to='/chat/users' className="text-dark fs-5"><i className="fas fa-angle-left"></i></Link>
                        <p className="mb-0 fw-bold">{userName}</p>
                        <Link to='/chat/users' className="text-dark fs-5"><i className="fas fa-times"></i></Link>
                    </div>

                    <div className="card-body">
                        <ScrollToBottom className='scrollable'>
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

