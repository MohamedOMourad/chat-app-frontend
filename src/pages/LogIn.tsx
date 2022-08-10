import { Col, Row } from "react-bootstrap"
import LogForm from "../components/LogForm"
const LogIn = () => {
    return (
        <div>
            <Row style={{ height: "7vh" }}>
                <Col className="fw-bold fs-4 text-secondary d-flex align-items-center">
                    Login
                </Col>
            </Row>
            <Row style={{ height: "93vh" }}>
                <Col lg='6' md='6' className='d-lg-block d-md-block d-none login-img' >
                </Col>
                <Col lg='6' md='6' sm='12' className="d-flex justify-content-center align-items-center">
                    <LogForm />
                </Col>
            </Row>
        </div>
    )
}

export default LogIn;
