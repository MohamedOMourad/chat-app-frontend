import { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelect } from "../pages/Caht";
const UsersCard = () => {
    const [checked, setChecked] = useState(false);
    const { select } = useSelect();
    console.log(select);
    const users = useSelector((state: RootState) => state.users.users);
    return (
        <div>
            {
                users.map(user => {
                    return (
                        // <Link key={user.id} className="text-decoration-none text-dark" to='/chat/groupchat'>
                        <Card className="my-3 mx-5 p-2" style={{ width: '20rem' }} >
                            <div className="d-flex flex-wrap ">
                                <Image width='20%' className="rounded-circle" src={`${user.imgUrl}`} />
                                <div className="ms-3">
                                    <h5>{`${user.firstName} ${user.lastName}`}</h5>
                                </div>
                            </div>
                            {select ? <label>
                                <input type="checkbox"
                                // defaultChecked={false}
                                // onChange={() => setChecked(!checked)}
                                />
                            </label> : null}
                        </Card>
                        // </Link>
                    )
                })
            }
        </div>
    )
}

export default UsersCard;
