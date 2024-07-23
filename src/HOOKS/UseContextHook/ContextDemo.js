import React, { createContext, } from 'react'
import { useState, useContext } from 'react'

const userDetailsContext = createContext(null)
export function ContextDemo() {

    const [userDetails]=useState({
        name:"David",
        address:"Bermingham Uk.",
        Age:23,
        email:"david1008@gmail.com"
    })
    return <>
        <h3 className='text-center h3 bg-success text-white'> Use Context Demo Example</h3>
        <div className='container-fluid'>
            <userDetailsContext.Provider value={userDetails}>
                
                <h1> Site Index :-{userDetails.name}</h1>
                <HeaderComponent> </HeaderComponent>
            
            </userDetailsContext.Provider>

        </div>
    </>
}

function HeaderComponent() {
    const userDetails=useContext(userDetailsContext)
    return <>
        <div className=' container-fluid text-white bg-info' style={{ height: '200px', padding: '10px' }}>
            <h3> Header :{`this is ${userDetails.name}'s Home`}</h3>
            <NavBarComponent> </NavBarComponent>
        </div>

    </>
}

function NavBarComponent() {
    const userDetails=useContext(userDetailsContext)
    return <>
        <div className='btn-toolbar bg-dark text-white justify-content-between'>
            <div className='btn-group'>
                <button className='btn btn-dark'> {userDetails.email}</button>
            </div>
            <div className='btn-group'>
                <button className='btn btn-dark'> {userDetails.age} {userDetails.address}</button>
            </div>
        </div>
        
    </>
}