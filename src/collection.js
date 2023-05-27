
import { createSlice, createEntityAdapter
} from '@reduxjs/toolkit'
import { AddCard, deleteCard, deleteCards } from './card';


const collectionAdapter = createEntityAdapter({
})

const initialState = collectionAdapter.getInitialState({
  status: 'idle',
  error: null
})


const collection = createSlice({
  name: 'Collection',
  initialState,
  reducers: {
    AddCollection: collectionAdapter.addOne,
    AddManyCollection : collectionAdapter.addMany,
    AddCardItemById : (state, action)=>{
      let updates = {id :action.payload.collection_id, cards: action.payload.cards, dateUpdated : Date.now().toLocaleString(), lastViewed: Date.now().toLocaleString()  }
       console.log(updates)
      collectionAdapter.upsertOne(state, updates)
    },
    updateCollection(state, action){
            let updates = action.payload;
            Object.assign(updates, {dateUpdated : Date.now().toLocaleString(), lastViewed: Date.now().toLocaleString() })
            collectionAdapter.upsertOne(state, updates)
      }
    },
  })

  export const AddItemToCollection  = (collection_id, card_id)=>{
    return (dispatch, getState)=>{
         let state = getState()
         let collection = state.Collection.entities[collection_id];
         let cards = collection.cards
         cards = cards.concat([card_id]);
        dispatch(AddCardItemById({collection_id, card_id, cards}));
    }
  }

    export const AddManyToCollection= (arr, collection_id)=>{
       return (dispatch, getState)=>{
          let state = getState();
          let collection =  state.Collection.entities[collection_id];
         let cards = collection.cards;
       dispatch(updateCollection({id : collection_id, cards: cards.concat(arr) }))
    }
  }

  export  const deleteAllFromCollection = collection_id =>{
    return  (dispatch, getState)=>{
    let state = getState();
    let collection =  state.Collection.entities[collection_id];
    let cards = collection.cards;
    dispatch(updateCollection({id : collection_id, cards : []}));
    dispatch(deleteCards(cards))
    };
  }

  export const deleteManyFromCollection = (arr, collection_id) =>{
   return (dispatch, getState)=>{
    arr.forEach((card)=>{
             dispatch(deleteItem(collection_id, card));
         })
         dispatch(deleteCards(arr));
   };
 }

  export const   deleteItem = (collection_id, card_id)=>{
    return  (dispatch, getState)=>{
      let state = getState();
          let collection = state.Collection.entities[collection_id];
          if (collection) {
            let index = collection.cards.findIndex(card=> card === card_id);
            if (index > -1) {
                 let cards = Object.assign([], collection.cards)
                 cards.splice(index, 1); 
                 dispatch(updateCollection({id: collection_id, cards, dateUpdated : Date.now().toLocaleString(), lastViewed: Date.now().toLocaleString()}))
            }
          }
          dispatch(deleteCard(card_id));
        }
    }


    export const recentlyViewedCollection=(collection_id)=>{
      return (dispatch, getState)=>{
          let state = getState();
        let collection = state.entities[collection_id];
        if (collection){
          dispatch(updateCollection({id : collection_id}))
        }
      } 
    }

  
  
export const { AddCollection, AddCardItemById, AddManyCollection, updateCollection, } = collection.actions;







export const {
  selectAll : selectCollections,
  selectById : selectCollectionById,
  selectIds : selectCollectionIds
} = collectionAdapter.getSelectors(state => state.Collection)








export default collection.reducer