import React from 'react'
import "./list.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
    <div className='listx'>
      <Sidebar />
      <div className='listContainerx'>
        <Navbar />
        <Datatable />
      </div>
      </div>
  )
}

export default List