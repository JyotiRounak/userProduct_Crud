import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const activeSublink = ({isActive}) => (isActive ? "active" : "link");
const activelink = ({isActive}) => (isActive ? "active" : "link");

const SidebarItem = ({menuItem , isOpen}) => {
    const[expandmenu, setExpandMenu]= useState(false);
    if(menuItem.childrens){
        return (
        <div className={
            expandmenu ? "sidebar-item s-parent open" : "sidebar-item s-parent"
            }
            >
            <div className='sidebar-title'>
             <span>
                {menuItem.icon && 
                <div className='icon'>
                    {menuItem.icon}
                </div>
                } 
                {isOpen && 
                <div className='item-titel'>
                {menuItem.title}
                </div>}
             </span>
             <MdKeyboardArrowRight size={25} className='arrow-icon' onClick={()=> setExpandMenu(!expandmenu)}/>
            </div>

            <div className='sidebar-content'>
             {menuItem.childrens.map((child, index) => {
                return (
                 <div key={index} className="s-child">
                    <NavLink 
                    to={child.path}
                    className={activeSublink}
                    >
                    <div className="sidebar-item">
                       <div className="sidebar-title">
                       {child.icon && <div className="icon">{child.icon}</div>}
                        {isOpen && <div> {child.title} </div>}
                        </div>
                    </div>
                    </NavLink>
                 </div>
                )
             })}
            </div>
        
        </div>
        )
    }
    else{
        return ( 
            <NavLink 
            to={menuItem.path}
            className={activelink}
            >
            <div className="sidebar-item s-parent">
               <div className="sidebar-title">
               <span>
               {menuItem.icon && <div className="icon">{menuItem.icon}</div>}
                {isOpen && <div> {menuItem.title} </div>}
                </span>
                </div>
            </div>
            </NavLink>
        )
    }
  
};

export default SidebarItem