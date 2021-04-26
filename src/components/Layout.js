import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
// import '../styles/custom.scss'
import '../styles/global.css'
import {useState} from 'react';
import { Router } from "@reach/router"



export default function Layout({ children }) {

    return (
        <div className="layout">
            {/* <Router basepath="/" > */}
            <Header />
            
            <div className="content">
                { children }
            </div>
            <Footer/>
            {/* </Router> */}
        </div>
    )
}
