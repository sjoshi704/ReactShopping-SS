import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function IShopDashboard() {
  let navigate=useNavigate();
  const[cookies,setcookie,removeCookie] =useCookies(['userid']);
  const[userid,setuserid]=useState();
  useEffect(()=>{
    setuserid(cookies.userid);
  },[cookies])


  function handleSignOut(){
removeCookie("userid");
navigate("/login");
  }
  return <>
  <div> 
    <h2> User Dashboard {userid} - <button className='btn btn-link' onClick={handleSignOut}> signout</button></h2>
  </div>
  
  </>
}
