import { useState } from "react";
import { Button, Card, Form, Image, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../pages/Home";
import { useAppSelector } from "../redux/hooks";
import { createChats } from "../utils/API";
const UsersCard = () => {
    const users = useAppSelector((state) => state.users.users);
    const { select } = useSelect();
    const [chatName, setChatName] = useState("");
    const [userIds, setUserId] = useState<number[]>([]);
    const navigate = useNavigate();

    const addChatUsers = (userId: number) => {
        const match = userIds.find(id => id === userId)
        if (match) {
            const selectedUserIds = userIds.filter(id => id !== userId)
            setUserId(selectedUserIds)
        }
        else {
            setUserId([...userIds, userId])
        }
    }

    const addChatName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChatName(event.target.value)
    }
    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Chat Name"
                    onChange={addChatName}
                    value={chatName}
                />
                <Button variant="outline-secondary" id="button-addon2"
                    onClick={() => { createChats(chatName, userIds); navigate("/home/groupchat") }}>
                    Next
                </Button>
            </InputGroup>
            {
                users.map(user => {
                    return (
                        <Card key={user.id} className="my-3 mx-5 p-2" style={{ width: '20rem' }} >
                            <div className="d-flex flex-wrap ">
                                <Image width='20%' className="rounded-circle" src={`${user.imgUrl}`} />
                                <div className="ms-3">
                                    <h5>{`${user.firstName} ${user.lastName}`}</h5>
                                </div>
                            </div>
                            {select ? <label>
                                <input type="checkbox"
                                    defaultChecked={false}
                                    onChange={() => addChatUsers(user.id!)}
                                />
                            </label> : null}
                        </Card>
                    )
                })
            }
        </div >
    )
}

export default UsersCard;
