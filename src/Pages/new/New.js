import React, { useState } from 'react'
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"

const New = ({ inputs,title }) => {
  const [file, setFile] = useState("");
  console.log(file)
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='topz'>
          <h1>{title}</h1>
        </div>
        <div className='bottomz'>
          <div className='leftv'>
            <img src={
                file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
            /></div>
          <div className='rightv'>
            <form>
              <div className='formInput'>
                <label>
                  <DriveFolderUploadOutlinedIcon/>
                  Image
                </label>
                <input type="file"  onChange={(e) => setFile(e.target.files[0])}/>
              </div>

              {inputs.map((input) => (
              <div className='formInput' key={input.id} >
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
            <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New