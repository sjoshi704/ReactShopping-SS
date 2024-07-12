import { Formik, useFormik } from "formik";
import "../Components/States"
import { indianCities } from "../Components/States";



export function FormikDemo() {

    const formik = useFormik({
        initialValues: {
            username: "",
            city: "",
            password: "",
            subscribed: true
        },
        onSubmit: (value) => {
            console.log(value);
            // alert(JSON.stringify(value));
            alert(` "Username:"${value.username}\n "City:"${value.city}\n "Password:"${value.password}\n "Subscribe:"${(value.subscribed===true)?"Subscribe": "Not Subscribe" }`);
        }
    })
    return <>
        <div className="container-fluid">
            <h2 className="text-primary"> Register</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="row card card-body">
                    <dl>
                        <div className="col-md-3">
                            <dt> User Name</dt>
                            <dd> <input type="text" onChange={formik.handleChange} className="form-control" name="username" value={formik.values.username} /></dd>
                        </div>
                        <div className="col-md-3">
                            <dt> Password </dt>
                            <dd> <input type="password" onChange={formik.handleChange} className="form-control" name="password" value={formik.values.password} /></dd>
                        </div>
                        <div className="col-md-3">
                            <dt> Select City</dt>
                            <dd> <select className="form-select" onChange={formik.handleChange} name="city" value={formik.values.city}>
                                <option> Select City</option>
                                {
                                    indianCities.map((cityname) => {
                                        return <option key={cityname} value={cityname}>{cityname}</option>
                                    })
                                }

                            </select></dd>
                        </div>
                        <div className="col-md-3">
                            <dt> Subscribe </dt>
                            <dd className="form-switch"> <input  className="form-check-input" type="checkbox" onChange={formik.handleChange} name="subscribed" checked={formik.values.subscribed} />&nbsp; <span className="h6"> Yes</span></dd>
                        </div>
                    </dl>
                    <div className="col-md-3">
                        <button className="btn btn-danger" type="submit"> Submit</button>
                    </div>
                </div>
            </form>

        </div>


    </>
}