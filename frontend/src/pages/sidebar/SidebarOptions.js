import React from 'react'
import './SidebarOption.css'

const SidebarOptions = ({ active, text, Icon}) => {
  return (
    <div className={`sidebarOptions ${active && 'sidebarOptions_active'}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions