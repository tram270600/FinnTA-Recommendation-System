import React, { useState } from 'react';
import '../styles/SideBar.css';
import SideBarData from '../data/SideBarData';
import avatar from '../images/avatar.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import data from '../data/products';
import account from '../data/accounts';
import { useParams } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';

const SideBar = () => {
  const { account_id } = useParams();
  const info = account.accounts.find(x => x.account_id === parseInt(account_id, 10));

  const Owner = account.accounts.find(x => x.account_id === 1);
  var [isOwner, set_isOwner] = useState(Owner.account_id === parseInt(account_id, 10) ? true : false);
  console.log(info);

  return (
    <div className='SideBarContent'>
      {/* Avatar */}
      <div className='SideBarAvatar'>
        <img src={avatar} className="SideBarPicture" />
      </div>
      {/* User Name */}

          <li
            className="SideBarName"
          >
            {info.username}
          </li>

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
          <a href="/upload" style={{color: "white"}}>
            CREATE POST
            </a>
          </div>
        </div>
  

      </div>
      {/* Bio */}

          <div
            className="SideBarBio"
          >
            {info.descripttion}
          </div>


      <div className="SideBarInfor">
        <div className="SideBarContact">Contact</div>
            <li
              className="row"
            >
              <div id="icon">{<EmailIcon/>}</div>
              <div id="title">Email:</div>
              <p
                id="info"
                
              >
                {info.email}
              </p>
            </li>

            <li
              className="row"
            >
              <div id="icon">{<PhoneIcon/>}</div>
              <div id="title">Phone:</div>
              <p
                id="info"
                
              >
                {info.phone}
              </p>
            </li>

            <li
              className="row"
            >
              <div id="icon">{<PeopleIcon/>}</div>
              <div id="title">Social:</div>
              <p
                id="info"
               
              >
                {info.social}
              </p>
            </li>

      </div>
      {/* Log out */}
      {isOwner &&
        <div className="Exit">
          <li className="Logout">
            <a className="LogoutIcon">
              <PowerSettingsNewIcon href="#" />
            </a>
            <a href="#" className="LogoutTitle">
              LOG OUT
            </a>
          </li >
        </div>}
    </div >
  );
}


export default SideBar;