import React from "react";
import { indianCities } from "../../Components/Cities";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function YUPFormikComponent() {
    return (
        <div className="container-fluid card card-body">
            <h4 className="text-center bg-secondary text-white" style={{ height: "40px" }}>
                YUP Formik Component
            </h4>
            <Formik
                initialValues={{
                    fname: '',
                    lname: '',
                    ContactNo: '',
                    address: '',
                    city: '',
                }}
                validationSchema={yup.object({
                    fname: yup.string().min(4, "Name too short").max(10, "Name too long").required("First Name Required"),
                    lname: yup.string().min(4, "Name too short").max(10, "Name too long").required("Last Name Required"),
                    ContactNo: yup.string().required("Contact No. Required"),
                    address: yup.string().min(4, "Address too short").max(10, "Address too long").required("Address Required"),
                    city: yup.string().required("City is required"),
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                    console.log(values);
                }}
            >
                <Form>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="fname">First Name</label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="fname" name="fname" />
                            <ErrorMessage name="fname" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="lname">Last Name</label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="lname" name="lname" />
                            <ErrorMessage name="lname" component="div" className="text-danger" />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="ContactNo">Contact Number</label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="ContactNo" name="ContactNo" />
                            <ErrorMessage name="ContactNo" component="div" className="text-danger" />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="address">Address </label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="address" name="address" />
                            <ErrorMessage name="address" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="city">Select City </label>
                            <Field as="select" className="form-control" id="city" name="city"  >
                                <option value="" disabled> Select City</option>
                                {
                                    indianCities.map((city, index) => {
                                        return <option value={city} key={index}> {city}</option>
                                    })
                                }
                            </Field>
                            <ErrorMessage name="city" component="div" className="text-danger" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="col-md-3">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

