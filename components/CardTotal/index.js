import React from 'react'
import { Card } from 'antd';
import { useTotalLikes } from '../../context/CardTotalContext';

export default function CardTotals() {
    const {totalLikes} = useTotalLikes()
    return (
        <div>
            <Card className='box-value' style={{ width: 200 }}>{totalLikes}</Card>
        </div>
    )
}
