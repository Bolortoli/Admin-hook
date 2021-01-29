import React from "react"
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap"
import { Link } from "react-router-dom"
import MaterialTable from 'material-table'

const LatestDeposit = ({ title, transactions }) => {

  return (
    <React.Fragment>
      <Card className='mt-5 pt-5 px-4 w-50 mb-5' >
        <CardBody>
          <CardTitle className="mb-2">{ title }</CardTitle>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <MaterialTable
            title=""
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
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              {},
            ]}
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              },
              rowData => ({
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                disabled: rowData.birthYear < 2000
              })
            ]}
            options={{
              actionsColumnIndex: -1
            }}
          />
          {/* <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: "20px" }}>
                  </th>
                  <th>Гүйлгээ дугаар</th>
                  <th>Гүйлгээ утга</th>
                  <th>Огноо</th>
                  <th>Мөнгөн дүн</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, key) => (
                  <tr key={"_tr_" + key}>
                    <td>
                    </td>
                    <td>
                      <Link to="#" className="text-body font-weight-bold">
                        {" "}
                        {transaction.orderId}{" "}
                      </Link>{" "}
                    </td>
                    <td>{transaction.billingName}</td>
                    <td>{transaction.Date}</td>
                    <td>{transaction.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default LatestDeposit 
