import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'

const PerformanceContext = createContext(null)

const Performance = ({ children }) => {
    const [dataPerformance, setDataPerformance] = useState([]);
    const [apiSelected, setApiSelected] = useState('best');
    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            align:'center'
        },
        {
            title: 'Name',
            dataIndex: 'engineer_name',
            align:'center'
        },
        {
            title: 'Total Task',
            dataIndex: 'total_task',
            align:'center'
        },
        {
            title: 'Total In Progress',
            dataIndex: 'total_in_progress',
            align:'center'
        },
        {
            title: 'Total Postpone',
            dataIndex: 'total_postpone',
            align:'center'
        },
        {
            title: 'Total In Review',
            dataIndex: 'total_in_review',
            align:'center'
        },
        {
            title: 'Total Done',
            dataIndex: 'total_done',
            align:'center'
        },
    ];

    useEffect(()=>{
            const rules = {
                project: 'all',
                pic: 'all',
                performance: apiSelected
            }
            axios.post("http://127.0.0.1:3333/api/v1/performance_task.json", rules)
            .then((response) => {
                setDataPerformance(response.data)
            })
    },[apiSelected])

    const state = {
        columns,
        dataPerformance, setDataPerformance,
        apiSelected, setApiSelected,
    }
    return (
        <PerformanceContext.Provider value={state}>
        {children}
        </PerformanceContext.Provider>
    )
}

export const usePerformance = () => {
    const context = useContext(PerformanceContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default Performance
