import React from 'react'
import { useGlobal } from '../../context/GlobalContext'

export default function Contact() {
    const {organization, addres} = useGlobal()
    return (
        <div>
            <p>{organization}</p>
            <p>{addres}</p>
        </div>
    )
}
