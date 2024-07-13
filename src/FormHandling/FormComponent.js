import React, { useState } from 'react'
import "../Components/Cities";
import { indianCities } from '../Components/Cities';

export default function FormComponent() {
    //    type-1

    // const [Users] =([
    //     { userId: "John" },
    //     { userId: "John12" },
    //     { userId: "John123" },
    //     { userId: "David" },
    //     { userId: "David123" },
    //     { userId: "David22" },
    //     { userId: "Albert" },
    // ])

    const [Users] = useState({
        "John": true,
        "John12": true,
        "John123": true,
        "David": true,
        "David123": true,
        "David22": true,
        "Albert": true,
    });


    const [userMsg, setUserMsg] = useState("");
    const [IsValidUser, setIsValidUser] = useState(false)
    const [pWdMsg, setPwdMsg] = useState("");
    const [capsStatus, setCapsStatus] = useState(false);
    const [cityMsg, setCityMsg] = useState("");
    const [UserDetails, setUserDetails] = useState({
        userId: '',
        city: '',
        pwd: ''
    });

    const handleUserChange=(e)=>{
        const {name,value,}=e.target;
        UserDetails[name] = value;
        setUserDetails({...UserDetails})
    }
 const registerClick=()=>{
    alert(JSON.stringify(UserDetails))
 }

    const verifyCity = (e) => {
        let selectedCity = e.target.value;
        handleUserChange(e)
        if (selectedCity === "") {
            setCityMsg("Please Select City")
        } else {
            setCityMsg("")
        }
    }



    const verifyCaps = (e) => {
        console.log(e.keyCode);
        if ((e.keyCode === 65 && e.keyCode <= 90) || (e.which >= 65 && e.which <= 90)) {
            setCapsStatus(true)
        } else {
            setCapsStatus(false)
        }
    }
    // console.log(indianCities);

    const verifyUser = (e) => {
        const inputUserId = e.target.value;

        if (Users[inputUserId]) {
            setUserMsg("User Id is Taken - Try Another");
            setIsValidUser(false);
        } else {
            setUserMsg("User Id is Available");
            setIsValidUser(true);
        }
    };
    const hideUserMsg = (e) => {
        if (e.target.value === "") {
            setUserMsg("User Id is Required");
        } else {
            setUserMsg("")
        }
        setPwdMsg("")
    }

    const verifyPassword = (e) => {
        let pwd = e.target.value;
        if (pwd.length < 4) {
            setPwdMsg("Poor Password");
        } else if (pwd.length >= 4 && pwd.length <= 7) {
            setPwdMsg("Weak Password");
        } else if (pwd.length > 7 && pwd.match(/[A-Z]/)) {
            setPwdMsg("Strong Password");
        } else {
            setPwdMsg("Weak Password");
        }
    }
    return (
        <>
            <div className='container-fluid'>
                <h4 className='text-danger text-center'>Form Validations</h4>
                <hr />
                <div className='row'>
                    <h5> Register User</h5>
                    <div className='col-md-3'>
                        <dl>
                            <dt>User Id</dt>
                            <dd><input type='text' name="userId" onChange={handleUserChange} className='form-control' onBlur={hideUserMsg} onKeyUp={verifyUser} /></dd>
                            {/* <dd className={userMsg.includes('Available') ? 'text-success h6' : 'text-danger h6'}>
                                {userMsg}
                            </dd> */}
                            <dd className={IsValidUser === true ? "text-success h6" : "text-danger h6"}>{userMsg} </dd>
                            <dt>Pasword</dt>
                            <dd><input type='password' onChange={handleUserChange}  name="pwd" className='form-control' onKeyDown={verifyCaps} onBlur={hideUserMsg} onKeyUp={verifyPassword} /></dd>
                            <dd className={pWdMsg === "Strong Password" ? "text-success h6" : pWdMsg === "Weak Password" ? "text-warning h6" : "text-danger h6"} >
                                {pWdMsg}

                                <dd className={(capsStatus === true) ? "d-block" : "d-none"}>
                                    <span className='bi bi-exclamation-triangle-fill'></span> Caps ON
                                </dd>
                            </dd>
                            <dt> Select City</dt>
                            <dd>
                                <select className='form-select' name="city" onChange={verifyCity}>
                                    <option value=""> Select City </option>
                                    {
                                        indianCities.map((city) => {
                                            return <option key={city} value={city}> {city}</option>
                                        })
                                    }

                                </select>
                            </dd>
                            <dd className='text-danger'> {cityMsg}</dd>

                        </dl>
                        <button className='btn btn-primary' onClick={registerClick}>Register</button>
                    </div>
                </div>
            </div>
        </>
    );
}
