import React from 'react'
import QuoteProvider from '../context/QuoteContext'
import Quotess from '../components/Quotes'
import Layouts from '../components/Layout'

export default function Quotes() {
    return(
        <Layouts>
            <QuoteProvider>
                <Quotess />
            </QuoteProvider>
        </Layouts>
    )
}
