import React, { useState } from 'react';
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import menu from '../../data/sidebar';
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({children}) => {
    const navigate = useNavigate();
    const[isOpen, setIsOpem] = useState(true);
    const toggleHandler = ()=>{
        setIsOpem(!isOpen);
    }
    const goHomeHandler = ()=>{
        navigate('/');
    }
  return (
    <div className='layout'>
        <div className='sidebar' style={{width: isOpen ? "230px" : "60px"}}>
            <div className='top_section'>
                <div className='logo' style={{display: isOpen ? "block" : "none"}}>
                    <RiProductHuntLine 
                    fontSize={35}
                    style={{ cursor: "pointer" }}
                    onClick = {goHomeHandler}
                
                    />
                </div>
                <div className='bars' style={{marginLeft: isOpen ? "100px" : "0px"}}>
                   <HiMenuAlt3 
                    style={{ cursor: "pointer" }}
                    onClick={toggleHandler}
                    />
                </div>
           
            </div>
            {menu.map((menuItem, index)=>{
               return <SidebarItem 
                key={index}
                menuItem = {menuItem}
                isOpen={isOpen}
                />
            })}
        </div>
        <main style={{paddingLeft: isOpen ? "230px" : "60px", transition: "all .5s"}}>
            {children}
        </main>
    </div>
  )
}

export default Sidebar