import React, { Component } from 'react'
import SideBar from './SideBar';
import NavBar from '../components/NavBar';
import Display from './Display';
import '../styles/homepage.css';

const ProfileScreen = ({ Items }) => {
    return (
        <>
            <div className="Page">
                <NavBar />
                <div className="SideBar">
                    <SideBar productItem={Items} />
                </div>
                <div className="PageDisplay">
                    <Display productItem={Items} />
                </div>
            </div>
        </>
    );
}

export default ProfileScreen;