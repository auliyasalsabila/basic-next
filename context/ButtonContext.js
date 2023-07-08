import { useState, createContext, useContext, useEffect } from 'react'


const ButtonContext = createContext(null)

const Button = ({ children }) => {
    const like = () => {
        setTotalLikes(totalLikes+1)
    }
    const dislike = () => {
        setTotalLikes(totalLikes-1)
    }
    return (
        <CardTotalContext.Provider value={state}>
        {children}
        </CardTotalContext.Provider>
    )
}

export const useButton = () => {
    const context = useContext(ButtonContext)
    if (context === undefined) {
        throw new Error(`useGlobal must be use within a Network Performance`)
    }
    return context
}

export default Button
