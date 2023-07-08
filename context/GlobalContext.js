import { useState, createContext, useContext, useEffect} from 'react'

const GlobalContext = createContext(null)
 // useEffect(()=>{
    //     axios.get("http://localhost:8081/api/v1/list_siswa.json")
    //     .then(response=>
    //         console.log(response.data))
    //     .catch(err=>
    //         console.log(err))
    // },[])

    // useEffect(()=>{
    //     const rules = {
    //         Name: 'tes',
    //         Kelas: '1A',
    //         Gender: 'Perempuan',
    //         Nilai_Indonesia: 100,
    //         Nilai_ENglish: 100,
    //         Nilai_Arabic: 100
    //     }
    //     axios.post("http://localhost:8081/api/v1/insert_nilai.json", rules)
    //     .then(response=>
    //         console.log(response.data))
    //     .catch(err=>
    //         console.log(err))
    // },[])
const Global = ({ children }) => {
    const data = [
        {
            blog: 'Pertama',
            penulis: 'Auliya Salsabila',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            blog: 'Kedua',
            penulis: 'Melly Hermawati',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    
        },
        {
            blog: 'Ketiga',
            penulis: 'Pajar',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]
    const [dataFiltered, setDataFiltered] = useState([])
    const [filter, setFilter] = useState("All")
    useEffect(()=>{
        if(filter === "All"){
            setDataFiltered(data)
        }else{
            let tmp = data.filter(value => value.penulis === filter)
            setDataFiltered(tmp)
        }
    },[filter])
    const [organization, setOrganization] = useState("PT. Immobi Solusi Prima")
    const [addres, setAddres] = useState("Jl. Wijaya I No.37A, RW.5, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12170")
    const state = {
        organization, setOrganization,
        addres, setAddres,
        dataFiltered, setDataFiltered,
        filter, setFilter, data
    }

    return (
        <GlobalContext.Provider value={state} >
        {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default Global
