import { useState, createContext, useContext, useEffect} from 'react'

const ChartsContext = createContext(null)
const Charts = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get(`/api/v1/linechart_progress.json?project=all&filter_date_one=2022-10-17&filter_date_two=2022-10-31&role=Admin&username=Septa&date_one=2022-10-24&date_two=2022-10-31&status_summary=all`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

    const state = {
      data, setData
    }
    return (
        <ChartsContext.Provider value={state} >
        {children}
        </ChartsContext.Provider>
    )
}

export const useCharts = () => {
    const context = useContext(ChartsContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default Charts
