import React from 'react'
import { useHome } from '../../context/HomeContext'
import {Card} from 'antd'
export default function Homes() {
    const { data } = useHome()
    const dataTotal = [
        {
            lable: 'Total Task',
            value: 69
        }, 
        {
            lable: 'Total Task',
            value: 69
        }, 
        {
            lable: 'Total Task',
            value: 69
        }, 
        {
            lable: 'Total Task',
            value: 69
        }, 
        {
            lable: 'Total Task',
            value: 69
        }, 
    ]
    return (
        <div>
            <h1 style={{color:'blue'}}>Belajar React JS</h1>
                <hr></hr>
                <p>Daftar Nama Tim Field Track :</p>
                <ul>
                    {
                        data?.map((value, i) => {
                            return <li key={i}>{`Anggota ke ${i + 1} bernama ${value?.Nama} dari kelas ${value?.Kelas}`}</li>
                        })
                        
                    }
                </ul>
                <hr></hr>
                {
            dataTotal?.map((el, i) =>{
                return <Card key={i} el={el}></Card>
            })
        }
        </div>
    )
}
