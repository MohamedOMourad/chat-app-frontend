import { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../pages/Home";
import { useAppSelector } from "../redux/hooks";
import { Chat } from "../type";
import { getUserChats } from "../utils/API";

const ChatCard = () => {
    const [chats, setChats] = useState<Chat[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        getUserChats(setChats);
    }, []);

    return (
        <div>
            {chats?.map(chat => {
                return (
                    <Card key={chat.id} onClick={() => {
                        navigate("")
                    }} className="my-3 mx-5 p-2" style={{ width: '20rem' }} >
                        <div className="d-flex flex-wrap ">
                            <Image width='20%' className="rounded-circle" src={`${chat.imgUrl}`} />
                            <div className="ms-3">
                                <h5>{`${chat.name}`}</h5>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default ChatCard;
