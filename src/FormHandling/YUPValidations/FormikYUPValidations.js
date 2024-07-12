import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup'

export function FormikYUPValidations() {



    const formik = useFormik({
        initialValues: {
            userName: '',
            age: '',
            email: '',
            address: '',
        },
        validationSchema: yup.object({
            userName: yup.string().min(4, "Name too Short").max(10, "Name too Long").required("UserName is required"),
            email: yup.string().email("Invalid Email").required("Email is required"),
            age: yup.number("Age must Be number").integer().required("Age is required"),
            address: yup.string().required("Address is required"),
        }),
        onSubmit: (value) => {
            alert(JSON.stringify(value));
            console.log(value);

        }

    })
    return <>
        <div className='container-fluid card card-body'>
            <h4 className='text-white bg-danger h5  text-center'>Formik Yup Validation</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Name</label>
                        <input type='text' {...formik.getFieldProps("userName")} onChange={formik.handleChange} className='form-control' value={formik.values.userName} name='userName' />
                        <label className='col-form-label text-danger'>{formik.errors.userName} </label>
                    </div>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Address</label>
                        <input type='text'{...formik.getFieldProps("address")} onChange={formik.handleChange} className='form-control' value={formik.values.address} name='address' />
                        <label className='col-form-label text-danger'>{formik.errors.address} </label>
                    </div>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Age</label>
                        <input type='text'{...formik.getFieldProps("age")} onChange={formik.handleChange} className='form-control' value={formik.values.age} name='age' />
                        <label className='col-form-label text-danger'> {formik.errors.age}</label>
                    </div>
                    <div className='col-md-3'>
                        <label className='col-form-label'> Email</label>
                        <input type='email'{...formik.getFieldProps("email")} onChange={formik.handleChange} value={formik.values.email} className='form-control' name='email' />
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
