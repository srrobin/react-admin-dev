import React from 'react';
import "./user.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className="user">

            <div className="userTopSection">
                <h1 className="userTitle">edit user</h1>
                <Link to="/newuser">
                    <button className="userCreateButton">create</button>
                </Link>
                
            </div>

            <div className="userContainer">


                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://geodash.gov.bd/uploaded/avatars/netai/resized/240/netai.jpg" className="usershowImg" alt=""/>
                        <div className="userShowTopTitle"> 
                            <span className="userShowName">Edmond Halley</span>
                            <span className="userShowTitle">software engineer </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userInfoTitle">account details</span>
                        <div className="userInfo">
                            <PermIdentityIcon className="userInfoImg"/>
                            <span className="userInfoDetail">halley999</span>
                        </div>
                        <div className="userInfo">
                            <CalendarTodayIcon className="userInfoImg"/>
                            <span className="userInfoDetail">10.12.1999</span>
                        </div>
                        <span className="userInfoTitle">contact</span>
                        <div className="userInfo">
                            <PhoneAndroidIcon className="userInfoImg"/>
                            <span className="userInfoDetail">+ 1 22  333 556</span>
                        </div>
                        <div className="userInfo">
                            <MailOutlineIcon className="userInfoImg"/>
                            <span className="userInfoDetail">halley@gmail.com</span>
                        </div>
                        <div className="userInfo">
                            <RoomIcon className="userInfoImg"/>
                            <span className="userInfoDetail">New York  |  USA</span>
                        </div>
                    </div>
                </div>


{/* user update section  */}

                <div className="userUpdate">
                  <h1 className="userTitle">edit </h1>
                  <form className="userUpdateForm">
                      
                    <div className="userUpdateLeft">

                        <div className="userUpdateInfo">
                            <label>username</label>
                            <input type="text"
                            placeholder="halley999"
                            className="userUpdateInput"
                            />
                        </div>
                        
                        <div className="userUpdateInfo">
                            <label>fullname</label>
                            <input type="text"
                            placeholder="Edmond Halley"
                            className="userUpdateInput"
                            />
                        </div>
                        
                        <div className="userUpdateInfo">
                            <label>email</label>
                            <input type="text"
                            placeholder="halley@gmail.com"
                            className="userUpdateInput"
                            />
                        </div>
                        
                        <div className="userUpdateInfo">
                            <label>phone</label>
                            <input type="text"
                            placeholder="+ 1 22  333 556"
                            className="userUpdateInput"
                            />
                        </div>
                        
                        <div className="userUpdateInfo">
                            <label>address</label>
                            <input type="text"
                            placeholder="New York  |  USA"
                            className="userUpdateInput"
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                      <div className="userUpdateLoad">
                           <img className="userUpdateImage" src="https://geodash.gov.bd/uploaded/avatars/netai/resized/240/netai.jpg" alt=""/>
                           <label htmlFor="file"><CloudUploadIcon  className="userCreateIcon"/></label>
                           <input type="file" id="file" style={{display:"none"}}/>
                      </div>  
                       <button className="userCreateButton">update</button>
                    </div>
                  </form>
                </div>


            </div>
        </div>
    );
};

export default User;