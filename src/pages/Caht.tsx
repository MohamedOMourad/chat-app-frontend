import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";

const Caht = () => {
    return (
        <div>
            <Row style={{ height: "8vh" }}>
                <Col className="fw-bold fs-4 text-secondary d-flex align-items-center">
                    Chat
                </Col>
            </Row>
            <Row className="caht-img" style={{ minHeight: "92vh" }}>
                <Col className="d-flex justify-content-start align-items-center">
                    <Outlet />
                </Col>
            </Row>
        </div>
    )
}

export default Caht;
