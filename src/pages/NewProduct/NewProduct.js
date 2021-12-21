import React from 'react';
import "./newproduct.css"

const NewProduct = () => {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">new product</h1>
            <form className="newProductForm">
                <div className="formItem">
                    <label>image</label>
                    <input type="file" id="file"/>
                </div>
                
                <div className="formItem">
                    <label>name</label>
                    <input type="text" placeholder="apple airpods"/>
                </div>
                
                
                <div className="formItem">
                    <label>stock</label>
                    <input type="text" placeholder="122"/>
                </div>

                <div className="formItem">
                    <label>active</label>
                    <select className="newProductSelect" name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>

                <div className="formItem">
                <button className="newProductBtn">create</button>
                </div>
                

            </form>
        </div>
    );
};

export default NewProduct;