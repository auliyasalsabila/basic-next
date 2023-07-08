import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'

const QuoteContext = createContext(null)

const Quote = ({ children }) => {
    const [quotes, setQuotes]= useState([])
    const state = {
        quotes, setQuotes
    }
    useEffect(()=>{
        axios.get("https://type.fit/api/quotes")
        .then((response) => {
            console.log(response.data)
            setQuotes(response.data.slice(120,150))
        })
    },[])
    
    return (
        <QuoteContext.Provider value={state}>
        {children}
        </QuoteContext.Provider>
    )
}

export const useQuote = () => {
    const context = useContext(QuoteContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default Quote
