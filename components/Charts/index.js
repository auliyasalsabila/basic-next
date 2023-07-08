// import "./styles.css";
import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380
//   }
// ];

export default function Charts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3333/api/v1/linechart_progress.json?project=all&filter_date_one=2022-10-24&filter_date_two=2022-10-31&role=Admin&username=Septa&date_one=2022-10-24&date_two=2022-10-31&status_summary=all`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <ComposedChart
      width={900}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="date_at"
        label={{ value: "Date", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Daily Progress", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="todo" barSize={20} stackId="a" fill="#00bfff" />
      <Bar dataKey="inprogress" stackId="a" barSize={20} fill="#ffbf00" />
      <Bar dataKey="review" stackId="a" barSize={20} fill="#b3b3cc" />
      <Bar dataKey="overdone" stackId="a" barSize={20} fill="#3366ff" />
      <Line type="monotone" dataKey="done" stroke="#ffd11a" />
      <Line type="monotone" dataKey="outstanding" stroke="#33cc33" />
    </ComposedChart>
  );
}