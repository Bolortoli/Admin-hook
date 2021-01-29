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
import MaterialTable from 'material-table'
import SweetAlert from "react-bootstrap-sweetalert"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

const RoomConfiguration = () => {
  const [ajax_div_addroom, setajax_div_addroom] = useState(false)
  const [success_dlg_addroom, setsuccess_dlg_addroom] = useState(false)
  const [dynamic_description_addroom, setdynamic_description_addroom] = useState("")
  const [dynamic_title_addroom, setdynamic_title_addroom] = useState("")
  
  const [ajax_div_editroom, setajax_div_editroom] = useState(false)
  const [success_dlg_editroom, setsuccess_dlg_editroom] = useState(false)
  const [dynamic_description_editroom, setdynamic_description_editroom] = useState("")
  const [dynamic_title_editroom, setdynamic_title_editroom] = useState("")

  return (
    <React.Fragment>

      {success_dlg_addroom ? (
        <SweetAlert
          success
          title={dynamic_title_addroom}
          onConfirm={() => {
            setsuccess_dlg_addroom(false)
          }}
        >
          {dynamic_description_addroom}
        </SweetAlert>
      ) : null}
      {success_dlg_editroom ? (
        <SweetAlert
          success
          title={dynamic_title_editroom}
          onConfirm={() => {
            setsuccess_dlg_editroom(false)
          }}
        >
          {dynamic_description_editroom}
        </SweetAlert>
      ) : null}

      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Өрөө" breadcrumbItem="Room configuration" />

            <Row>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
              <Col xs="12">
                <Card>
                  <CardBody>
                    <Row>
                      <Col xs="4">
                        <Col xl="3" lg="4" sm="6" className="mb-2">
                          {/* <p className="mt-3"></p> */}
                          <Button
                            color="primary"
                            onClick={() => {
                              setajax_div_addroom(true)
                            }}
                            id="ajax-alert"
                          >
                            Өрөө нэмэх
                          </Button>
                          {ajax_div_addroom ? (
                            <SweetAlert
                              showCancel
                              title="Шинээр өрөө нэмэх"
                              cancelBtnBsStyle="danger"
                              confirmBtnBsStyle="success"
                              onConfirm={() => {
                                // alert("asd")
                                setajax_div_addroom(false)
                                setsuccess_dlg_addroom(true)
                                setdynamic_title_addroom("Ajax request finished!")
                                setdynamic_description_addroom("Bo")
                              }}
                              onCancel={() => {
                                setajax_div_addroom(false)
                              }}
                            >
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Өрөөний нэр"
                              />
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Хамгийн бага бооцоо"
                              />
                            </SweetAlert>
                          ) : null}
                        </Col>
                      </Col>
                    </Row>
                    </CardBody>
                </Card>
              </Col>
              <Col xs="12">
                {/* <Card>
                  <CardBody>
                    <CardTitle>Гүйлгээний түүх</CardTitle> */}
                    <MaterialTable
                      title="Өрөөний жагсаалт"
                      columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Surname', field: 'surname' },
                        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                        {
                          title: 'Birth Place',
                          field: 'birthCity',
                          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                        },
                      ]}
                      data={[
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 }
                      ]}
                      actions={[
                        {
                          icon: 'edit',
                          tooltip: 'Edit',
                          onClick: () => setajax_div_addroom(true)
                        },
                        // rowData => ({
                        //   icon: 'delete',
                        //   tooltip: 'Delete User',
                        //   onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                        //   disabled: rowData.birthYear < 2000
                        // })
                      ]}
                      options={{
                        actionsColumnIndex: -1
                      }}
                    />
                    {ajax_div_editroom ? (
                      <SweetAlert
                        showCancel
                        title="Шинээр өрөө нэмэх"
                        cancelBtnBsStyle="danger"
                        confirmBtnBsStyle="success"
                        onConfirm={() => {
                          // alert("asd")
                          setajax_div_editroom(false)
                          setsuccess_dlg_editroom(true)
                          setdynamic_title_editroom("Ajax request finished!")
                          setdynamic_description_editroom("Bo")
                        }}
                        onCancel={() => {
                          setajax_div_editroom(false)
                        }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Өрөөний нэр"
                        />
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Хамгийн бага бооцоо"
                        />
                      </SweetAlert>
                    ) : null}
                  {/* </CardBody>
                </Card> */}
              </Col>
          </Row>
            
        </Container>
      </div>
    </React.Fragment>
  )
}

export default RoomConfiguration
