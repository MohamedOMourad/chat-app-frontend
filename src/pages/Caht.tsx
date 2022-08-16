import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Outlet, useOutletContext } from "react-router-dom";

const Caht = () => {
    const [select, setSelect] = useState(false)
    const selectUsers = () => {
        setSelect(true)
    };
    return (
        <div>
            <Row style={{ height: "8vh" }}>
                <Col className="fw-bold fs-4 text-secondary d-flex justify-content-between align-items-center">
                    <div>Chat</div>
                    <div>{select ? <Button>Next</Button> : <Button onClick={() => selectUsers()}>New Chat</Button>}</div>
                </Col>
            </Row>
            <Row className="caht-img" style={{ minHeight: "92vh" }}>
                <Col className="d-flex justify-content-start align-items-center">
                    <Outlet context={{ select }} />
                </Col>
            </Row>
        </div>
    )
}

export default Caht;

export function useSelect() {
    return useOutletContext<{ select: boolean }>();
}
