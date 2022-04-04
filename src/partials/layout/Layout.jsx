import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Banner from  '../Banner';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function Layout(props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user, setUser] = useState(JSON.parse(Cookies.get("user")))
  const [token, setToken] = useState(Cookies.get("token"))

  const location = useLocation();
  const { pathname } = location;
  const pushTo = useNavigate()

  useEffect(() => {
    if(!user){
      pushTo("/login")
    } 
    console.log(user)
  }, [])

  return (
    <div className={`flex h-screen overflow-hidden`}>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={user}/>

        <main>
          {props.children}
        </main>

        <Banner />

      </div>
    </div>
  );
}
