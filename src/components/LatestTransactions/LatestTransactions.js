import "./latesttransaction.css";

const LatestTransactions = () => {
    const Button=({type})=>{
        return <button className={"latTransBtn " + type }>{type}</button>
    }
    return (
        <div className="latestTransactions">
            <h3 className="latTransTitle">latest transactions</h3>
           <table className="latTransTable">
           <thead> 
                <tr className="latTransTr">
                   <th className="latTransTh">customer</th>
                   <th className="latTransTh">date</th>
                   <th className="latTransTh">amount</th>
                   <th className="latTransTh">status</th>
                </tr>
           </thead>
           <tbody>
           <tr className="latTransTr">
                   <td className="latTransTd">
                       <img className="latTransImg" src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"  alt=""/>
                       <span className="latTransUseName">Marie Curie</span> 
                   </td>
                   <td className="latTransDate">23  may  2021</td>
                   <td className="latTransAmount">$122.50</td>
                   <td className="latTransStatus">
                       <Button type="approved"/>
                   </td>
                </tr>
                <tr className="latTransTr">
                   <td className="latTransTd">
                       <img className="latTransImg" src="http://conversionxl.com/wp-content/uploads/2016/03/nate_munger.png"  alt=""/>
                       <span className="latTransUseName">Marie Curie</span> 
                   </td>
                   <td className="latTransDate">23  may  2021</td>
                   <td className="latTransAmount">$122.50</td>
                   <td className="latTransStatus">
                       <Button type="pending"/>
                   </td>
                </tr>
                
                <tr className="latTransTr">
                   <td className="latTransTd">
                       <img className="latTransImg" src="http://conversionxl.com/wp-content/uploads/2016/03/nate_munger.png"  alt=""/>
                       <span className="latTransUseName">Marie Curie</span> 
                   </td>
                   <td className="latTransDate">23  may  2021</td>
                   <td className="latTransAmount">$122.50</td>
                   <td className="latTransStatus">
                       <Button type="approved"/>
                   </td>
                </tr>
                
                <tr className="latTransTr">
                   <td className="latTransTd">
                       <img className="latTransImg" src="http://conversionxl.com/wp-content/uploads/2016/03/nate_munger.png"  alt=""/>
                       <span className="latTransUseName">Marie Curie</span> 
                   </td>
                   <td className="latTransDate">23  may  2021</td>
                   <td className="latTransAmount">$122.50</td>
                   <td className="latTransStatus">
                       <Button type="rejected"/>
                   </td>
                </tr>
                <tr className="latTransTr">
                   <td className="latTransTd">
                       <img className="latTransImg" src="http://conversionxl.com/wp-content/uploads/2016/03/nate_munger.png"  alt=""/>
                       <span className="latTransUseName">Marie Curie</span> 
                   </td>
                   <td className="latTransDate">23  may  2021</td>
                   <td className="latTransAmount">$122.50</td>
                   <td className="latTransStatus">
                       <Button type="rejected"/>
                   </td>
                </tr>
                <tr className="latTransTr">
                   <td className="latTransTd">
                       <img className="latTransImg" src="http://conversionxl.com/wp-content/uploads/2016/03/nate_munger.png"  alt=""/>
                       <span className="latTransUseName">Marie Curie</span> 
                   </td>
                   <td className="latTransDate">23  may  2021</td>
                   <td className="latTransAmount">$122.50</td>
                   <td className="latTransStatus">
                       <Button type="rejected"/>
                   </td>
                </tr>
           </tbody>
                
           </table>
        </div>
    );
};

export default LatestTransactions;