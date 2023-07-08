import React from 'react'
import { useTotalLikes } from '../../context/CardTotalContext'
import { Button } from 'antd'

export default function Buttons() {
    const {like, dislike} = useTotalLikes()
    return (
        <div>
            <Button type="primary" onClick={like} style={{height:30, marginRight:10, width:60}}>Like</Button>
            <Button type="primary" onClick={dislike} style={{height:30, marginRight:10, width:75}}>Dislike</Button>
        </div>
    )
}
