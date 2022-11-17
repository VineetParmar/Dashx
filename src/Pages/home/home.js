import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import "./home.scss";
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table';


const home = () => {
  let data;
  return (
    <div className='home'>
       <Sidebar />
       <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="last 5 months" aspect={2/1} />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table />
        </div>
       </div>
   </div>
  )
}

export default home