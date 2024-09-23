import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';


export default function IShopLogin() {
  let navigate = useNavigate();
  const [users, setusers] = useState([]);
  const [cookies,setCookie,removedCookie]=useCookies();
  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
    },
    onSubmit: values => {
      for (var user of users) {
        if (user.userId == values.userId && user.password == values.password) {
          setCookie("userID", user.userId);
          navigate("/dashboard");
          break;
        } else {
          navigate("/errorpage")
        }

      }
    }
  })

  useEffect(() => {
    axios.get("http://localhost:4000/getusers")
      .then(response => {
        setusers(response.data);
      })
  }, []);
  return <>
    <div>
      <h2> User Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Id</dt>
          <dd> <input type="text" value={formik.values.userId} onChange={formik.handleChange} name="userId" /> </dd>
          <dt>Password</dt>
          <dd> <input type="password" value={formik.values.password} onChange={formik.handleChange} name="password" /> </dd>
        </dl>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
      <br />
      <Link to="/register"> New User?</Link>
    </div>

  </>
}
