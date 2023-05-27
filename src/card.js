
import { createSlice, createEntityAdapter
  } from '@reduxjs/toolkit'

  const cardAdapter = createEntityAdapter({
   // sortComparer: (a, b) => b.date.localeCompare(a.date)
  });
  
  const initialState = cardAdapter.getInitialState({
    status: 'idle',
    error: null
  })



const card = createSlice({
   name :'card',
   initialState,
   reducers : {
     AddCard : cardAdapter.addOne,
     AddManyCard : cardAdapter.addMany,
     updateCard(state,action){
       let updates = action.payload;
       let post = state.entities[action.payload.id];
       Object.assign(post, updates)
       Object.assign(post, {dateUpdated : Date.now().toLocaleString(), lastViewed: Date.now().toLocaleString() })
     },
     deleteCard: cardAdapter.removeOne,
     deleteCards : cardAdapter.removeMany,
   }
})

  export const { AddCard, AddManyCard, updateCard, deleteCard, deleteCards } = card.actions
  
  export const {
    selectAll : selectCards,
    selectById : selectCardById,
    selectIds : selectCardIds

} = cardAdapter.getSelectors(state => state.card)



  export default card.reducer


