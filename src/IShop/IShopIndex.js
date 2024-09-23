import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import IShopHome from '../IShop/IShopHome';
import IShopLogin from '../IShop/IShopLogin';
import IShopRegister from '../IShop/IShopRegister';
import IShopDashboard from '../IShop/IShopDashboard';




export function IShopIndex() {
    return <>

        <div className='container-fluid'>
            <header className='bg-danger text-white text-center p2 mt-2'>
                <h1> IShop Online Store</h1>
            </header>
            <section className='mt-2 row'>
                <BrowserRouter>
                    <nav className='col-3'>
                        <div className='mb-2'>
                            <Link  to="/"className='btn btn-danger w-100'> Home</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to="/register" className='btn btn-danger w-100'> Register</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to="/login"  className='btn btn-danger w-100'> Login </Link>
                        </div>
                        <div className='mb-2'>
                            <Link to="/dashboard" className='btn btn-danger w-100'> Dashboard</Link>
                        </div>
                    </nav>
                    <main className='col-9'>
                        <Routes>
                         <Route path="/" element={<IShopHome/>}/>
                         <Route path="home" element={<IShopHome/>}/>
                         <Route path="login" element={<IShopLogin/>}/>
                         <Route path="register" element={<IShopRegister/>}/>
                         <Route path="dashboard" element={<IShopDashboard/>}/>
                         <Route path="errorpage" element={<div>
                            <h3 className='text-danger'> 
                                Invalid Credientials
                            </h3>
                            <Link to="/login"> Try Again</Link>
                         </div>}/>


                        </Routes>
                    </main>
                </BrowserRouter>
            </section>
        </div>
    </>

}
