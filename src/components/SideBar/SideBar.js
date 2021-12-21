import React from 'react';
import "./sidebar.css";
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <div className="sedeBarWrapper"> 
                <div className="sideBarMenu">
                    <h3 className="sidebarTitle">{props.title}</h3> 
                    <ul className="sideBarList"> 
                    <Link to="/" className="link">
                        <li  className="sideBarListItem active"> 
                          <LineStyleIcon className="sideBarIcon"/>
                          home
                        </li>
                    </Link>
                        
                        <li className="sideBarListItem"> 
                          <TimelineIcon  className="sideBarIcon"/>
                          analytics
                        </li>
                        
                        <li className="sideBarListItem"> 
                          <TrendingUpIcon className="sideBarIcon"/>
                          sales
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sidebarTitle">quick menu</h3> 
                    <ul className="sideBarList"> 
                    <Link to="/users" className="link">
                      <li  className="sideBarListItem "> 
                            <PermIdentityIcon className="sideBarIcon"/>
                            users
                          </li>
                    </Link>
                        <Link to="/products" className="link">
                          <li className="sideBarListItem"> 
                            <StorefrontIcon  className="sideBarIcon"/>
                            products
                          </li>
                        </Link>
                        
                        <li className="sideBarListItem"> 
                          <TrendingUpIcon className="sideBarIcon"/>
                          transactions
                        </li>
                        <li className="sideBarListItem"> 
                          <TrendingUpIcon className="sideBarIcon"/>
                          reports
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sidebarTitle">notifications</h3> 
                    <ul className="sideBarList"> 
                        <li className="sideBarListItem "> 
                          <MailOutlineIcon className="sideBarIcon"/>
                          mail
                        </li>
                        
                        <li className="sideBarListItem"> 
                          <FeedbackIcon  className="sideBarIcon"/>
                          feedback
                        </li>
                        
                        <li className="sideBarListItem"> 
                          <TrendingUpIcon className="sideBarIcon"/>
                          messages
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sidebarTitle">staff</h3> 
                    <ul className="sideBarList"> 
                        <li className="sideBarListItem "> 
                          <WorkOutlineIcon className="sideBarIcon"/>
                          manage
                        </li>
                        
                        <li className="sideBarListItem"> 
                          <TimelineIcon  className="sideBarIcon"/>
                          analytics
                        </li>
                        
                        <li className="sideBarListItem"> 
                          <TrendingUpIcon className="sideBarIcon"/>
                          reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default SideBar;
