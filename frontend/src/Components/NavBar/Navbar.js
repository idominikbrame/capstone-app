import React from 'react';
import {useState} from "react";
import fifty from '../../images/50-Cent-1024x683.jpg'
import { Link } from 'react-router-dom';
import {MdMenu} from 'react-icons/md'
import {SidebarData} from "./SideMenu";
import {RiMenu3Line} from 'react-icons/ri'
import {FaDotCircle} from "react-icons/fa"
import './Navbar.css'
import {VscTriangleDown} from 'react-icons/vsc'
import {ImSearch} from 'react-icons/im'

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => {
        return setSidebar(!sidebar)
    }

    const searchInput = () => {
        console.log('searching...')
    }
    return (
        <>
            {/*Logo/ShowSide Menu */}
            <div className={'navbar'}>
                <Link to='#' className={'menu-bars'} onClick={showSidebar}>
                    {sidebar ? <RiMenu3Line /> : <MdMenu />}
                    <h3 id={'site-name'}>RENDER</h3>
                    <h3 id={'pipe'}>|</h3>
                    <h3 >Your Quick News Digest Source</h3>
                </Link>
                <form>
                    <button type={"button"} onClick={searchInput}><ImSearch /></button>
                    <input placeholder={'Search By Keyword'}/>

                </form>
                <div className={'navbar-right'}>
                    <Link exact to={'/login'}>Login</Link>
                    <Link exact to={'/register'}>Register</Link>
                    <Link className={'navbar-userInfo'} to={'/user-info'}><img src={fifty} alt={'user'} width={25} height={25}/><span id={'onlineStatusCircle'}> <FaDotCircle /> </span> <span><VscTriangleDown /></span></Link>
                </div>
            </div>



            {/* Side menu */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={'nav-menu-items'} onClick={showSidebar}>
                    <li>
                    <Link to={'#'} className={'menu-bars-close'}>
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.class}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span id={item.id}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </>
    );
};
