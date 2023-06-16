import React from "react";
import '../styles/header.css'

import notificationBell from '../images/notification-bell-5743.png'
import emailIcon from '../images/compose-mail-5781.png'
import userIcon from '../images/user-5865.png'


function Header(){
    return(
        <div className="header">
            <a href="#" className="emailLink">
                <img src={emailIcon} alt="e-mail icon" id="emailIcon"/>
            </a>
            <a href="#" className="NotificationLink">
                <img src={notificationBell} alt="notification bell icon" id="notificationIcon"/>
            </a>
            <a href ="#" id="userSettingsButton">
                <img src={userIcon} alt="user profile icon" id="userIcon"/>
            </a>
        </div>
    )
}

export default Header;