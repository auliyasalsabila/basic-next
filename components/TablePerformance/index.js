import React from 'react'
import { Table, Card, Row, Col} from 'antd'
import { usePerformance } from '../../context/PerformanceContext'
import axios from 'axios'


export default function Performances() {
    const {columns, dataPerformance, setDataPerformance, apiSelected, setApiSelected,} = usePerformance()
    return (
        <>
        <Card
            style={{
            width: 600,
            marginTop: 50,
            marginLeft: 50
            }}
        >
            <Row gutter={[12,12]}>
                <Col md={12}>
                    <h4 style={{width:300, marginLeft:20, textTransform: 'capitalize'}}>{`Top 10 ${apiSelected} Performance Engineer`}</h4> 
                </Col>
                <Col md={12}>
                    <select size='small' value={apiSelected} onChange={e=>setApiSelected(e.target.value)} style={{ width: 190, marginBottom:20, marginLeft:50}}>
                        <option value="best">Top 10 Best Performance</option>
                        <option value="worst">Top 10 Worst Performance</option>
                    </select>
                </Col>
            </Row>
            <Table columns={columns} dataSource={dataPerformance} size="small" align="center" style={{ width:600, fontSize: 12, backgroundColor:'white'}} 
            pagination={{ total:10, showTotal:(total, range) => `${range[0]}-${range[1]} of ${total} items`, defaultPageSize: 5,  defaultCurrent:1}}
            />
        </Card>
        </>
    )
}
