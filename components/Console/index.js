import React from 'react'
import { useGlobal } from '../../context/GlobalContext'

export default function Console() {
    const {organization} = useGlobal()
    return (
        <div>{organization}</div>
    )
}
