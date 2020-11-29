import React from 'react'
import {Outlet} from "react-router-dom"

import Header from './Header'
import Footer from './Footer'

import { GlobalProvider } from '../context/GlobalState'


const Products = () => {

    return (
        <div>
            <GlobalProvider>
                <Header/>

                <Outlet/>

                <Footer/>
            </GlobalProvider>
        </div>
    )
}

export default Products
