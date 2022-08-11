import { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsersCard = () => {
    const [users, setUsers] = useState([{
        id: 1,
        firstName: "mohamed",
        lastName: "mourad",
        body: "how you doin"
    }, {
        id: 1,
        firstName: "mohamed",
        lastName: "mourad",
        body: "how you doin"
    }, {
        id: 1,
        firstName: "mohamed",
        lastName: "mourad",
        body: "how you doin"
    }, {
        id: 1,
        firstName: "mohamed",
        lastName: "mourad",
        body: "how you doin"
    }, {
        id: 1,
        firstName: "mohamed",
        lastName: "mourad",
        body: "how you doin"
    }, {
        id: 1,
        firstName: "mohamed",
        lastName: "mourad",
        body: "how you doin"
    },])
    return (
        <div>
            {
                users.map(user => {
                    return (
                        <Link className="text-decoration-none text-dark" to='/chat/groupchat'>
                            <Card className="my-3 mx-5 p-2" style={{ width: '20rem' }} >
                                <div className="d-flex flex-wrap ">
                                    <Image width='20%' className="rounded-circle" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" />
                                    <div className="ms-3">
                                        <h5>{`${user.firstName} ${user.lastName}`}</h5>
                                        <h6>{user.body}</h6>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default UsersCard;
