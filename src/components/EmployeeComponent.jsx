import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
  // State Variables
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const navigator = useNavigate();

  // To Submit the Employee Form
  function saveEmployee(e) {
    // Navigate to List Employees Page After Form Submission Doen
    e.preventDefault();

    const employee = {firstName, lastName, email};
    console.log(employee);

    // Calling Add Employees REST API using Axios Library
    createEmployee(employee).then((response) => {
      console.log(response.data);

      navigator("/employees");
    })
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form>
              {/* FirstName */}
              <div className='form-group mb-2'>
                <label className='form-label'>First Name :</label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name Here'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
              </div>

              {/* LastName */}
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name :</label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name Here'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={(e) => setLastName(e.target.value)}
                >
                </input>
              </div>

              {/* Email */}
              <div className='form-group mb-2'>
                <label className='form-label'>Email :</label>
                <input
                  type='email'
                  placeholder='Enter Employee Email Here'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={(e) => setEmail(e.target.value)}
                >
                </input>
              </div>

              <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
