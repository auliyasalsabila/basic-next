import React,{useEffect, useState} from 'react'
import DetailBlogs from '../components/DetailBlog'
import Global from '../context/GlobalContext'
import axios from 'axios'
import Layouts from '../components/Layout'


export default function Blogs() {
    return (
        <Layouts>
            <Global>
                <DetailBlogs />
            </Global>
        </Layouts>
    )
}
