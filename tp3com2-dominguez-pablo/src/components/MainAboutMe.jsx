import React from 'react'
import '../css/mainAboutMe.css'
import db from '../database/db.json'
import img from "../img/yo.jpg";


const MainAboutMe = () => {
  return (
      <div className='backgroundMain'>
        <div className='card'>

          <div className='containerFoto'>
            <img className='fotoCard' src={img} alt="" />
          </div>

          <div className='containerInfo'>
              <h2 className='mb-3'>Sobre Mi</h2>
              <h4> {db.aboutme.descripcion}</h4>
          </div>
        </div>
    </div>
  )
}

export default MainAboutMe
