import React from 'react';
import "./topbar.css";

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';



const Topbar = (props) => {
    return (
        <div className="topBar">
            <div className="topBarWarapper"> 
                <div className="topLeft"> 
                     <div className="appLogo">{props.title}</div>
                </div>
                <div className="topRight"> 
                    <div className="topBarIconContainer"> 
                       <NotificationsNoneIcon/>
                       <span className="iconBadge">2</span>
                    </div>
                    
                    <div className="topBarIconContainer"> 
                       <LanguageIcon/>
                       <span className="iconBadge">2</span>
                    </div>
                    
                    <div className="topBarIconContainer"> 
                       <SettingsIcon/>
                    </div>
                    <img  className="avatar" src="https://thumbs.dreamstime.com/b/indian-man-face-avatar-cartoon-indian-man-face-moustache-glasses-profile-picture-avatar-cartoon-character-portrait-vector-150838538.jpg://www.kindpng.com/picc/m/247-2472348_admin-user-shape-hd-png-download.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

