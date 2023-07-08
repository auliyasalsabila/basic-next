import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
export default function Try() {
  // const getInitialState = () => {
  //   const value = "Orange";
  //   return value;
  // };
  
  // const [value, setValue] = useState(getInitialState);
  
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  useEffect(()=>{
        const rules = {
            project: 'all',
            pic: 'all'
        }
        axios.post("http://127.0.0.1:3333/api/v1/show_lable.json", rules)
        .then((response) => {
            setScoope(response.data)
        })
},[])
const [scoope, setScoope]= useState([])
scoope?.map((value, i) => {
  return(
    <>
    <div>{value.total_task}</div>
    <div>{value.total_site}</div>
    <div>{value.total_route}</div>
    <div>{value.total_dt_engineer}</div>
    <div>{value.total_rg_engineer}</div>
    </>
    
  )
})
const dataTotal = [
  {
      lable: 'Total task', 
      value: `${value.total_task}`
  },
  {
    lable: 'Total site', 
    dataIndex : 'total_site'
  },
  {
    lable: 'Total route', 
    dataIndex : 'total_route'
  },
  {
      lable: 'Total dt engineer',
      dataIndex: 'total_dt_engineer',
  },
  {
      lable: 'Total dt rigger',
      dataIndex: 'total_rg_engineer'
  },
];

    return(
    <>
    {
      dataTotal?.map((el, i) => {
        return <li key={i}>{`Anggota ke ${i + 1} bernama ${el?.lable} dari kelas ${el.value}`}</li>
      })
    } 
    </>
    )
}
