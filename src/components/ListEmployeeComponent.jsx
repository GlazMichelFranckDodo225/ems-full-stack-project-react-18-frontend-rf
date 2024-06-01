import React, {useState, useEffect} from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  // Returns List of Employees and the function allowing 
  // to update this "employees" State Variable
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  // Get the Response of the REST API and Store that Data 
  // into the "employees" State Variable
  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(errror => {
      console.error(errror);
    })
  }, []);

  function addNewEmployee() {
    // On Click to "Add Employee" Button ==> Sends User 
    // to /add-employee Endpoint
    navigator('/add-employee')
  }

  return (
    <div className="container">
      <h1 className="text-center">List of Employees</h1>
      {/* On Click to "Add Employee" Button ==> Triggers addNewEmployee Function */}
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
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
