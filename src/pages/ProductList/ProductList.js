import React,{useState} from 'react';
import "./productlist.css"
import { DataGrid } from '@material-ui/data-grid';
import {productRows} from "../../data"
import {Link} from "react-router-dom";

const ProductList = () => {
    const[data,setData]=useState(productRows);
    const deleteHandel =(id)=>{ 
        setData(data.filter((item)=>item.id !== id));
    }  
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200 ,
        renderCell:(params)=>{ 
            return( 
              <div className="productList"> 
                <img className="productImg" src={params.row.image} alt=""/>
                {params.row.name}
              </div>
            )
          }
    
    },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'action', headerName: 'Action', width: 180,
         renderCell:(params)=>{ 
             return( 
                 <> 
                 <Link to={"/product/" + params.row.id}> 
                   <button className="productEdit" >edit</button>
                 </Link>
                 <button className="productDelete" onClick={()=> deleteHandel(params.row.id)}>delete</button>
                 </>
             )
         }
    
         
    },

 
      ];
    return (
        <div className="productList">
             <DataGrid rows={data}
              disableSelectionOnClick
              columns={columns}
               pageSize={5}
                checkboxSelection 
                />
        </div>
    );
};

export default ProductList;