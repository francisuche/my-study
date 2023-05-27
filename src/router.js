import { Form } from "react-router-dom";
import { AddCard } from "./card";
import {selectCards, selectCardIds} from './card'
import {nanoid} from 'nanoid'
// import './contact.css'
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";



/** Play begins here */



import {useRef} from 'react'
import collection, { AddCollection, AddCardItemById, AddItemToCollection, AddManyToCollection, deleteAllFromCollection, deleteManyFromCollection, deleteItem } from './collection';
import './Play.css'
import { selectCardById } from './card';
import {store } from './app/store'

export default function Play(){
     const [card_id, setId] = useState('');
     const [collection_id, fixCollectionId] = useState('');
     const [ cardIds, fixCards] = useState([]);
     const [cards] = useState([])
     const [value, fixValue] = useState(null)

    function AddId(){

      fixCards((prevCards)=> [...prevCards, card_id])
      setId('')
    }

    let dispatch =useDispatch();
    let myRef = useRef();

    let collection;
console.log(collection)
    function handleChange(value){

      if (value === 'AddCollection'){
        let collection = {
                      id : nanoid(),
                      title : 'Data Structures and Algorithm',
                      leadingImage : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                      cards : [],
                      dateAdded: Date.now().toLocaleString() , 
                      dateUpdated : Date.now().toLocaleString(), 
                      lastViewed: Date.now().toLocaleString()
                  }
                  dispatch(AddCollection(collection))
      }
      else if( value ==='AddCardItemById'){
       dispatch(AddItemToCollection(collection_id, card_id))
      }
      else if (value ==='AddManyToCollection'){
        dispatch(AddManyToCollection(cardIds, collection_id,))
      }
      else if(value  ==='deleteAllFromCollection'){
          dispatch(deleteAllFromCollection(collection_id))
      }
      else if(value ==='deleteManyFromCollection'){
        dispatch(deleteManyFromCollection(cardIds, collection_id))
    }
    else if(value ==='deleteItem'){
      console.log({collection_id, card_id})
      dispatch(deleteItem(collection_id, card_id))
  }
  fixCards([])
            
    }

    function fixRef(){
        let value = myRef.current.value;
        fixValue(value)
    }

    const options = [
        'AddCollection', 'AddCardItemById', 'AddManyToCollection', 'deleteAllFromCollection','deleteManyFromCollection' , 'deleteItem'
    ]

    return(
        <>
        <div>
            <select name ="action" ref ={myRef} onChange ={()=>fixRef()}>
            {options.map((opt, index)=>(
              <option key ={index} value ={opt}> {opt} </option>
            ))}
            </select>
            <button onClick ={()=>{handleChange(value)}}> effect change  </button>
        </div>
        <p>
            <label> Enter a collection id: </label>
            <input type ="text" value = {collection_id} onChange={(e)=>(fixCollectionId(e.target.value))}  />
        </p>
        <p>
            <label>  Enter an Id: </label>
            <input type ="text"  value ={card_id}  onChange={(e)=>setId(e.target.value)} />
            <button onClick ={()=>AddId()} > Add Item</button>
        </p>

        <ul>
          {cardIds.map((item, index)=><li key = {index}> #{item} </li>)}
        </ul>

        
        <div>

        </div>
        </>
    )
}























// {
//   path: 'collection'
// },
// {
//   path: 'collection/:id',
// },
// {
//   path:'/card/:id'
// },
 let contact ={
     first : 'francis',
     last: 'mav',
     twitter: 'here',
     avatar : './Physics Video/exciting.gif',
     notes : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
export function EditCard(){
   const dispatch =useDispatch();

    const{first, last, twitter, avatar, notes} = contact;


    const turninCard = ()=>{

      /*
      { 
    id,
    title,
    caption,
    leadingimage,
    dateAdded,
    dateUpdated,
    lastViewed,
    favorite,
    referenced,
    tags : []
    media : []
}

      */
      console.log('here now');
      dispatch(AddCard({id: nanoid(), title: first, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',  leadingimage: avatar, notes, dateAdded: Date.now().toLocaleString() , dateUpdated : Date.now().toLocaleString(), lastViewed: Date.now().toLocaleString(), tags : [], media : [] }))
      console.log({store: store.getState()})
      console.log('here')
    }
    return (
        <>

          <p>
        <span>Name</span>
        <input
          placeholder="title"
          aria-label="title"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit" onClick={()=>turninCard()}>Save</button>
       
        <button type="button">Cancel</button>
      </p>
      <br />
      <hr  />
      <Play />
        </>
    )
}

// export const CardSection =()=>{
//   const cards = useSelector(selectCardIds);
//   return (<>
//      {cards.map(card=><Card id= {card.id} />)}
//      </>
//   )
// }

/*
{ 
    id,
    title,
    caption,
    leadingimage,
    dateAdded,
    dateUpdated,
    lastViewed,
    favorite,
    referenced,
    tags : []
    media : []
}
id,
dateAdded,
    dateUpdated,
    lastViewed,
    favorite,
    referenced


*/



//getting data
//redux thunk connect online, retrieve data
//from local forage
//dispatch to redux

//posting data
// route to a link, loader getState to retreive data
// post data, action redux thunk postdata dispatch

