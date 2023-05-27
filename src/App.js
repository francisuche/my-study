import React, { useState } from 'react';
import {nanoid} from 'nanoid'
import logo from './logo.svg';

import './App.css';

import {Component} from 'react';
import { HomeIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/outline';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import { ClockIcon } from '@heroicons/react/outline';
// import {PlusIcon} from '@heroicons/react/solid';
import {FolderIcon} from '@heroicons/react/solid';
import { CollectionIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/outline';
// import styled from 'styled-components';
import {Outlet} from 'react-router-dom'
import Modal from './modal'


function NextApp() {
    return (
        <>
        <div className = "w-screen h-12 bg-blue-300 flex flex-row items-center justify-evenly">
            <div className = "w-1/3">
                <IconOption Icon = {MenuIcon} width = {6}  />
            </div>
            <div className = "w-1/3">
                <p className = "font-medium"> </p>
            </div>
            <div className = "flex flex-row w-1/3 justify-end">
                <div className = "flex flex-row ">
                    <IconOption Icon = {CollectionIcon} width = {6}  />
                    <IconOption Icon = {ClockIcon} width = {6} />
                    <IconOption Icon = {SearchIcon} width = {6}  />
                    <IconOption Icon = {DotsVerticalIcon} width = {6}  /> 
                </div>
            </div>
            </div>
           
        <div className='w-screen'>
            <div className='m-auto'>
                {/* <Main /> w-4/5 */}
                <Outlet />
                <AddNewButton className="absolute " />
            </div>
        </div>
        </>
    )
}

function IconOption({Icon, width}){
    return (
        <div className = "w-16 icon-option">
            <Icon className = "w-6 h-6" />
        </div>
    )
}

function AddNewButton(){
    return(
        <button className = " addbutton bottom-0 right-0 mr-4 mb-8 rounded-full">
             <PlusIcon  className = "w-8 h-8 floating" />
        </button>
    )
}

export function Main(){
    return(
        <div className ="flex flex-row flex-wrap h-screen">
            <div className="w-1/2">
                <ComponentOption component =  "Cards"/>
            </div>
            <div className="w-1/2">
                <ComponentOption component =  "Quizzes"/>
            </div>
            <div className="w-1/2">
                <ComponentOption component =  "Todo Lists"/>
            </div>
            <div className="w-1/2">
                <ComponentOption component =  "Notes"/>
            </div> 
        
        </div>
    )
}

function ComponentOption({component}){
    return (
        <div className = "flex flex-col w-3/5 my-16 mx-auto bg-gray-200 p-8  h-32 text-center items-center justify-evenly" >
            {/* <IconOption Icon = {} /> */}
            <p className = "text-lg"> {component} </p>
        </div>
    )
}


function Header(){

  return (
    <div className='mat-toolbar'>
         <div className="toolbar-row">
           <span>
             My App
           </span>
           <span className="example-spacer">
             <h1>
               title
             </h1>
           </span>
         </div>
    </div>
  )
}

export function NoteCard(){

  return (
    <>
        <div className="mat-card sm:w-full">
            <div className="mat-card-header">
              <div className="mat-card-avatar example-header-image ">
                    
              </div>
              <div className="mat-card-header-text">
                <div className="mat-card-title">
                    Shiba Inu
                </div>
                <div className="mat-card-subtitle">
                    Dog Breed
                </div>
               
              </div>
              <div class='icon'>
               <IconOption Icon = {DotsVerticalIcon} width = {6} />
               </div>
            </div>
           <div style ={{backgroundColor: 'black'}}>
           <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu" class="mat-card-image"></img>
           </div>
             <div className="mat-card-body">
               <p>
               The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
               </p>
             </div>
             <div className='mat-padding' style={{marginBottom: '16px'}}>
             <button style ={{ textAlign: 'left'}}> LIKE </button>
             <button style ={{ textAlign: 'left'}}> LIKE </button>
             </div>
            
        </div>
    </>
  )
}


function App() {
  return (
    <>
    <NextApp />
    {/* <Header />
   <Note /> */}


    </>
  )
}

export function Note(){

  const [curr, fixcurr] = useState(null);
  const [active, fixactive] = useState(false);
 
   function handleClick(i){
     fixcurr(i);
     fixactive(true);
   }

  let imgArr  = ['exciting.gif']
   return (
      <>
        <div class='container'>
          <div className="my-card example-card">
              <div className="row jumbotron card-header">
              <div class = "col-md-6"> 
                        <img src="https://material.angular.io/assets/img/examples/shiba1.jpg" class="img-rounded" alt="Cinque Terre" />
                </div>
                <div class = "col-md-6">
                        <div  class = "page-header header">
                                <h1 style ={{ fontSize: '36px'}}> Data Structures and Algorithm </h1>
                                <h2 style = {{fontSize: '21px', fontWeight: '200'}} > Asymptotic Analysis</h2>
                        </div>
                </div>  
              </div>

              <div className="row jumbotron card-body">

                <div>
                <p>
                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
                </p>
                <p>
                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
                </p>
                <p>
                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
                </p>
                </div>
                <div>
                {['creative writing', 'physics', 'theatre', 'movie'].map((item)=>(<>
              <div className="chip">
                {item}
              </div>
              </>))}
              </div>
              <div className="my-accordion accordion" id="accordionExample">
                <div className="panel">
                  <div className="panel-header">
                  <button class="panel-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Panel
                  </button>
                  </div>
                  <div  id="collapseOne" className="panel-body accordion-collapse collapse show" >
                  <div class="flex-container accordion-body">
                    
                    {imgArr.map((item, index)=>(
                        <div>
                                <img class ="myImg" id = "{{i}}" src = {`./Physics Video/${item}`} alt = "" style={{width: '100%', maxWidth: '150px', maxHeight: '100px'}}
                                  onClick={()=> handleClick(index)}
                                />  
                                <div class="file-remove" onClick={()=>alert()}>X</div>
                                          </div>
                                          
                    ))}
                                        
                    </div>
                  </div>
                </div>
              </div>
              </div>
             


              <button> LIKE </button>
              <button> LIKE </button>
              
          </div>
        </div>
        <Modal imgArr={imgArr} curr ={curr} active ={active} />
      </>
   )
}



export default App;
