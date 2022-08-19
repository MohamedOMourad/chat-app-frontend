import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";


const Home = () => {
    const [select, setSelect] = useState(true);
    const navigate = useNavigate();
    return (
        <div>
            <Row style={{ height: "8vh" }}>
                <Col className="fw-bold fs-4 text-secondary d-flex justify-content-between align-items-center">
                    <Link to='/Home/chats'>Home</Link>
                    {select && <Button onClick={() => { setSelect(true); navigate("/home/users") }}>New Chat</Button>}
                </Col>
            </Row>
            <Row className="chat-img" style={{ minHeight: "92vh" }}>
                <Col className="d-flex justify-content-start align-items-center">
                    <Outlet context={{ select }} />
                </Col>
            </Row>
        </div>
    )
}

export default Home;

export function useSelect() {
    return useOutletContext<{ select: boolean }>();
}
