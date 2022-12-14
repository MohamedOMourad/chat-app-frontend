import { useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import { useAppSelector } from "../redux/hooks";
import { getUserChats } from "../utils/API";

const ChatList = ({ socket }: { socket: Socket }) => {
    const dispatch = useDispatch();
    const userId = useAppSelector((state) => state.users.userId);
    const chats = useAppSelector((state) => state.chats.chats)
    const token = useAppSelector((state) => state.authentication.token)
    const navigate = useNavigate()

    const awaitGetUserChats = async () => {
        await getUserChats(dispatch, token)
    }
    useEffect(() => {
        awaitGetUserChats()
    }, []);

    useEffect(() => {
        console.log(userId);
        socket.emit('joiningRoom', +userId)
    }, [])
    
    return (
        <div>
            {chats?.map(chat => {
                return (
                    <Card key={chat?.id} onClick={() => {
                        navigate(`/home/conversation/${chat?.id}`)
                    }} className="my-3 mx-5 p-2" style={{ width: '20rem' }} >
                        <div className="d-flex flex-wrap ">
                            <Image width='20%' className="rounded-circle" src={`${chat?.imgUrl}`} />
                            <div className="ms-3">
                                <h5>{`${chat?.name}`}</h5>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default ChatList;
