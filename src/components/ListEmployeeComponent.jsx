import React, {useState, useEffect} from "react";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  /* const dummyData = [
    {
      id: 1,
      firstName: "Méliane",
      lastName: "Dodo",
      email: "melianedodo@gmail.com",
    },
    {
      id: 2,
      firstName: "Tony",
      lastName: "Stark",
      email: "tonystark@gmail.com",
    },
    {
      id: 3,
      firstName: "Orlando",
      lastName: "Buffon",
      email: "orlandobuffon@gmail.com",
    },
  ]; */

  // Returns List of Employees and the function allowing 
  // to update this "employees" State Variable
  const [employees, setEmployees] = useState([]);

  // Get the Response of the REST API and Store that Data 
  // into the "employees" State Variable
  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(errror => {
      console.error(errror);
    })
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">List of Employees</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {/* {dummyData.map((employee) => ( */}
          {
            /* The "employees" State Variable Hold the Response 
            Of the REST API */
          }
          {
            employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
