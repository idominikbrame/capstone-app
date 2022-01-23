import React from 'react';
import {useState} from "react";
import logo from '../../images/podcast-logo.png'
import fifty from '../../images/50-Cent-1024x683.jpg'
import { Link } from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai'
import {SidebarData} from "./SideMenu";
import {FaDotCircle} from "react-icons/fa"
import './Navbar.css'
import {VscTriangleDown} from 'react-icons/vsc'

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        return setSidebar(!sidebar)
    }
    return (
        <>
            {/*Logo/ShowSide Menu */}
            <div className={'navbar'}>
                <Link to='#' className={'menu-bars'}>
                    <img src={logo} alt={"podcast logo"} width={65} height={65} onClick={showSidebar}/>
                </Link>
                <div className={'navbar-right'}>
                    <Link exact to={'/login'}>Login</Link>
                    <Link className={'navbar-userInfo'} to={'/user-info'}><img src={fifty} alt={'user'} width={25} height={25}/><span id={'onlineStatusCircle'}> <FaDotCircle /> </span> <span><VscTriangleDown /></span></Link>
                </div>
            </div>



            {/* Side menu */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={'nav-menu-items'} onClick={showSidebar}>
                    <li>
                    <Link to={'#'} className={'menu-bars-close'}>
                        <AiFillCloseCircle />
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.class}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </>
    );
};
