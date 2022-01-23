import React from "react";
import {AiFillHome} from "react-icons/ai";
import {IoLibrarySharp} from "react-icons/io5"
import {FaSearch} from "react-icons/fa"
import {MdContactSupport} from "react-icons/md"

export const SidebarData = [
    {
        title: 'dashboard',
        path: '/dashboard',
        icon: <AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'Library',
        path: '/library',
        icon: <IoLibrarySharp />,
        class: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <FaSearch />,
        class: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <MdContactSupport />,
        class: 'nav-text'
    }
]
