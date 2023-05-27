import {useDispatch, useSelector} from 'react-redux'
import { selectCardById } from './card'
import { useLoaderData } from 'react-router-dom';
import {selectCollectionById} from './collection'
import {EditCard} from './router'

import './collection.css'

export default function CollectionComponent(){

    const id = useLoaderData();
        let collection = useSelector(state=> selectCollectionById(state, id));
        let {title, leadingImage, cards} = collection;
        console.log([cards])
    return (
        <>
        <div class='collection' style ={{backgroundColor : 'lightblue', backgroundImage : ``, minHeight: '100vh'}}>
           <div>
           <img src = 'http://localhost:3000/Physics%20Video/exciting.jpg'  />
           </div>
           <div class=' caption'>
           <h2> {title ? title : 'A note'} </h2>
           </div>
        </div>
        <div className = 'flex-container'>
            {cards &&  cards.map((card)=><Card id={card} key ={card} />)}
        </div>
        <div>
            <EditCard />
        </div>
        </>
    )
}

export function componentLoader({params}){
    const {id} = params;
    return id;
}

const Card =({id})=>{
    const item = useSelector(state=>selectCardById(state, id));
    let title = item.title ? item.title : 'My Card';
    let caption = item.caption ? item.caption : '';
  return (
    <div>
           {title && <h1> {title} </h1>}
           {caption && <p> {caption} </p>}
    </div>
  )
}
