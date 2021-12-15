import React, { Component } from 'react'
import SideBar from './SideBar';
import NavBar from '../components/NavBar';
import Display from './Display';
import '../styles/homepage.css';

const ProfileScreen = () => {
    return (
        <>
            <div className="Page">
                <NavBar/>
                <div className="SideBar">
                    <SideBar/>
                </div>
                <div className="PageDisplay">
                    <Display/>
                </div>
            </div>
        </>
    );
}

export default ProfileScreen;