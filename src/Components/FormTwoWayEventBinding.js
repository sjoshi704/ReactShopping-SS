import React, { useState } from 'react';
import "./States";
import { indianCities } from './States';

export function FormTwoWayEventBinding() {
    const [Product,setProduct]=useState({Pname:'',price:0, city:'',stock:false})

    const [newProduct,SetNewProduct]=useState({Pname:'',price:0, city:'',stock:false});

    const handleChnage=(e) => {
        const {name,value,type,checked}=e.target;
        Product[name]=type==="checkbox"? checked: value;
          setProduct({...Product})
    }

    const handleRegisterClick=() =>{
        SetNewProduct({...Product});
    }



    return <>
        <div className="container-fluid">
            <h3 className='text-danger h3 text-center'>Form Data Binding [2 Way] </h3>
            <hr/>
            <div className="row">
                <div className='col-md-3'>
                    <h4> Register Product</h4>
                    <dl>
                        <dt>  Product Name</dt>
                        <dd> <input type="text" className='form-control' onChange={handleChnage} name="Pname" /></dd>
                        <dt> Price</dt>
                        <dd> <input type="text" className='form-control' onChange={handleChnage} name="price" /></dd>
                        <dt> City</dt>
                        <dd>  
                            <select className='form-select' name="city" onChange={handleChnage}>
                            {
                                indianCities.map((city) => {
                                    return <option key={city} value={city}>{city} </option>
                                })
                            }
                            </select>
                        </dd>
                        <dt> Stock</dt>
                        <dd className='form-switch'> 
                            <input type="checkbox" onChange={handleChnage} className='form-check-input' name="stock" /> Available
                        </dd>
                    </dl>
                    <button className="btn btn-danger w-100" onClick={handleRegisterClick}> Register</button>
                </div>
                <div className='col-md-8'>
                    <div className='h4 text-primary'>
                        Product details
                    </div>
                    <dl>
                        <dt> Product Name</dt>
                        <dd className='text-danger h6'>{newProduct.Pname}</dd>
                        <dt> Product Price</dt>
                        <dd className='text-danger h6'>{newProduct.price}</dd>
                        <dt> City</dt>
                        <dd className='text-danger h6'>{newProduct.city}</dd>
                        <dt>  Stock</dt>
                        <dd className='text-danger h6'> {newProduct.stock ? 'Available' : 'Out Of Stock'}</dd>
                    </dl>

                </div>
            </div>
            <hr />
        </div>

    </>

}
