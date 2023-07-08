import React from 'react'
import Layouts from '../components/Layout'
import Performances from '../components/TablePerformance'
import PerformanceProvider from '../context/PerformanceContext'
export default function performances() {
    return (
        
            <PerformanceProvider>
                <Performances />
            </PerformanceProvider>

    )
}
