import React from 'react'
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='topx'>
          <div className='leftx'>
            <div className='editButton'>Edit</div>
            <h1 className='titlea'>Information</h1>
            <div className='item'>
              <img
                src="https://i.ibb.co/K5rYjZw/img.png"
                alt=""
                className="itemImg"
              />
              <div className='details'>
                <h1 className='itemTitlex'>Jamie Lan</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='ItemValue'>jamielan@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='ItemValue'>9968896074</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Adress:</span>
                  <span className='ItemValue'>st-401,Bridge Town,London</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='ItemValue'>Uk</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User Spending (Lasth 5 months)" />
          </div>
        </div>
        <div className='bottomx'>
          <h1 className='titlea'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single