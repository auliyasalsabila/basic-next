import { useState, createContext, useContext, useEffect } from 'react'

const HomeContext = createContext(null)

const Home = ({ children }) => {

    const data = [
        {
            Nama: 'Auliya Salsabila',
            Kelas: 12
        },
        {
            Nama: 'Pajar',
            Kelas: 12
        },
        {
            Nama: 'Melly Hermawati',
            Kelas: 12
        }
    ]

    const [list, setList]= useState([])
    const state = {
        list, setList, data
    }
    return (
        <HomeContext.Provider value={state}>
        {children}
        </HomeContext.Provider>
    )
}

export const useHome = () => {
    const context = useContext(HomeContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default Home
