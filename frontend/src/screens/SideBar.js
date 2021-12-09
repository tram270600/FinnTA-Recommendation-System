import React, { Component } from 'react';
import '../styles/SideBar.css';
import SideBarData from '../data/SideBarData';
import avatar from '../images/avatar.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

class SideBar extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        {/* Avatar */}
        <div id="avatar" style={{ height: "20%" }}>
          <img src={avatar} className="SideBarAvatar" />
        </div>
        {/* User Name */}
        {SideBarData.User.map((val, key) => {
          return (
            <li
              key={key}
              className="SideBarName"
            >
              {val.name}
            </li>
          );
        })}
        {/* Follow */}
        <div className="follow">
          <div id="post">
            {SideBarData.User.map((val, key) => {
              return (
                <div
                  key={key}
                  id="number"
                >
                  {val.post}
                </div>
              );
            })}

            <div id="followtitle">Posts</div>
          </div>

          <div id="follower">
            {SideBarData.User.map((val, key) => {
              return (
                <div
                  key={key}
                  id="number"
                >
                  {val.follower}
                </div>
              );
            })}

            <div id="followtitle">Followers</div>
          </div>

          <div id="following">
            {SideBarData.User.map((val, key) => {
              return (
                <div
                  key={key}
                  id="number"
                >
                  {val.following}
                </div>
              );
            })}

            <div id="followtitle">Following</div>
          </div>

        </div>
        {/* Profile */}
        <div className="SideBarProfile">

          <div className="HalfSideBar">
            <div className="Interact">
              EDIT PROFILE
            </div>
          </div>

          <div className="HalfSideBar">
            <div className="Start">
              CREATE POST
            </div>
          </div>

        </div>
        {/* Bio */}
        <div>
          {SideBarData.User.map((val, key) => {
            return (
              <div
                key={key}
                className="SideBarBio"
              >
                {val.bio}
              </div>
            );
          })}
        </div>

        <div className="SideBarInfor">
          <div className="SideBarContact">Contact</div>
          {SideBarData.Information.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                <p
                  id="info"
                  onclick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  {val.info}
                </p>
              </li>
            );
          })}
        </div>
        {/* Log out */}
        <div className="Exit">
          <li className="Logout">
            <a className="LogoutIcon">
              <PowerSettingsNewIcon href="#" />
            </a>
            <a href="#" className="LogoutTitle">
              LOG OUT
            </a>
          </li >
        </div>
      </div >
    );
  }
}

export default SideBar;