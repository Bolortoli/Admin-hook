import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { MDBDataTableV5 } from "mdbreact"
import { map } from "lodash"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Media,
  Row,
  Table,
  CardSubtitle,
  Badge,
  Button
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import mini card widgets

//Import Images
import profile1 from "assets/images/profile-img.png"
import profile from "../assets/images/users/avatar-2.jpg"

// import charts
import { getUserProfile } from "store/actions"

const UserProfile = props => {
  const { userProfile, onGetUserProfile } = props

  const columns = [
    {
      label: 'Хэрэглэгчийн нэр',
      field: 'name',
      width: 150,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Name',
      },
    },
    {
      label: 'Утасны дугаар',
      field: 'phone',
      width: 200,
    },
    {
      label: 'Дансны дугаар',
      field: 'account',
      sort: 'asc',
      width: 100,
    },
    {
      label: 'Хүсэлтийн огноо',
      field: 'date',
      sort: 'disabled',
      width: 150,
    },
    {
      label: 'Төрөл',
      field: 'salary',
      sort: 'disabled',
      width: 100,
    },
  ];
  const data = [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Jena Gaines',
      position: '',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Charde Marshall',
      position: 'Regional Director',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Haley Kennedy',
      position: 'Senior Marketing Designer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Tatyana Fitzpatrick',
      position: 'Regional Director',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Michael Silva',
      position: 'Marketing Designer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Paul Byrd',
      position: 'Chief Financial (CFO)',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Gloria Little',
      position: 'Systems Administrator',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Bradley Greer',
      position: 'Software Engineer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Dai Rios',
      position: 'Personnel Lead',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Jenette Caldwell',
      position: 'Development Lead',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Yuri Berry',
      position: 'Chief Marketing (CMO)',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Caesar Vance',
      position: 'Pre-Sales Support',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Doris Wilder',
      position: 'Sales Assistant',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Angelica Ramos',
      position: 'Chief Executive (CEO)',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Gavin Joyce',
      position: 'Developer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Jennifer Chang',
      position: 'Regional Director',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Brenden Wagner',
      position: 'Software Engineer',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Fiona Green',
      position: 'Chief Operating (COO)',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Shou Itou',
      position: 'Regional Marketing',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Michelle House',
      position: 'Integration Specialist',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Suki Burks',
      position: 'Developer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Prescott Bartlett',
      position: 'Technical Author',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Gavin Cortez',
      position: 'Team Leader',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Martena Mccray',
      position: 'Post-Sales support',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Unity Butler',
      position: 'Marketing Designer',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Howard Hatfield',
      position: '',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Hope Fuentes',
      position: 'Secretary',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Vivian Harrell',
      position: 'Financial Controller',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Timothy Mooney',
      position: '',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Jackson Bradshaw',
      position: 'Director',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Olivia Liang',
      position: 'Support Engineer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Bruno Nash',
      position: 'Software Engineer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Sakura Yamamoto',
      position: 'Support Engineer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Thor Walton',
      position: 'Developer',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Цэнэглэлт',
    },
    {
      name: 'Finn Camacho',
      position: 'Support Engineer',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Serge Baldwin',
      position: 'Data Coordinator',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Zenaida Frank',
      position: 'Software Engineer',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Zorita Serrano',
      position: 'Software Engineer',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Jennifer Acosta',
      position: 'Junior Javascript Developer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Cara Stevens',
      position: 'Sales Assistant',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Hermione Butler',
      position: 'Regional Director',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Lael Greer',
      position: 'Systems Administrator',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Jonas Alexander',
      position: 'Developer',
      phone: '99162127 Francisco',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Shad Decker',
      position: 'Regional Director',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Michael Bruce',
      position: 'Javascript Developer',
      phone: '99162127',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
    {
      name: 'Donna Snider',
      position: 'Customer Support',
      phone: '99162127 York',
      account: '5049381334',
      date: '2020/07/02 15:00',
      salary: 'Таталт',
    },
  ];
  
  const [datatable, setDatatable] = React.useState({
    columns: columns,
    rows: data
  });
  
  const [checkbox1, setCheckbox1] = React.useState('');

  const [allowButtonActive, setAllowButtonActive] = React.useState(false)

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  const toggleAllowButtonActive = () => {
    
  }

  useEffect(() => {
    onGetUserProfile()
  }, [onGetUserProfile])
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Хэрэглэгч" breadcrumbItem="Хэрэглэгчийн дэлгэрэнгүй" />

          <Row>
            <Col xl="3">
              <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">Тавтай морил !</h5>
                        <p>Хэрэглэгчийн мэдээлэл харах хуудас</p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src={profile1} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row>
                    <Col sm="4">
                      <div className="avatar-md profile-user-wid mb-4">
                        <img
                          src={profile}
                          alt=""
                          className="img-thumbnail rounded-circle"
                        />
                      </div>
                    </Col>


                    <Col sm={8}>
                      <div className="pt-4">
                        <Row>
                          <Col xs="6">
                            <h5 className="font-size-15">
                              {/* {userProfile.projectCount} */}
                              3
                            </h5>
                            <p className="text-muted mb-0">Нийт</p>
                          </Col>
                          <Col xs="6">
                            <h5 className="font-size-15">
                              {/* ${userProfile.revenue} */}
                              ₮400
                            </h5>
                            <p className="text-muted mb-0">Данс</p>
                          </Col>
                        </Row>
                        {/* <div className="mt-4">
                          <Link
                            to=""
                            className="btn btn-primary waves-effect waves-light btn-sm"
                          >
                            View Profile{" "}
                            <i className="mdi mdi-arrow-right ml-1" />
                          </Link>
                        </div> */}
                      </div>
                    </Col>

                    <Col sm="12">
                    <h5 className="font-size-15">
                        {/* {userProfile.name} */} Монголын хамгийн урт нэр 
                      </h5>
                      <p className="text-muted mb-0">
                        {/* {userProfile.designation} */}
                        Монголын хамгийн урт овог
                      </p>
                    </Col>

                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Хувийн дэлгэрэнгүй</CardTitle>
                  <p className="text-muted mb-4">
                    {userProfile.personalDetail}
                  </p>
                  <div className="table-responsive">
                    <Table className="table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Хэрэглэгчийн нэр : Монгол улсын Иргэн Д</th>
                          <td>{userProfile.name}</td>
                        </tr>
                        <tr>
                          <th scope="row">Утасны дугаар : 99162127</th>
                          <td>{userProfile.phone}</td>
                        </tr>
                        <tr>
                          <th scope="row">Дансны дугаар : 5034343434</th>
                          <td>{userProfile.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">Үлдэгдэл : ₮400 000</th>
                          <td>{userProfile.location}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>

              {/* <Card>
                <CardBody>
                  <CardTitle className="mb-5">Experience</CardTitle>
                  <div className="">
                    <ul className="verti-timeline list-unstyled">
                      {map(userProfile.experiences, (experience, i) => (
                        <li
                          className={
                            experience.id === 1
                              ? "event-list active"
                              : "event-list"
                          }
                          key={"_exp_" + i}
                        >
                          <div className="event-timeline-dot">
                            <i
                              className={
                                experience.id === 1
                                  ? "bx bx-right-arrow-circle bx-fade-right"
                                  : "bx bx-right-arrow-circle"
                              }
                            />
                          </div>
                          <Media>
                            <div className="mr-3">
                              <i
                                className={
                                  "bx " +
                                  experience.iconClass +
                                  " h4 text-primary"
                                }
                              />
                            </div>
                            <Media body>
                              <div>
                                <h5 className="font-size-15">
                                  <Link
                                    to={experience.link}
                                    className="text-dark"
                                  >
                                    {experience.designation}
                                  </Link>
                                </h5>
                                <span className="text-primary">
                                  {experience.timeDuration}
                                </span>
                              </div>
                            </Media>
                          </Media>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card> */}
            </Col>

            <Col xl="9">
              {/* <Row>
                {map(miniCards, (card, key) => (
                  <MiniCards
                    title={card.title}
                    text={card.text}
                    iconClass={card.iconClass}
                    key={"_card_" + key}
                  />
                ))}
              </Row> */}
              <Row>
                <Col className="col-12">
                  <Card>
                    <CardBody>
                      <CardTitle>Хүлээгдэж буй хүсэлтүүд </CardTitle>
                      <CardSubtitle className="mb-3">
                      </CardSubtitle>

                      <MDBDataTableV5
                        hover
                        entriesOptions={[7, 20, 25]}
                        entries={7}
                        pagesAmount={4}
                        data={datatable}
                        checkbox
                        headCheckboxID='id2'
                        bodyCheckboxID='checkboxes2'
                        getValueCheckBox={(e) => {
                          showLogs2(e);
                          toggleAllowButtonActive()
                        }}
                      />           
                      <div className="d-flex flex-row-reverse">
                        <button
                          type="button"
                          className="btn btn-success waves-effect btn-label waves-light"
                          disabled=""
                        >
                          <i className="bx bx-check-double label-icon"></i>{" "}
                          Зөвшөөрөх 
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger waves-effect btn-label waves-light"
                            onClick={() => setAllowButtonActive(!allowButtonActive)}
                          >
                            <i className="bx bx-block label-icon "></i> Татгалзах
                          </button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col className="col-12">
                  <Card>
                    <CardBody>
                      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}
                      
                    </CardBody>
                  </Card>
                </Col>
              </Row>


            </Col>

            <Col xl="12">
              <Row>
                <Col className="col-12">
                  <Card>
                    <CardBody>
                      <CardTitle>Нийт гүйлгээ </CardTitle>
                      <CardSubtitle className="mb-3">
                      </CardSubtitle>
                      <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />       
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
})

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserProfile))
