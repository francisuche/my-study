import React, {useEffect} from 'react';

import collection, {selectCollections} from './collection'

import {useDispatch, useSelector} from 'react-redux'

import { Link } from 'react-router-dom';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { AddCollection } from './collection';

import style from './collection.css'

import { nanoid } from 'nanoid';
// collection : [
//     id,
//     title,
//     leadingimage,
//     cards : [],
//     dateAdded,
//     dateUpdated,
//     lastViewed,
// ]

let  item ={
         id : nanoid(),
        title : 'data structures and algorithms',
        leadingimage : 'exciting.gif',
        cards : [],
        dateAdded : Date.now().toLocaleString(),
        dateUpdated: Date.now().toLocaleString(),
        lastViewed : Date.now().toLocaleString(),
        }

export default function CollectionModule(){
  
  let collections = useSelector(selectCollections);

  let dispatch = useDispatch();
 let tempcollections = Array(4).fill(null);

  useEffect(()=>{
      console.log('here')
       tempcollections.map(()=>{
          dispatch(AddCollection({
         id : nanoid(),
        title : 'data structures and algorithms',
        leadingimage : 'http://localhost:3000/Physics%20Video/exciting.jpg',
        cards : [],
        dateAdded : Date.now().toLocaleString(),
        dateUpdated: Date.now().toLocaleString(),
        lastViewed : Date.now().toLocaleString(),
        }))
      })
  }, [])

  let collectionDiv = [];
  console.log(collections);
  if(collections){
     collectionDiv = collections.map((collection, index)=><MyCollection key={index} collection={collection}/>)
  }
  
  return(<>
    
      {/* <div class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8 pt-10 pb-16 sm:pt-11 md:pt-12"> 
             {collectionDiv}
        </div> */}
        <div style={{display: 'flex', overflow : 'hidden', flexWrap: 'wrap'}}>
        {collectionDiv}
        </div>
  </>);
}


function MyCollection({collection}){
    let {id, title, leadingImage, cards} = collection;
    return (
        <>
          <div class= 'card-collection'>
            <div class ='main'>
            <img src="http://localhost:3000/Physics%20Video/Night%20Sky-MarkRainer.jpg" height = '20px' />
            <div class = 'caption'>
                {title}
            </div>
              <div class="card-footer">
                  <div style={{width: '24px'}} class='w-1/2'>
                  <span class="transition-transform duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                        </svg>
                    </span>

                      </div>
                      <div>
                          (4 items)
                      </div>

                       <div class= 'dropdown-icon'>
                       <IconOption Icon ={DotsVerticalIcon} width = {6} />
                       </div>
            </div>
            </div>
            </div>
             
      
            
        </>
    )
}

function IconOption({Icon, width}){
    return (
        <div className = "w-16">
            <Icon className = {`w-${width} h-${width}`} />
        </div>
    )
}