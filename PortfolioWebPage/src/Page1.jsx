import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
export default function Page1(){
    const[menu,setMenu]=useState()
    const[open,setOpen]=useState(false)
    return(
        <div>
      <header className={` flex flex-row justify-between w-full h-12 p-3 ${open && " h-40"} duration-300`}>
        <div>Logo</div>
        <ul className={`md:flex  md:block ${open ?" pt-10":" hidden"} duration-300 `}>
          <li className=' px-2'>Home</li>
          <li className=' px-2'>Todo</li>
          <li className=' px-2'>Contact</li>
          <li className=' px-2'>About</li>
        </ul>
        <div className=' flex flex row'><div><button className=' mx-1'>Sign In/Out</button></div>
        <div className={`mx-1 md:hidden ${open ?" hidden ":" block"}`} onClick={()=>setOpen(!open)}><MenuIcon /></div>
        <div className={`mx-1 md:hidden ${!open ? " hidden ":" block"}`} onClick={()=>setOpen(!open)}><CloseIcon/></div>
        </div>
      </header>
      <div className=" bg-slate-950 text-white w-full h-screen flex">
      <div className=' w-1/6 '>
      <div className="  bg-slate-900 h-full">
        <div className=" flex flex-col items-center py-10">
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><HomeIcon/></div>
            <p className={`hidden md:block`}>Home</p>
          </div>
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
          <div className={`mx-2`}><WhatshotIcon/></div>
            <p className={`hidden md:block`}>Trending</p>
          </div>
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><CodeIcon/></div>
            <p className={`hidden md:block`}>Snipets</p>
          </div>
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><PlayCircleIcon/></div>
            <p className={`hidden md:block`}>Videos</p>
          </div>
          
        </div>
        <p className="mx-5 text-center text-xl font-semibold hidden md:block">Socials</p>
        <div className=" flex flex-col items-center">
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><InstagramIcon className=' text-pink-800'/></div>
            <p className={`hidden md:block`}>Instagram</p>
          </div>
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><GitHubIcon/></div>
            <p className={`hidden md:block`}>Github</p>
          </div>
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><LinkedInIcon className=' text-blue-600 '/></div>
            <p className={`hidden md:block`}>LinkedIn</p>
          </div>
          <div className=" flex items-center m-3 hover:mt-2 hover:mb-4 duration-200">
            <div className={`mx-2`}><CodeIcon/></div>
            <p className={`hidden md:block`}>LeetCode</p>
          </div>
          
        </div>
      </div>
      </div>
      <div className=" w-5/6  text-center flex flex-row items-center flex-wrap overflow-scroll">
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
        v
        <div className=' bg-red-500 p-10 rounded-md'>
          <div>Hman Sharma</div>
          <p>Heman Sharma</p>
        </div>
      </div>

    </div>
    <footer>
      footer
    </footer>
    </div>
    )
}