import React from 'react';
import "./newuser.css"

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">new user</h1>
            <form className="newUserForm">
                <div className="formItem">
                    <label>username</label>
                    <input type="text" placeholder="jone9999"/>
                </div>
                
                <div className="formItem">
                    <label>fullname</label>
                    <input type="text" placeholder="jone smith"/>
                </div>
                
                
                <div className="formItem">
                    <label>email</label>
                    <input type="text" placeholder="jone@gmail.com"/>
                </div>
                
                
                <div className="formItem">
                    <label>password</label>
                    <input type="text" placeholder="password"/>
                </div>
                
                
                <div className="formItem">
                    <label>phone</label>
                    <input type="text" placeholder="+880183574847"/>
                </div>
                
                
                <div className="formItem">
                    <label>address</label>
                    <input type="text" placeholder="New york | USA"/>
                </div>
                
                
                <div className="formItem">
                    <label>gender</label>
                    <div className="newUserGender"> 
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">female</label>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other">other</label>
                    </div>
                </div>

                <div className="formItem">
                    <label>active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>

                <div className="formItem">
                <button className="newUserBtn">create</button>
                </div>
                

            </form>
        </div>
    );
};

export default NewUser;