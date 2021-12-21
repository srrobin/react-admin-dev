import React,{useState} from 'react';
import "./userlist.css";
import { DataGrid } from '@material-ui/data-grid';
import {userRows} from "../../data"
import {Link} from "react-router-dom";

const UserList = () => {
    const[data,setData]=useState(userRows);
    const deleteHandel =(id)=>{ 
        setData(data.filter((item)=>item.id !== id));
    }  
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User', width: 200 ,
        renderCell:(params)=>{ 
            return( 
              <div className="userListUser"> 
                <img className="userListImg" src={params.row.avatar} alt=""/>
                {params.row.username}
              </div>
            )
          }
    
    },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'transaction', headerName: 'Transactions', width: 130 },
        { field: 'action', headerName: 'Action', width: 180,
         renderCell:(params)=>{ 
             return( 
                 <> 
                 <Link to={"/user/" + params.row.id}> 
                   <button className="userEdit" >edit</button>
                 </Link>
                 <button className="userDelete" onClick={()=> deleteHandel(params.row.id)}>delete</button>
                 </>
             )
         }
    
         
    },

 
      ];
    return (
        <div className="userList">
             <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
};

export default UserList;
