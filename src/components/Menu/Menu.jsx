import React,{useState} from 'react'
import './Menu.scss'
// import logo from "../../images/logo.png"
// import pen from "../../images/pen_logo.png"
export default function Menu() {
  const [wrapperBg, setWrapperBg] = useState("rgb(196, 194, 191)")
  // const wrapperBg = document.getElementById("wrapper");
  
  const resetbg = ()=>{
    setWrapperBg("rgb(196, 194, 191)");
  }
  const aisle =()=>{
    setWrapperBg("orange");
    // palegreen color
  }
  const about = ()=>{
    setWrapperBg("#F9E625");
  }
  const work = ()=>{
    setWrapperBg("#09E9D3");
  }
  const career = ()=>{
    setWrapperBg("#F7B9AD");
  }
  const contact = ()=>{
    setWrapperBg("#8247FF");
  }
  return (
    <>
    <input type="checkbox" id='active' className='hidden'/>
    <img src="" alt="Logo not insert" className='absolute z-2 ' width={300} height={75}/>
    <h1>logo</h1>
    <p className='touch absolute font-bold cursor-pointer z-2'>
      <span className='get mr-3 relative inline-block line-height-1'>Get in touch</span>
      <p>pen</p>
      <img src="" alt="Pen not insert" width={30} height={30}/>
    </p>
    <label htmlFor='active' className="menu-btn absolute text-center cursor-pointer z-2"><i class="fa-solid fa-equals fa-xl text-black"></i></label>
    <div style={{backgroundColor: `${wrapperBg}`}} className="wrapper fixed top-0 left-0 h-full w-full">
        <ul className="menu list-none p-0 m-0 absolute left-50 text-center">
            <li className='mb-3  '><h1 onMouseEnter={aisle} onMouseLeave={resetbg}  className='item inline-block  no-underline text-black font-bold  aisle'>Aisle</h1></li>
            <li className='my-3 '><h1 onMouseEnter={about} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  about'>About</h1></li>
            <li className='my-3 '><h1 onMouseEnter={work} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  work'>Work</h1></li>
            <li className='my-3 '><h1 onMouseEnter={career} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  career'>Careers</h1></li>
            <li className='my-3 '><h1 onMouseEnter={contact} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  contact'>Contact</h1></li>
        </ul>
        <div className="nav-foot grid z-2 text-black font-bold absolute w-100 ">

           <div className='col-4 text-2xl font-semibold line-height-1 pl-7'>
              <a href="/" className='text-black cursor-pointer line no-underline inline-block'>@testpioneers.com</a><br />
              <a href="/" className='text-black cursor-pointer line no-underline inline-block mt-2'>+92 343 7878767</a>
              <p className='font-normal mt-5 text-lg'><i class="fa-regular fa-copyright"></i> HUA Design Ltd 2023</p>
           </div>

           <div className='priv col-4 text-2xl font-semibold flex justify-content-center mt-8 '>
              <span className='mr-4 line'>Privacy.</span>|<span className='ml-4 line'>Cookies.</span>
            </div>

           <div className='col-4 flex justify-content-end mt-8  pr-5 text-black font-bold text-4xl'>
           <a href="https://twitter.com" target="_blank" rel="noreferrer" className='text-black'><i class="fa-brands fa-twitter fa-beat-fade mx-5"></i></a>
           <a href="https://instagram.com" target="_blank" rel="noreferrer" className='text-black'><i class="fa-brands fa-instagram fa-beat-fade mx-5"></i></a>
           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className='text-black'><i class="fa-brands fa-linkedin fa-beat-fade mx-5"></i></a>
           <a href="https://facebook.com" target="_blank" rel="noreferrer" className='text-black'><i class="fa-brands fa-facebook fa-beat-fade mx-5 "></i></a>
           </div>

        </div>
    </div>
    </>
  )
}