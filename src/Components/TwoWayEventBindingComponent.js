import React, { useState } from 'react'

export function TwoWayEventBindingComponent() {

    const [userName, setUserName] = useState("100Rabh..")

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    return <>
        <div className="container-fluid">
            <h3 className='text-success h3 text-center'> Two Way Data Binding </h3>
            <div className="row">
                <div className='col-md-4 text-center'>
                    <label className="col-form-label">Enter Name</label>
                    <input type="text" value={userName} className='form-control' onChange={handleUserName} />
                </div>
                <div className='col-md-4'>
                    <br /> <br/>
                    <h4> Hellow <span className='h5 text-danger'> {userName}</span> </h4>
                </div>
            </div>
            <hr/>
        </div>

    </>

}
