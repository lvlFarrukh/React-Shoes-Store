import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../component/Home';
import Products from '../component/Products';
import ProductDetail from '../component/ProductDetail';
import ProductIndex from '../component/ProductIndex';
import NotFound from '../component/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Products/>}>
                    <Route path="/" element={<ProductIndex/>}/>
                    <Route path=":productId" element={<ProductDetail/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
