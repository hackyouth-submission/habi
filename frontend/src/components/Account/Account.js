import React from 'react'
import avatar from './avatar.png';
import graph from './graph.png';
import chart from './chart.png';

import './Account.css'

class Account extends React.Component {
    render() {
        return <div class="white">
            <div class="profile">
            <img id="avatar" src={avatar} alt="avatar" />
            
            <div class="right">
                <h1>Chi Nhan</h1>
                <h2>Grade 11</h2>

                </div>
            </div>
            <br />
            <br />
            <h2><center>Academic Performance</center></h2>
            <img id="graph" src={graph} alt="graph" />
            <br />
            <br />
            <h2><center>Average Time Spending</center></h2>
            <img id="chart" src={chart} alt="chart" />
        </div>;
    }
}

export default Account;