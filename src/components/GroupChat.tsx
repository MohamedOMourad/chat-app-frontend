import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GroupChat = () => {
    return (
        <div className="row d-flex justify-content-center w-100">

            <div className="col-md-8 col-lg-12 col-xl-12">

                <div className="card" id="chat1" style={{ borderRadius: "15px" }}>

                    <div
                        className="card-header d-flex justify-content-between align-items-center p-3 text-dark border-bottom-0"
                        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                        <Link to='/chat/users' className="text-dark fs-5"><i className="fas fa-angle-left"></i></Link>
                        <p className="mb-0 fw-bold">Live chat</p>
                        <Link to='/chat/users' className="text-dark fs-5"><i className="fas fa-times"></i></Link>
                    </div>

                    <div className="card-body">

                        <div className="d-flex flex-row justify-content-start mb-4">
                            <div className="p-3 ms-3" style={{ borderRadius: "15px", backgroundColor: "rgba(57, 192, 237,.2)" }}>
                                <p className="small mb-0">Hello and thank you for visiting my App!</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end mb-4">
                            <div className="p-3 me-3 border" style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}>
                                <p className="small mb-0">Thank you, I really like your product.</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-start mb-4">
                            <div className="p-3 ms-3" style={{ borderRadius: "15px", backgroundColor: "rgba(57, 192, 237,.2)" }}>
                                <div className="bg-image">
                                    <p className="small mb-0">Enjoy!</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end mb-4">
                            <div className="p-3 me-3 border" style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}>
                                <p className="small mb-0">Thank you, I really do.</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-start mb-4">
                            <div className="p-3 ms-3" style={{ borderRadius: "15px", backgroundColor: "rgba(57, 192, 237,.2)" }}>
                                <div className="bg-image">
                                    <p className="small mb-0">perfect!</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-start mb-4">
                            <div className="p-3 ms-3" style={{ borderRadius: "15px", backgroundColor: "rgba(57, 192, 237,.2)" }}>
                                <p className="small mb-0">...</p>
                            </div>
                        </div>

                        <InputGroup className="">
                            <Form.Control
                                placeholder=""
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="dark" id="button-addon2" className="">
                                SEND
                            </Button>
                        </InputGroup>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default GroupChat;
