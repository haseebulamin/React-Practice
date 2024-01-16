import React from 'react'
import './MagicPhoto.scss'
import  pic1 from '../../Images/pic1.jpg'
import  pic2 from '../../Images/pic2.jpg'
import  pic3 from '../../Images/pic3.jpg'
import  pic4 from '../../Images/pic4.jpg'
export default function MagicPhoto() {
  return (
    <div className="con">
       <div className="gallery">
        <img src={pic1} alt="1 not insert" />
        <img src={pic2} alt="2 not insert" />
        <img src={pic3} alt="3 not insert" />
        <img src={pic4} alt="4 not insert" />
       </div>
    </div>
  )
}
