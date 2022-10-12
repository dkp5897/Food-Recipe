import React from 'react'
import {useNavigate} from 'react-router-dom'

function Successful() {
    const navigate = useNavigate();

  return (
    <div style={{textAlign:'center', margin:"50px"}}>
      <h1>Successfully Submitted!</h1>
      <button className='btn btn-primary' onClick={()=>navigate('/')}>Back</button>
    </div>
  )
}

export default Successful
