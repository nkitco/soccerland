import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

function UserHeader() {
    return (
        <>
            <div
                className="header pb-6 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                    minHeight: "600px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >
                {/* Mask */}
                <span className="mask bg-gradient-default opacity-2"/>
                {/* Header container */}
                <Container className="d-flex align-items-center" fluid>
                    <Row>
                        <Col lg="7" md="10">
                            <h1 className="display-1 text-pink font-weight-bold">Soccer Land</h1>
                            <p className="text-white mt-0 mb-5">
                                Create your dream team , Set techniques and cards , Join the league , Win the Prize!
                            </p>
                            <Button
                                className="pink-btn"
                                color="info"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Join League
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default UserHeader;
