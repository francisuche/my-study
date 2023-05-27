import React, { createRef } from 'react'

import {useRef, useEffect, useState} from 'react';
import './dropzone.css'
function fileSize(file){
    let size = file.size;
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size)/Math.log(k));
    return  parseFloat((size/ Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function fileType(file) {
    let name= file.name;
    return name.substring(name.lastIndexOf('.') + 1, name.length) || name;
}


function validateFile(file){
  let validPictureTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif' ]; 
  if (validPictureTypes.indexOf(file.type) === -1){
     return false;  
   }
  return true;
}


export default function DropZone({fixMedia}){

   let myRef = useRef();
   let imgRef = useRef();
   let previewRef = useRef();

    const [fileArr, fixFileArr] = useState([]);
    const [preview, fixPreview] = useState([])
    let [toggleModal, fixOpenModalToggle] = useState(null);
    const fileDrop=(e)=>{
        e.preventDefault();
       const files = e.dataTransfer.files;
       handleFiles(files);

    }

   

    function handleFiles(files){
        let myfilesArr =  [];
        for (let i = 0; i < files.length; i++){
                let file = files[i];
                if (validateFile(file)){
                        myfilesArr.push(file);
                        console.log(file);
                }
             }
             
             fixFileArr(fileArr=>[...fileArr, ...myfilesArr])
             return myfilesArr;
}

    const dragEnter =(e) =>{
             e.preventDefault();
    }

    const dragLeave = (e) =>{
          e.preventDefault();
    }

    const dragOver = (e)=>{
        e.preventDefault();
    }
    

    const handleChange = (e)=>{
          let files= myRef.current.files;
          handleFiles(files)
    }

   
    
    const Delete = (index) =>{
        //  fixpickedFiles(pickedFiles=>pickedFiles.splice(index, 1))
    }

    function openModal(i){
        var modal = document.getElementById('myModal');
        var imgs =[];
        imgs = document.getElementsByClassName('myImg');
        console.log(imgs)
        var img = imgs[i];
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
    
        modal.style.display = "block";
        if (img){
                let src = img.getAttribute('src');
                modalImg.setAttribute('src', src);
                console.log(fileArr)
                captionText.innerHTML = fileArr[i].name;
        }
}

     function closeModal(){
       var modal = document.getElementById('myModal');
       modal.style.display = "none";
}

    return (<> 
        <div class = "top">
                <p class="title">React Drag and Drop Image Upload</p>
                <div class="content">
                    <div class="container">
                        <div class="drop-container"
                          onDrop = {e=>fileDrop(e)}
                          onDragEnter ={e=> dragEnter(e)}
                          onDragLeave = {e=>dragLeave(e)}
                          onDragOver = {e=>dragOver(e)}>
                                <div class="drop-message">
                                        <div class="upload-icon"></div>
                                        Drag & Drop files here or click to upload
                                        <div> <input type = "file" ref= {myRef} onChange = {e=>handleChange(e)} />
                                        <button type ='button' class='btn btn-primary' onClick={()=>{ 
                                                console.log(fileArr)
                                                fixMedia(fileArr)
                                                fixFileArr([])
                                               }
                                                }> Add </button> </div>
                                </div>
                        </div>
                        <div className='file-display-container'>
                                <div className='flex-container' ref = {previewRef} >
                                        {fileArr.map((file, index)=> {
                                                return (
                                                     <Image  file={file} onClick={()=>openModal(index)} />
                                                )
                                        })}
                                </div>
                        </div>                  
                </div> 
        </div> 
</div>
<div id="myModal" className="modal">
        <span className="close" onClick = {()=>closeModal()}>&times;</span>
        <img className="modal-content" id="img01"  />
        <div id="caption">
        </div>
</div> 
</>
    )
}

// function Modal({fixOpenModalToggle}){
//          let myRef = useRef();
//         fixOpenModalToggle(openModal);
//         function openModal(i){
//                 var modal = document.getElementById('myModal') || null;
//                 var imgs =[];
//                 imgs = document.getElementsByClassName('myImg');
//                 var img = imgs[i];
//                 var modalImg = document.getElementById("img01");
//                 var captionText = document.getElementById("caption");
            
//                 modal.style.display = "block";
//                 if (img){
//                         let src = img.getAttribute('src');
//                         modalImg.setAttribute('src', src);
//                         captionText.innerHTML = "picture";
//                 }
            
//         }

//         const closeModal =()=>{
//                 myRef.current.style.display = "none"
//         }

//         return (
//         <div id="myModal" class="modal" ref={myRef}>
//                 <span class="close" onClick = {()=>closeModal()}>&times;</span>
//                 <img class="modal-content" id="img01" />
//                 <div id="caption"></div>
//         </div>
//         )
// }

class Modal extends React.Component{
        constructor(props){
                super(props)
                this.openModal = this.openModal.bind(this)
                this.closeModal = this.closeModal.bind(this)
                this.myRef = createRef();
        }
        
        openModal(i){
                var modal = document.getElementById('myModal') || null;
                var imgs =[];
                imgs = document.getElementsByClassName('myImg');
                var img = imgs[i];
                var modalImg = document.getElementById("img01");
                var captionText = document.getElementById("caption");
            
                modal.style.display = "block";
                if (img){
                        let src = img.getAttribute('src');
                        modalImg.setAttribute('src', src);
                        captionText.innerHTML = "picture";
                }
        }

        closeModal(){
               var modal = document.getElementById('myModal');
               modal.style.display = "none";
        }

        componentDidMount(){
                this.props.fixOpenModalToggle(this.openModal);
        }
        
        render(){
                return(
                        <div id="myModal" class="modal" >
                         <span class="close" onClick = {()=>this.closeModal()}>&times;</span>
                        <img ref ={this.myRef} class="modal-content" id="img01"  />
                        <div id="caption">
                        </div>
                         </div> 
                )
        }


}

//fixOpenModalToggle={fixOpenModalToggle} collection={fileArr}

/*

class Slide extends React.Component{

        constructor(props){
                super(props);
                let {fixOpenModalToggle, collection} =this.props;
                this.openModal = this.openModal.bind(this)
                this.closeModal = this.closeModal.bind(this)
                this.toggleModal= this.toggleModal.bind(this);
                this.loadFile = this.loadFile.bind(this)
                fixOpenModalToggle(this.toggleModal);

                this.myRef = createRef(null);
               

                this.state ={
                        modalOpen: false
                }
        }

        toggleModal(i){
                console.log(i);
                console.log(this.props)
        //      if (this.state.modalOpen != true){
        //               this.openModal(this.props.collection[i]);
        //               this.setstate({modalOpen: true})
        //      }else{
        //              this.closeModal()
        //              this.setState({modalOpen: false})
        //      }
        }

        openModal(i){
                var modal = document.getElementById('myModal');
                var modalImg = document.getElementById("img01");
                var captionText = document.getElementById("caption");

                modal.style.display = "block";
                this.loadFile(i);
                // let src = img.getAttribute('src');
                // modalImg.setAttribute('src', src);
                captionText.innerHTML = "picture";
        }
        
        loadFile(file){
                const loadend =(e) =>{
                        let result = e.target.result;
                        this.myRef.current.src = result;
                }

                let fileReader = new FileReader();
                fileReader.readAsDataURL(file)
                fileReader.onloadend= loadend;
        }

        next(){

        }

        prev(){

        }

       closeModal(){
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
     }
     

     render(){
             return (
                    <div id="myModal" class="modal">
                         <span class="close" onClick = {()=>this.closeModal()}>&times;</span>
                        <img ref ={this.myRef} class="modal-content" id="img01"  />
                        <div id="caption">
                        </div>
                    </div>  
             )
     }

}

*/



class Image extends React.Component{
        constructor(props){
                super(props);
                this.myRef = createRef(null);
        }

        componentDidMount(){
                const loadend =(e) =>{
                        let result = e.target.result;
                        this.myRef.current.src = result;
                }

                let fileReader = new FileReader();
                fileReader.readAsDataURL(this.props.file)
                fileReader.onloadend= loadend;
        }

        render(){

                return (
                <div onClick={()=>this.props.onClick()}>
                                <img ref ={this.myRef} className = 'myImg' />
                                <div className="file-remove" onClick={()=>{}}>X</div>
                         </div>
                )
        }
}