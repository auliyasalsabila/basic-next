import React from 'react'
import { Button } from 'antd'
import  Router from 'next/router'

export default function Login() {
    const handleLogin = () =>{
        localStorage.setItem("isLogin", true)
        Router.push("/")
    } 
    return (
        <div style={{ textAlign:'center', margin:50}}>
            <h1>Login</h1>
            {
                <Button type='primary' onClick={handleLogin}>Login</Button>
            }
        </div>
    )

    //authentication = daftar
    //autharization = hak akses
}
