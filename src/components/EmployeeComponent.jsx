import React, { useState } from 'react'

const EmployeeComponent = () => {
  // State Variables
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 

  // To Get the Value from Input Text Box
  // First Name
  function handleFirstName(e) {
    setFirstName(e.target.value)
  }
  
  // Last Name
  function handleLastName(e) {
    setLastName(e.target.value)
  }

  // Email
  function handleEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
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
                  onChange={handleFirstName}
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
                  onChange={handleLastName}
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
                  onChange={handleEmail}
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
