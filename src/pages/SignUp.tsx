import { Col, Row } from "react-bootstrap"
import SignUpForm from "../components/SignUpForm"
const SignUp = () => {
    return (
        <div>
            <Row style={{ height: "7vh" }}>
                <Col className="fw-bold fs-4 text-secondary d-flex align-items-center">
                    Sign up
                </Col>
            </Row>
            <Row md={2} lg={2} style={{ height: "93vh" }}>
                <Col md={6} lg={6} className='signup-img'>
                </Col>
                <Col md={6} lg={6}
                    className='bg-form d-flex justify-content-center align-items-center' >
                    <SignUpForm />
                </Col>
            </Row>
        </div>
    )
}

export default SignUp