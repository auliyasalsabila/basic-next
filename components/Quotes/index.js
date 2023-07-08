import React from 'react'
import { Col, Row, Card } from 'antd'
import { useQuote } from '../../context/QuoteContext'

export default function Quotess() {
    const { quotes }=useQuote()
    return (
            <div>
                    <Row gutter={[8,8]}>
                        {
                            quotes.map((quotes, i) => {
                                return (
                                    <Col md={8}>
                                        <Card style={{ width:'100%', height:'100%', textAlign:'center' }} key={i}>
                                            <p><i style={{ fontSize:'17px'}}>{`"${quotes.text}"`}</i></p>
                                            <p>{quotes.author===null?'~Anonim~':`~${quotes.author}~`}</p>
                                        </Card>
                                    </Col>
                                )
                            })
                            
                        }
                    </Row>
            </div>
    )
}
