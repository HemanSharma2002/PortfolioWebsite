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
import XIcon from '@mui/icons-material/X';
import Page1 from './Page1';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from "react-router-dom"
import CableIcon from '@mui/icons-material/Cable';
export default function Page2(){
    const[open,setOpen]=useState(false)
    return(
        <div>
            <header className=' py-4 flex flex-row justify-between md:px-8 px-3 w-full h-16 bg-slate-950 text-white'>
                <div className=''>
                    <div className=' rotate-45 hover:rotate-180 duration-500'><CableIcon/></div>
                </div>
                <div className=' flex flex-row'>
                    <div className='px-2'><button className=' px-3 pb-2 pt-1 bg-yellow-500 rounded-md font-semibold text-black'>Contact</button></div>
                    <div className={`md:hidden  ${open? "hidden":"block"} `} onClick={()=>setOpen(!open)}><MenuIcon/></div>
                    <div className={`md:hidden  ${open?"block" :"hidden"} `} onClick={()=>setOpen(!open)}><CloseIcon/></div>
                </div>
            </header>
            <hr />
            <div className=' w-full h-screen flex flex-row'>
                <div className={` bg-slate-950 text-white md:block ${open?"w-full block":"hidden"} md:w-1/6 flex flex-col items-center duration-300`}>
                    <div className='  bg-slate-950 w-5/6 rounded-md mx-4 my-4 h-5/6'>
                        <div className='flex flex-col items-center md:items-start py-1 '>
                        <p className=' text-xl font-semibold my-1 mx-2 text-white'>Socials</p>
                        <div className=' flex flex-row p-4 hover:pt-3 hover:pb-5 duration-150 cursor-pointer'>
                            <div className='px-3 text-pink-500'><InstagramIcon/></div>
                            <p>Instagram</p>
                        </div>
                        <div className=' flex flex-row p-4 hover:pt-3 hover:pb-5 duration-150 cursor-pointer'>
                            <div className='px-3 text-blue-500'><LinkedInIcon/></div>
                            <p>Linked In</p>
                        </div>
                        <div className=' flex flex-row p-4 hover:pt-3 hover:pb-5 duration-150 cursor-pointer'>
                            <div className='px-3'><GitHubIcon/></div>
                            <p>Github</p>
                        </div>
                        <div className=' flex flex-row p-4 hover:pt-3 hover:pb-5 duration-150 cursor-pointer'>
                            <div className='px-3'><XIcon/></div>
                            <p>Twitter</p>
                        </div>
                        <div className=' flex flex-row p-4 hover:pt-3 hover:pb-5 duration-150 cursor-pointer'>
                            <div className='px-3 text-yellow-400'><CodeIcon/></div>
                            <p>LeetCode</p>
                        </div>
                        <div className=' flex flex-row p-4 hover:pt-3 hover:pb-5 duration-150 cursor-pointer'>
                            <div className='px-3 text-red-400'><EmailIcon/></div>
                            <p>Email</p>
                        </div>
                    </div></div>
                </div>
                <div className={`bg-slate-950 ${open?"hidden":"block w-full"} md:w-5/6 flex flex-wrap md:block duration-300 overflow-scroll`}>
                    
                    <div className='text-black h-40 w-full mx-1 my-5 flex flex-col items-center md:items-start
                    bg-[url("https://worgs.net/wp-content/uploads/2014/08/picture-bg.gif")]'>
                        <div className='flex flex-row p-6 '>
                            <img src="https://media.licdn.com/dms/image/C4D03AQEHlrydhH8DQA/profile-displayphoto-shrink_400_400/0/1635920758812?e=1715817600&v=beta&t=vUo6olq38gXC3c60CjBHFhJ6e1YnGLtdHAgvCcL4iUc" alt="" className='h-28 w-28 rounded-full border-black border-4'/>
                        <div className='my-5 mx-4'>
                            <div className='font-bold text-3xl'>Heman Sharma</div>
                            <div className=' flex flex-row my-2 '>
                                <p className='text-sm mr-10'>hemansharma2002@gmail.com</p>
                                <div className=' cursor-pointer ' ><EmailIcon/></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* -----Projects---- */}
                    <div className='text-white w-full '>
                        <p className='text-xl font-bold px-5'>Projects</p>
                        <div className='w-full flex flex-wrap '>
                            <div className='text-sm md:h-80 md:m-4 md:mx-8 rounded-lg md:w-64 bg-white  w-11/12 m-4 mx-10'>
                                <img className='md:h-40 md:w-64 rounded-lg h-64 w-full' src="https://storage.needpix.com/rsynced_images/e-commerce-1606962_1280.png" alt="" />
                                <div className='p-2 text-black '>
                                <h1 className=' text-xl font-semibold'>E Commerce Website</h1>
                                <div className=' text-sm text-gray-700'>
                                <p>FrontEnd: React js , Tailwind CSS, Material Ui,Tailwind Ui</p>
                                <p>Backend: Java Spring Boot </p>
                                <p>Database: My Sql</p>
                                <p>Others: Docker,Github</p>
                                </div>
                                </div>
                            </div>
                            <div className='text-sm md:h-80 md:m-4 md:mx-8 rounded-lg md:w-64 bg-white  w-11/12 m-4 mx-10'>
                                <img className='md:h-40 md:w-64 rounded-lg h-64 w-full' src="https://www.pngitem.com/pimgs/m/245-2456104_png-transparent-icon-todo-list-png-download.png" alt="" />
                                <div className='p-2 text-black '>
                                <h1 className=' text-xl font-semibold'>Multi User Todo Application</h1>
                                <div className=' text-sm text-gray-700'>
                                <p>FrontEnd: React js , Tailwind CSS</p>
                                <p>Backend: Java Spring Boot uses Jwt Authentication </p>
                                <p>Database: My Sql</p>
                                </div>
                                </div>
                            </div>
                            <div className='text-sm md:h-80 md:m-4 md:mx-8 rounded-lg md:w-64 bg-white  w-11/12 m-4 mx-10'>
                                <img className='md:h-40 md:w-64 rounded-lg h-64 w-full' src="https://www.leadsquared.com/wp-content/uploads/2022/04/sales-management.png" alt="" />
                                <div className='p-2 text-black '>
                                <h1 className=' text-xl font-semibold'>Sale Buddy</h1>
                                <div className=' text-sm text-gray-700'>
                                <p>FrontEnd: React js , Tailwind CSS, Material Ui</p>
                                <p>Backend: Java Spring Boot,Hibernate </p>
                                <p>Database: My Sql</p>
                                </div>
                                </div>
                            </div>
                            <div className='text-sm md:h-80 md:m-4 md:mx-8 rounded-lg md:w-64 bg-white  w-11/12 m-4 mx-10'>
                                <img className='md:h-40 md:w-64 rounded-lg h-64 w-full' src="https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg" alt="" />
                                <div className='p-2 text-black '>
                                <h1 className=' text-xl font-semibold'>Youtube Clone</h1>
                                <div className=' text-sm text-gray-700'>
                                <p>FrontEnd: React js , Tailwind CSS, Material Ui</p>
                                <p>Backend: Java Spring Boot </p>
                                <p>Database: My Sql</p>
                                <p>Others: Docker,Github</p>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <p className='text-xl font-bold px-5'>What I know</p>
                        <div className=' flex flex-wrap'>
                            <div className=' text-gray-500 bg-gray-900 m-3 mx-12 h-44 rounded-md md:h-72 md:w-52 w-11/12 '>
                                <p className=' text-xl font-bold m-2 p-3'>Frontend</p>
                                <div className='flex flex-wrap '>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3'>HTML</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3'>CSS</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Tailwind CSS</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>React js</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3'>Java Script</p>
                                </div>

                            </div>
                            <div className=' text-gray-500 bg-gray-900 m-3 mx-12 h-44 rounded-md md:h-72 md:w-52 w-11/12 '>
                                <p className=' text-xl font-bold m-2 p-3'>Backend</p>
                                <div className='flex flex-wrap '>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Hibernate</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Spring Boot</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Java</p>
                                </div>

                            </div>
                            <div className=' text-gray-500 bg-gray-900 m-3 mx-12 h-44 rounded-md md:h-72 md:w-52 w-11/12 '>
                                <p className=' text-xl font-bold m-2 p-3'>DataBase</p>
                                <div className='flex flex-wrap '>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3'>Mongu DB</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>My Sql</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Postgres Sql</p>
                                </div>

                            </div>
                            <div className=' text-gray-500 bg-gray-900 m-3 mx-12 h-44 rounded-md md:h-72 md:w-52 w-11/12 '>
                                <p className=' text-xl font-bold m-2 p-3'>Others</p>
                                <div className='flex flex-wrap '>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3'>JUnit 5</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Postman</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3 border-yellow-400 border-2'>Github</p>
                                    <p className=' bg-slate-950 p-2 px-4 text-sm rounded-md m-2 mx-3'>AWS</p>
                                </div>

                            </div> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}