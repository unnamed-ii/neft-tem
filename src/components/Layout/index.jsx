import React from 'react';
import "./style.scss"
import Header from "../header";
import Footer from "../footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <div className="layout-content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;