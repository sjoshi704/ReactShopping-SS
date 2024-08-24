import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Electonics from './Electonics'
import Fashion from './Fashion'
import Footwear from './Footwear'
import { ShoppingComponent } from '../Components/ShoppingComponent'

export default function ShoppingIndex() {
    return (
        <div className="container-fluid">
            <Router>
                <ul>
                    <li><Link to="/electronics">Electronics</Link></li>
                    <li><Link to="/fashion">Fashion</Link></li>
                    <li><Link to="/footwear">Footwear</Link></li>
                    <li><Link to="/shopping">Shopping</Link></li>

                </ul>
                <hr />
                <Routes>
                    <Route path='/electronics' element={<Electonics />} />
                    <Route path='/fashion' element={<Fashion />} />
                    <Route path='/footwear' element={<Footwear />} />
                    <Route path='/shopping' element={<ShoppingComponent />} />

                </Routes>
            </Router>
        </div>
    )
}
