import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import {remove, subAmount} from '../redux/slices/List'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Card = ({item,setData,data}) => {

    const [edit,setEdit] = useState(false);

    const dispatch = useDispatch();
    function deletehandler(){
        dispatch(remove(item.id));
        dispatch(subAmount(item.amount));
        toast.error("Item Removed")
    }
    function edithandler(){
      setEdit(!edit);
    }
    function editclicked(){
     setData({name:item.name, amount:item.amount});
     dispatch(subAmount(item.amount));
     dispatch(remove(item.id))
    }

  return (
    <div className='card_container'>
        <div className="card_item_1">
            <p>{item.name}</p>
            <p style={{color:'green'}}>Rs.{item.amount}</p>
        </div>
        <div className="card_item_2">
          <div className="delete" onClick={deletehandler}><MdDelete /></div>
          <span onClick={edithandler}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="edit" 
              style={{display:edit?('block'):('none')}} onClick={editclicked}
            >Edit</div>
          </span>
        </div>
    </div>
  )
}

export default Card
