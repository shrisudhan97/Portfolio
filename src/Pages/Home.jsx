import React from 'react';
import TypingEffect from './Type';
import "./Scroll.css";
import Scroll1 from './Scroll1';
function Home() {
  
  return (
    <div>
      <div className="bg-[url('./Pictures/pp1.png')] bg-cover bg-no-repeat h-[2200px] overflow-x-hidden md:scrollbar-hidden " id='home'>
      <nav className="h-20 flex flex-wrap fixed bg-black w-full">
        <div className="flex gap-1 p-0 md:p-2">
      
          <div className="font-sudhan text-sm mt-4 text-white md:text-2xl pl-9 pt-3">sudhan</div>
          <div className="w-1.5 h-1.5 mt-6 bg-[grey] rounded-full md:w-2 md:h-2 md:mt-11"></div>
          <nav className=" mt-7 ml-40 md:ml-110">
            <ul className="flex flex-nowrap mr-35 gap-3 md:gap-20 md:mr-10">
              <li className="hover:underline hover:decoration hover:underline-offset-6 text-[#c9bfbf]  text-sm font-nav md:text-2xl">
               <a href='#home'> Home</a>
              </li>
              <li className="hover:underline hover:decoration hover:underline-offset-6 text-[#c9bfbf] text-sm font-nav md:text-2xl">
                <a href="#about">About</a>
              </li>
              <li className="hover:underline hover:decoration hover:underline-offset-6 text-[#c9bfbf]  text-sm font-nav md:text-2xl">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <br /><br />
      <div className="flex-colomn mx-auto justify-content text-center justify-items-center gap-y-9 mt-15">
       <img alt="" className='bg-white w-60 h-50 rounded-full'/>
        <br />
        <br />
        <div className="text-white font-text md:text-xl">Hi! I am Sudhan ..</div>
        <br />
        <br />
        {/* Typing Effect for "Front End Web Developer" */}
        <div className="text-[grey] font-heading text-xl md:text-7xl">
          <TypingEffect text="Front End Web Developer" speed={100} />
        </div>
      
      </div>
      <div className="flex justify-center">
      <a href="#project"><button className='w-30 h-13 bg-[#dedee3]  rounded-xl mt-8 font-mono'>My Projects</button></a>
      </div>
      <br /><br /><br /><br />
      
     <div className='p-9 md:ml-45' id='about'>
     <div className="h-[500px] flex flex-wrap overflow-y-scroll scrollbar-hidden bg-[#cbc7c7] w-[300px] rounded-4xl ml-5 bg-[url('./Pictures/box.png')] md:w-[1100px] md:h-150">
  <div className="about p-4 flex flex-wrap gap-4 md:flex-col">
    <center className='font-text md:ml-50'>
      Introduction
      <br /><br />
      <div className="text-4xl "><b>About Me</b></div>
    </center>
    <br />
    <div className="content gap-15 flex flex-wrap md:flex flex-row">
      <div className="photo w-60 h-70 bg-white ml-5 rounded-4xl md:w-80 md:h-90">nj</div>
      <div className="flex flex-col w-70 gap-8 md:w-130">
        <div className="description font-code1">
          I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
        </div>
        <div className="details gap-4 flex flex-col md:flex md:flex-row w-140">
          <div className="languages w-65 h-50 rounded-2xl bg-[#e7e4e4] p-3 flex flex-col gap-3 font-code text-sm hover:scale-105 transition-transform duration-500">
            <img src="/src/Pictures/code.png" className='w-10 h-10' />
            <div className='font-extrabold'>Languages & Tools</div>
            Java , C , SQL , TypeScript , React Js , Mongo Db , JavaScript
          </div>
          <div className="education w-65 h-50 bg-[#e4dbdb] rounded-2xl p-3 font-code text-sm gap-3 flex flex-col hover:scale-105 transition-transform duration-300 hover:shadow-amber-100">
            <img src="/src/Pictures/education.png" className='w-10 h-10' />
            <div className='font-extrabold'>Graduation</div>
            B.E in Electronics and Communication
          </div>
          <div className="projects w-65 h-50 bg-[#dfd6d6] rounded-2xl p-3 font-code text-sm gap-3 flex flex-col hover:scale-105 transition-transform duration-500">
            <img src="/src/Pictures/work.png" className='w-10 h-10' />
            <div className='font-extrabold'>Projects Done</div>
            Done 3 Projects
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     <br /><br /><br />
     
     </div>
      <div className="text-white justify-items-center font-text md:flex flex-col" id='project'>
        <center><div className='text-2xl'>My Projects</div></center><br /><br /><br />
        <div className="flex flex-wrap gap-19 justify-center">
          <div className="project1 h-70 w-70 rounded-4xl bg-[url('./Pictures/attendance.jpeg')] flex items-center justify-center bg-cover hover:scale-103 transition-transform duration-500" >
          <h1 className='font-extrabold text-l'>SMART ATTENDANCE SYSTEM</h1>
          </div>
          <div className="project1 h-70 w-70 rounded-4xl bg-[url('./Pictures/calculator.jpeg')] flex items-center justify-center bg-cover hover:scale-103 transition-transform duration-500" >
          <h1  className='font-extrabold text-2xl'>SAP Calulator</h1>
          </div>
          <div className="project1 h-70 w-70 rounded-4xl bg-[url('./Pictures/college.jpeg')] flex items-center justify-center bg-cover hover:scale-103 transition-transform duration-500" >
          <h1  className='font-extrabold text-2xl'>Websites</h1> 
          </div>
  
        </div>
      </div>
      <br /><br />
      <div className="w-[100] h-80 justify-items-center-center " id='contact'>
        <br /><br />
       <div className="contact text-3xl font-code text-white"><center>See My profile</center></div><br /><br /><br />
       <div className="icon flex flex-wrap gap-15 justify-center  md:gap-40">
       <a href="https://github.com/shrisudhan97?tab=repositories"><img src="src/Pictures/git.png" className='w-8 h-8'/></a>
        <a href="https://github.com/shrisudhan97?tab=repositories"><img src="src/Pictures/gmail.png" className='w-8 h-8'/></a>
      <a href="https://www.linkedin.com/in/shrisudhanb/"> <img src="src/Pictures/linkedin.png" className='w-8 h-8'/></a>
      <a href="https://leetcode.com/problemset/"> <img src="src/Pictures/leetcode.png" className='w-8 h-8'/></a>
       </div>
      </div>
     </div>
      </div>
      
    
  );
}

export default Home;