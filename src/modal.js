
import { useState } from "react";

export default function Modal({active, curr, imgArr}){
     const [Modalopen, fixModal] = useState(false);
    if (active && !Modalopen){
        let modal = document.getElementById('myModal');
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");

        modal.style.display = "block";
        let src = `./Physics Video/${imgArr[curr]}`
        modalImg.setAttribute('src', src);
        captionText.innerHTML = imgArr[curr];
        fixModal(true);
    }
    
    function closeModal(){
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
        fixModal(false);
 }

    return (
        <div id="myModal" className="modal">
        <span className="close" onClick = {()=>closeModal()}>&times;</span>
        <img className="modal-content" id="img01"  />
        <div id="caption">
        </div>
</div> 
    )
}