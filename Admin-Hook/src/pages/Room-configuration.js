import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  CardImg,
  CardText,
  Row
} from "reactstrap"
import Select from "react-select"
import Editable from "react-bootstrap-editable"
import profile from "../assets/images/users/avatar-2.jpg"
import { MDBDataTableV5 } from "mdbreact"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

const RoomConfiguration = () => {

  const [descFieldSelected, setDescFieldSelected] = useState(false)

  const renderEditableCard = () => {
    delete checkbox1.checkbox
    if (checkbox1.checked) {
      return (
        <Card>
          <CardBody>
            <CardTitle>Засварлах </CardTitle>
            <CardSubtitle className="mb-3">Та дараад засварлах боломжтой болно
            </CardSubtitle>
            <div style={{fontSize: 15, margin: "10 0"}}>
              <Editable
                style={{fontSize: 30}}
                ajax={null}
                alwaysEditing={false}
                className={null}
                disabled={false}
                editText="Change room max player"
                id={null}
                isValueClickable={false}
                label=""
                mode="inline"
                onSubmit={() => alert()}
                onValidated={null}
                options={["2", "3", "4", "5", "6", "7", "8", "9"]}
                placement="top"
                showText
                type="select"
                validate={null}
              />
            </div>

            <div style={{fontSize: 15, margin: "20 0"}}>
              <Editable
                alwaysEditing={false}
                disabled={false}
                editText="Change room max value"
                id={null}
                isValueClickable={false}
                mode="inline"
                placement="top"
                showText
                type="textfield"
              />
            </div>

            <div style={{fontSize: 15, margin: "10 0"}}>
              <Editable
                alwaysEditing={false}
                disabled={false}
                editText="Change room max value"
                id={null}
                isValueClickable={false}
                mode="inline"
                placement="top"
                showText
                type="textfield"
              />
            </div>

            <div style={{fontSize: 15, margin: "10 0"}}>
              <Editable
                style={{fontSize: 30}}
                ajax={null}
                alwaysEditing={false}
                className={null}
                disabled={false}
                editText="Change room max player"
                id={null}
                isValueClickable={false}
                label=""
                mode="inline"
                onSubmit={() => alert()}
                onValidated={null}
                options={["2", "3", "4", "5", "6", "7", "8", "9"]}
                placement="top"
                showText
                type="select"
                validate={null}
              />
            </div>

            <div style={{fontSize: 15, margin: "10 0"}}>
              <Editable
                style={{fontSize: 30}}
                ajax={null}
                alwaysEditing={false}
                className={null}
                disabled={false}
                editText="Change room max player"
                id={null}
                isValueClickable={false}
                label=""
                mode="inline"
                onSubmit={() => alert()}
                onValidated={null}
                options={["2", "3", "4", "5", "6", "7", "8", "9"]}
                placement="top"
                showText
                type="select"
                validate={null}
              />
            </div>
            
          </CardBody>
        </Card>
      )
    } 
    else {
      return (
        <Card>
          <CardBody>
            {/* <CardImg top className="img-fluid" src={profile} alt="Please select room" /> */}
            <CardBody>
              <CardTitle>
                Ямар нэг зүйл сонгоно уу
              </CardTitle>
            </CardBody>
          </CardBody>
        </Card>
      )  
    }
    
  }

  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
    // delete checkbox1.checkbox
    // alert (JSON.stringify(checkbox1))
  };

  
  const columns = [
    {
      label: 'Нэр',
      field: 'name',
      width: 150,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Name',
      },
    },
    {
      label: 'Max players',
      field: 'phone',
      width: 200,
    },
    {
      label: 'Max money',
      field: 'account',
      sort: 'asc',
      width: 100,
    },
    {
      label: 'Min money',
      field: 'date',
      sort: 'disabled',
      width: 150,
    },
    {
      label: 'Нээгдсэн огноо',
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
  
  const [datatable, sesetDatatabletDatatable] = React.useState({
    columns: columns,
    rows: data
  });

  

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Өрөө" breadcrumbItem="Room configuration" />

          <Row>
            <Col xs="12">
                <Row>

                    <Col xs="4">
                      <Row>
                        <Col xs="12">
                          { renderEditableCard() }
                        </Col>

                        <Col xs="12">
                          <Card>
                            <CardBody>
                              <CardTitle>
                                Min max withdraw
                              </CardTitle>
                              {/* <CardSubtitle>s<  /CardSubtitle> */}
                              <form>
                              <div className="form-group row">
                                <label
                                  htmlFor="example-number-input"
                                  className="col-md-4 col-form-label"
                                >
                                  Min
                                </label>
                                <div className="col-md-8">
                                  <input
                                    className="form-control"
                                    type="number"
                                    defaultValue="42"
                                    id="example-number-input"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="example-number-input"
                                  className="col-md-4 col-form-label"
                                >
                                  Max
                                </label>
                                <div className="col-md-8">
                                  <input
                                    className="form-control"
                                    type="number"
                                    defaultValue="42"
                                    id="example-number-input"
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row-reverse justify-content-sm-between">
                                <button
                                  type="submit"
                                  className="btn btn-success waves-effect btn-label waves-light"
                                  disabled=""
                                  onClick={() => alert("You sure? ")}
                                >
                                  <i className="bx bx-check-double label-icon"></i>{" "}
                                  Өөрчлөх 
                                </button>
                              </div>
                              </form>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col xs="12">
                          <Card>
                            <CardBody>
                              <CardTitle>
                                Add room
                              </CardTitle>
                              {/* <CardSubtitle>s</CardSubtitle> */}
                              <div className="form-group row">
                                
                                <label
                                  htmlFor="example-number-input"
                                  className="col-md-4 col-form-label"
                                >
                                  Нэр
                                </label>

                                <div className="col-md-8">
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue="Room name"
                                    id="example-number-input"
                                  />
                                </div>
                                
                              </div>

                              <div className="form-group row">
                                <label
                                  htmlFor="example-number-input"
                                  className="col-md-4 col-form-label"
                                >
                                  Max players
                                </label>
                                <div className="col-md-8">
                                  <input
                                    className="form-control"
                                    type="number"
                                    defaultValue="42"
                                    id="example-number-input"
                                  />
                                </div>
                              </div>

                              <div className="form-group row">
                                <label
                                  htmlFor="example-number-input"
                                  className="col-md-4 col-form-label"
                                >
                                  Min money
                                </label>
                                <div className="col-md-8">
                                  <input
                                    className="form-control"
                                    type="number"
                                    defaultValue="42"
                                    id="example-number-input"
                                  />
                                </div>
                              </div>

                              <div className="form-group row">
                                <label
                                  htmlFor="example-number-input"
                                  className="col-md-4 col-form-label"
                                >
                                  Max money
                                </label>
                                <div className="col-md-8">
                                  <input
                                    className="form-control"
                                    type="number"
                                    defaultValue="42"
                                    id="example-number-input"
                                  />
                                </div>
                              </div>
                              
                              <div className="d-flex flex-row-reverse justify-content-sm-between">
                                <button
                                  type="button"
                                  className="btn btn-success waves-effect btn-label waves-light"
                                  disabled=""
                                >
                                  <i className="bx bx-check-double label-icon"></i>{" "}
                                  Өрөө нэмэх 
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-info waves-effect btn-label waves-light"
                                    onClick={null}
                                  >
                                    <i className="bx bx-x label-icon "></i> Цэвэрлэх
                                  </button>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>
                    </Col>
                    <Col xs="8">
                      <Card>
                          <CardBody>
                            <CardTitle>Room Жагсаалт </CardTitle>
                            {/* <CardSubtitle className="mb-3">ads
                            </CardSubtitle> */}
                            <MDBDataTableV5
                              hover
                              entriesOptions={[13, 20, 25]}
                              entries={13}
                              pagesAmount={4}
                              data={datatable}
                              checkbox
                              headCheckboxID='id2'
                              bodyCheckboxID='checkboxes2'
                              getValueCheckBox={(e) => {
                                showLogs2(e);
                              }}
                            />     
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
                {/* <div className="mt-4">
                    <h5 className="font-size-14 mb-4">Custom Radios</h5>
                    <div className="custom-control custom-radio mb-3">
                    <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customRadio1"
                    >
                        Toggle this custom radio
                    </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-right">
                    <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input"
                        defaultChecked
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customRadio2"
                    >
                        Or toggle this Right custom radio
                    </label>
                    </div>
                </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default RoomConfiguration
