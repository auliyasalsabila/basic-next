import React from 'react'
import { useGlobal } from '../../context/GlobalContext'
import Console from '../Console'

export default function DetailBlogs() {
    const {filter, setFilter, dataFiltered, setDataFiltered, data} = useGlobal()
    return (
        <div>
                    <select value={filter} onChange={e=>setFilter(e.target.value)}>
                        <option value="All">All</option>
                        <option value={"Auliya Salsabila"}>Auliya Salsabila</option>
                        <option value={"Melly Hermawati"}>Melly Hermawati</option>
                        <option value={"Pajar"}>Pajar</option>
                    </select>
                    {
                        dataFiltered?.map((value, i) => {
                            console.log(data.length-1)
                            return (
                                <>
                                    <h2>Blog {value.blog}</h2>
                                    <u>Penulis : {value.penulis}</u>
                                    <p>{value.text}</p>
                                    <Console />
                                    {
                                        i!==data.length-1&&<hr></hr> //render kondisi &&
                                    /* {i!==data.length-1?<hr></hr>:null} render kondisi ternary operator */
                                    }
                                </> 
                            )   
                        })
                    }
                    
                </div>
    )
}
