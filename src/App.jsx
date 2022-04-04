import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Layout from './partials/layout/Layout';

function App() {

    const location = useLocation();

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'smooth'
        window.scroll({top: 0})
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]); // triggered on route change


    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/"
                        element={<Dashboard/>}/>
                    <Route exact path="/login"
                        element={<Login/>}/>
                    <Route exact path="/clients"
                        element={<Clients/>}/>
                    <Route exact path="/orders"
                        element={<Orders/>}/>
                    <Route exact path="/products"
                        element={<Products/>}/>
                    <Route exact path="/tasks"
                        element={<Tasks/>}/>
                </Routes>
            </Layout>
        </>
    );
}

export default App;
