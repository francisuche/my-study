
import React, {useRef , useState} from 'react'
import {nanoid} from 'nanoid'
import {Form} from 'react-router-dom'
import { AddCardItemById } from './collection';
import { useDispatch, useSelector } from 'react-redux'
import DropZone from './dropzone'
import {AddCard} from './card'

function handleFiles(files){
        let myfilesArr =  [];
        for (let i = 0; i < files.length; i++){
                let file = files[i];
                if (validateFile(file)){
                        myfilesArr.push(file);
                        console.log(file);
                }
             }
             return myfilesArr;
}

function validateFile(file){
  let validPictureTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif' ]; 
  if (validPictureTypes.indexOf(file.type) === -1){
     return false;  
   }
  return true;
}

export default function EditCard(){
    let Arr =['exciting.gif'];
    const [imgArr, fixArr] = useState(Arr);
    const [chipArr, fixchipArr] = useState(['coding', 'coding', 'coding', 'coding'])
    const [chip, fixChip] = useState('');
    const [leadingImage, fixPoster] = useState('') 
    const [title, fixTitle] = useState('')
    const [caption, fixcaption] =useState('')
    const [note, fixnote] = useState('');

    let dispatch = useDispatch()

     let myRef = useRef();
    const deleteFile =(index)=>{
        let Arr = [...imgArr]
         Arr.splice(index, 1);
       fixArr(Arr)
    }

    const deleteChip =(index)=>{
        let Arr = [...chipArr]
         Arr.splice(index, 1);
         console.log(Arr)
         fixchipArr(Arr)
    }

    const addChip =()=>{
        let Arr = [...chipArr];
        if(chip != ''){
            Arr.push(chip);
            fixchipArr(Arr)
            fixChip('');
        }
    }
    const fixMedia = (files)=>{
       let  fileArr = files.map((file)=>file.name)
        console.log({fileArr})
        fixArr((arr)=> arr.concat(fileArr));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let form = document.getElementById('edit-form')
        const formData = new FormData(form);
        let card= {};
        for (const [key, value] of formData) {
            card[key] = value; 
        }
        card['leadingImage']= leadingImage.name
        card['media'] = imgArr;
        card['tag'] = chipArr;

        card = Object.assign(card, { 
            id: nanoid(), 
            dateAdded : Date.now().toLocaleString(),
            dateUpdated: Date.now().toLocaleString(),
            lastViewed : Date.now().toLocaleString()} )
        

       card.poster =card.poster.name

       console.log(card)

       dispatch(AddCard(card))
    }

const handleChange = (e)=>{
          let files= myRef.current.files;
          let myfile= handleFiles(files)
          fixPoster(myfile[0])
    }



    return (
        <>
            <div id = 'edit-card'>
                <form id='edit-form' method="post" onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <input 
                        ref= {myRef}
                        type ='file'
                        name = 'poster'
                        onChange={e=>handleChange(e)}
                        />
                        <input />
                    </div>
                    <p>
                        <label> Title </label>
                            <input type = 'text' name ='title' value={title} onChange={e=>fixTitle(e.target.value)}/>
                        </p>
                    <p>
                        <label> Caption </label>
                        <input type = 'text' name ='caption' value={caption} onChange={e=>fixcaption(e.target.value)} />
                    </p>
                    <div>
                        <div>
                            <textarea name = 'note' value={note} onChange={e=>fixnote(e.target.value)}>
                            </textarea>
                        </div>
                        <div id ='my-chip'>
                        
                            {chipArr.map((chip, index)=>
                            (<div><div> {chip} </div>
                            <span
                               onClick = {()=>{deleteChip(index)}}
                            > X </span> </div>))}
                            <input type='text' name = 'tag' value={chip} onChange={(e)=>fixChip(e.target.value)} />
                            <span
                               onClick = {()=>addChip()}
                            > + </span>
                            </div>
                       <div>
                        <div id = 'media'>
                            {imgArr.map((img, index)=>{
                            return (<div key={index} class=''>
                                <img src = {`./Physics Video/${img}`}  />
                                <button
                                     onClick={()=>{
                                        // alert(`do you want to delete image ${img}?`)
                                        deleteFile(index)
                                    }}
                                >
                                    X
                                </button>
                            </div>)
                        })}
                        
                        </div>
                        <DropZone fixMedia={fixMedia} />
                       </div>
                    </div>
                    <button type='submit'> Add </button>
                </form>
            </div>
        </>
    )
}

