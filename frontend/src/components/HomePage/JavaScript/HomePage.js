import React, { Component } from 'react'
import SideBar from './SideBar';
import NavBar from '../../NavBar';
import Display from './Display';
import '../css/homepage.css';

const HomePage1 = ({Items}) => {
        return (
            <>
                <div className = "Page">
                    <NavBar />
                    <div className = "SideBar">
                        <SideBar productItem = {Items}/>
                    </div>
                    <div className = "PageDisplay">
                        <Display productItem = {Items}/>
                    </div>
                </div>
            </>
        );
}

export default HomePage1;