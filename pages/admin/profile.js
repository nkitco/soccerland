import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col, Nav, NavItem, NavLink, Table, Progress,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import classnames from "classnames";
import {Bar, Line} from "react-chartjs-2";
import Chart from "chart.js";
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2,
} from "variables/charts.js";

function Profile() {
    const [activeNav, setActiveNav] = React.useState(1);

    const [chartExample1Data, setChartExample1Data] = React.useState("data1");
    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
    return (
        <>
            <UserHeader/>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                        <Card className="card-profile shadow">
                            <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                    <div className="card-profile-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                            />
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div className="d-flex justify-content-between">
                                    <Button
                                        className="mr-4"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        Setting
                                    </Button>
                                    <Button
                                        className="float-right"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        Formation
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0 pt-md-4">
                                <Row>
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div>
                                                <span className="heading">22</span>
                                                <span className="description">Won</span>
                                            </div>
                                            <div>
                                                <span className="heading">10</span>
                                                <span className="description">Lost</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description">Point</span>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                                <div className="text-center">
                                    <h3>
                                        Martin United
                                        <span className="font-weight-light">, 27</span>
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"/>
                                        Germany
                                    </div>
                                    <hr className="my-4"/>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Show more
                                    </a>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="bg-gradient-default shadow mt-2">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-white ls-1 mb-1">
                                            Overview
                                        </h6>
                                        <h2 className="text-pink mb-0">Team Value</h2>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {/* Chart */}
                                <div className="chart">
                                    <Line
                                        data={chartExample1[chartExample1Data]}
                                        options={chartExample1.options}
                                        getDatasetAtEvent={(e) => console.log(e)}
                                    />
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="bg-gradient-primary mt-2">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                            New users
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0 text-white">
                        2,356
                        </span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                            <i className="ni ni-atom"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-sm">
                        <span className="text-white mr-2">
                        <i className="fa fa-arrow-up"></i>
                        3.48%
                        </span>
                                    <span className="text-nowrap text-light">
                        Since last month
                        </span>
                                </p>
                            </CardBody>
                        </Card>

                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Team Overals</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            See all
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Status</th>
                                    <th scope="col">Percentage</th>
                                    <th scope="col"/>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Ability</th>
                                    <td>1,480</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">60%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="60"
                                                    barClassName="bg-gradient-danger"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Speed</th>
                                    <td>5,480</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">70%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="70"
                                                    barClassName="bg-gradient-success"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Fatigue</th>
                                    <td>4,807</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">80%</span>
                                            <div>
                                                <Progress max="100" value="80"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Injuries</th>
                                    <td>3,678</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">75%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="75"
                                                    barClassName="bg-gradient-info"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Intelligence</th>
                                    <td>2,645</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">30%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="30"
                                                    barClassName="bg-gradient-warning"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>

                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                                            Performance
                                        </h6>
                                        <h2 className="mb-0">League performance</h2>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {/* Chart */}
                                <div className="chart">
                                    <Bar
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">My Team Information</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Profile
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Player Cards
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Fernandes.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Mbappé.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Messi.png")}/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Ronaldo.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Neymar.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Lewandowski.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Beckham.png")}/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Depay.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Ramos.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/van Dijk.png")}/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <img className="player-card"
                                                         src={require("assets/img/cards/Pogba.png")}/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        Couch
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Jose Mourinho"
                                                        id="input-first-name"
                                                        placeholder="First name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Fitness Couch
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Jack Manzi"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4"/>
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        Formation
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="4">
                                                <FormGroup className="text-center">
                                                    <Button
                                                        className="formation-btn w-100"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span>4-4-2</span>
                                                    </Button>

                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <Button
                                                        className="formation-btn w-100"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span>4-5-1</span>
                                                    </Button>

                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <Button
                                                        className="formation-btn w-100"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span>4-3-3</span>
                                                    </Button>
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <Button
                                                        className="formation-btn w-100"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span>3-5-2</span>
                                                    </Button>
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <Button
                                                        className="formation-btn w-100"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span>4-2-3-1</span>
                                                    </Button>
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <Button
                                                        className="formation-btn w-100"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span>4-1-4-1</span>
                                                    </Button>
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <label htmlFor="exampleFormControlSelect1">Main Tactique</label>
                                                    <Input id="exampleFormControlSelect1" type="select">
                                                    <option>Counter-attack</option>
                                                    <option>Tiki-Taka</option>
                                                    <option>Park the Bus</option>
                                                    <option>Long Ball Game</option>
                                                    <option>High Press</option>
                                                    </Input>
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <label htmlFor="exampleFormControlSelect1">Passing Strategy </label>
                                                    <Input id="exampleFormControlSelect1" type="select">
                                                        <option>Long Passes</option>
                                                        <option>Short Passes</option>
                                                        <option>Wide Passes</option>
                                                        <option>Back to defend</option>
                                                    </Input>
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <label htmlFor="exampleFormControlSelect1">Alternative Strategy</label>
                                                    <Input id="exampleFormControlSelect1" type="select">
                                                        <option>Park the Bus</option>
                                                        <option>Long Ball Game</option>
                                                        <option>High Press</option>
                                                        <option>Counter-attack</option>
                                                        <option>Tiki-Taka</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col md="8">
                                                <FormGroup className="text-center">
                                                    <img className="formation-cont"
                                                         src={require("assets/img/theme/formation.png")}/>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                    </div>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

Profile.layout = Admin;

export default Profile;
