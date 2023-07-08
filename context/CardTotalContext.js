import { useState, createContext, useContext, useEffect } from 'react'

const CardTotalContext = createContext(null)

const CardTotal = ({ children }) => {
    const [totalLikes, setTotalLikes] = useState(0)
    const like = () => {
        setTotalLikes(totalLikes+1)
    }
    const dislike = () => {
        setTotalLikes(totalLikes-1)
    }
    const state = {
        totalLikes, setTotalLikes, like, dislike
    }
    return (
        <CardTotalContext.Provider value={state}>
        {children}
        </CardTotalContext.Provider>
    )
}

export const useTotalLikes = () => {
    const context = useContext(CardTotalContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default CardTotal
