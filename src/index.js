import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App , {Main} from './App';
import './index.css';
import EditCard from './editcard'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import {Note, NoteCard} from './App'
import Preview from './Preview'
import DropZone from './dropzone'
import CollectionModule from './collectionModule'
import CollectionComponent,{ componentLoader} from './collectionComponent';
let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
{
  path: 'edit',
  // action: action,
  element:<EditCard />
},
{
  path : 'note',
  element: <Note />
},
{path: 'app',
element : <App />
},
{
  path: 'card',
  element:<>  <NoteCard /></>
},
{
  path : 'preview',
  element: <Preview />
},
{
  path : 'dropzone',
  element: <DropZone />
},
{
  path: 'collection',
  element: <CollectionModule />
},
{
  path: 'collection/:id',
  element: <CollectionComponent />,
  loader : componentLoader,
}
]);


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
<Provider store ={store}>
 <RouterProvider router ={router} />
</Provider>
);




