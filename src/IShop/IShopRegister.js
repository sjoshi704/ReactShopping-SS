import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function IShopRegister() {
  let navigate = useNavigate();
  return <>
    <div>
      <h2> Register New User</h2>
      <button className='btn btn-primary' onClick={() => {
        navigate("/login")
      }}> Go To Login</button>
    </div>

  </>
}
