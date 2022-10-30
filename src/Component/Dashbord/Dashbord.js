import axios from 'axios';
import React from 'react';
import './Dashbord.css';
import { useState, useEffect } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const[month, setmonth]=useState([]);
    useEffect(()=>{
        axios.get('data.json')
        .then(data=>setmonth(data.data))

    },[])

    return (
        <div className='chart-container'>
<div className='chart'>
<BarChart width={600} height={500} data={month}>
        <Bar dataKey="investment" fill="#8884d8" />
        <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
      </BarChart>
      <h2>Bar Chart</h2>
</div>
<div className='chart'>
<AreaChart
          width={600}
          height={500}
          data={month}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <h2>Area Chart</h2>
            </div>
            <div className='chart'>
            <LineChart
          width={600}
          height={500}
          data={month}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
        <h2>Line Chart</h2>
            </div>
            <div className='chart'>
            <PieChart width={600} height={500}>
          <Pie data={month} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={month} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        <h2>Pie Chart</h2>
            </div>
        </div>
       
      
    );
};

export default Dashbord;