import React from 'react'
import '../App.css'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
function navbar() {
  // const navigate = useNavigate();
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="nav h-[60px] w-full flex fixed  items-center px-4 lg:px-10 z-[90] bg-transparent backdrop-blur-lg justify-between">
    <div className="logo pr-10 flex items-center text-[44px] ">
      <h2>B</h2><h2>I</h2><h2>S</h2><h2>H</h2><h2>A</h2><h2>L</h2><h2>.</h2> 
    </div>
    <div className="rnav">
      <div className=' bg-[#00acf0] sad px-4 py-2 capitalize rounded-full '> 
        <Link to="#" onClick={() => handleExternalLink('https://github.com/bisxxal')}>
           <h1 className=' flex items-center gap-2'> visit Repo <FaGithub className=' text-lg'/></h1>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default navbar