import React, { useEffect, useState } from 'react'
import Card from './Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {add,addAmount} from '../redux/slices/List'
import Chart from 'react-apexcharts'

const Start = () => {
    const dispatch = useDispatch()
    const array = useSelector((state)=>state.cart.list)
    let totalAmount = useSelector((state)=>state.cart.totalamount)
    const [person,setPerson] = useState();
    let per_person  = (parseFloat(totalAmount)/person).toFixed(2);
    const [id,setId] = useState(1);
    const [data,setData] = useState({name:"" , amount:""});

    const [allItem,setAllitem] = useState([]);
    const [allAmount,setAllamount] = useState([]);

    useEffect(()=>{
        let ItemList = [];
        let ItemAmount = [];
        for(let i=0;i<array.length;i++){
            ItemList.push( array[i].name);
            ItemAmount.push( parseInt(array[i].amount));
        }
        setAllitem(ItemList);
        setAllamount(ItemAmount);
    },[array])

    function personhandler(event){
        setPerson(event.target.value);
    }
    function addhandler(){
        if(data.item === "" || data.amount === ""){
            toast.error("Please enter all values");
            return;
        }
        let newData = {
            id:id,
            name:data.name,
            amount:data.amount
        }
        dispatch(add(newData));
        dispatch(addAmount(newData.amount));
        setId(id+1);
        toast.success("Added to List")
        setData({ name: '', amount: '' });
    }
    function changehandler(event){
        const {name,value} = event.target;
        setData(prevData=>{
            return{
                ...prevData,
            [name]: value
            }
        });
    }
  return (
    <div className='app'>
        <div className="app_container">
        <div className="pie_chart">
            <div className="person">
                <span>
                    Total Expense: Rs.{totalAmount}
                    <label htmlFor="">
                        No. of Person : <input type="text" placeholder='Ex- 1' value={person} onChange={personhandler}/>
                    </label>
                    Expense Per Person: <div style={{color:'green'}}>Rs.{per_person}</div>
                </span>
            </div>
            <div className="pie">
                <Chart
                    type='pie'
                    width={400}
                    height={400}
                    series={allAmount}
                    options={{
                        noData:{text:"No Data"},
                        labels:allItem
                    }}
                />
            </div>
        </div>
        <div className="track_data">
                <div className="item_data">
                    {
                        array.length > 0 ? (
                            <>
                            {
                                array.map((item)=>{
                                    return <Card key={item.id} item={item} setData={setData} data={data}/>
                                })   
                            }
                            </>
                        ):(
                            <div>Start adding your expenses here.</div>
                        )
                    }
                </div>
            <div className="add_data">
                <div className="input_data">
                    <input type="text" 
                    placeholder='Ex: Hotel'
                    name='name'
                    value={data.name}
                    onChange={changehandler} />
                    <input type="text" 
                    placeholder='Rs.'
                    name='amount'
                    value={data.amount}
                    onChange={changehandler}/>
                </div>
                <div className="add_button">
                    <button onClick={addhandler}>Add</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Start
