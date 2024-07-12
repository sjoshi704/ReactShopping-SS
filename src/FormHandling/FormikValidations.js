import { useFormik } from 'formik';
import React from 'react'

export function FormikValidations() {

    const verifyUserDetils = (userDetails) => {
        const errors = {};
        if (userDetails.userName === "") {
            errors.userName = "UserName is required";

        }else if(userDetails.userName.length <4){
            errors.userName = "UserName is too short...";
        }else if(userDetails.userName.length >10){
            errors.userName = "UserName is too Long...";
        }
        if (userDetails.email === "") {
            errors.email = "Email is required";

        }else if(userDetails.email.indexOf("@")<=2){
            errors.email = "Inavalid email";
        }
        if (userDetails.address === "") {
            errors.address = "Address is required";

        }

        if (userDetails.age === "") {
            errors.age = "Age is required";

        }
        if(isNaN(userDetails.age)){
            errors.age = "Age must be a number";
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            age: '',
            email: '',
            address: '',
        },
        validate: verifyUserDetils,
        onSubmit: (value) => {
            alert(JSON.stringify(value));
            console.log(value);

        }

    })
    return <>
        <div className='container-fluid card card-body'>
            <h4 className='text-white bg-success text-center'>Formik Validation</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Name</label>
                        <input type='text' onChange={formik.handleChange} className='form-control' value={formik.values.userName} name='userName' />
                        <label className='col-form-label text-danger'>{formik.errors.userName} </label>
                    </div>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Address</label>
                        <input type='text' onChange={formik.handleChange} className='form-control' value={formik.values.address} name='address' />
                        <label className='col-form-label text-danger'>{formik.errors.address} </label>
                    </div>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Age</label>
                        <input type='text' onChange={formik.handleChange} className='form-control' value={formik.values.age} name='age' />
                        <label className='col-form-label text-danger'> {formik.errors.age}</label>
                    </div>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Email</label>
                        <input type='email' onChange={formik.handleChange} value={formik.values.email} className='form-control' name='email' />
                        <label className='col-form-label text-danger'>{formik.errors.email} </label>
                    </div>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <button type='submit' className='btn btn-danger col-md-1'>Save</button>
                </div>
            </form>
        </div>
    </>
}
