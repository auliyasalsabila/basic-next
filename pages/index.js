import React,{useState, useEffect} from 'react'
import Layouts from '../components/Layout';
import CardTotalProvider from '../context/CardTotalContext'
import CardTotals from '../components/CardTotal'
import Homes from '../components/Home';
import HomeProvider from '../context/HomeContext'
import Buttons from '../components/Button';

export default function Home() {
    return (
    <Layouts>
        <HomeProvider>
            <Homes />
        </HomeProvider>
        <CardTotalProvider>
            <CardTotals />
            <Buttons />
        </CardTotalProvider>
    </Layouts>
        
    )
}
