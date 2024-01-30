import React from 'react'
import Sidebar from '../../components/SideBar/Sidebar'
import EventList from '../EventList/EventList'
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react";
function EventOrg() {
  
    
  
  return (
    <>
      <Sidebar/>
      <EventList/>

    </>
  )
}

export default EventOrg
