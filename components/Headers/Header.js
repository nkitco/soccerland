import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Header() {
  return (
    <>
      <div className="header bg-gradient-indigo pb-5 pt-5 pt-md-8" >

        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row className="mt-6">
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0"  style={{
                  minHeight:220,
                  backgroundImage:
                      "url(" + require("assets/img/theme/x1.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}>
                  <CardBody>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0"  style={{
                  minHeight:220,
                  backgroundImage:
                      "url(" + require("assets/img/theme/x2.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}>
                  <CardBody>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0"  style={{
                  minHeight:220,
                  backgroundImage:
                      "url(" + require("assets/img/theme/x3.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}>
                  <CardBody>

                  </CardBody>
                </Card>
              </Col>

            </Row>
            <Row className="mt-3 pb-8 mb-2">
              <Col lg="6" xl="6">
                <Card className="card-stats mb-4 mb-xl-0"  style={{
                  minHeight:320,
                  backgroundImage:
                      "url(" + require("assets/img/theme/x4.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}>
                  <CardBody>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="6">
                <Card className="card-stats mb-4 mb-xl-0"  style={{
                  minHeight:320,
                  backgroundImage:
                      "url(" + require("assets/img/theme/x5.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}>
                  <CardBody>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
