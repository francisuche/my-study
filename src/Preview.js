import React from 'react';

export default function Preview(){
    
   let imgArr   = ['exciting.gif']
    return (
       <>
          <div className="card preview">
              <div className="row jumbotron card-header">
              Data Structures and Algorithm
             <div class = 'poster'>
                 <input type ='file' name ='poster' />
             </div>
           <p>
           <label> Title </label>
              <input type = 'text' name ='title' id = 'title' />
           </p>
           <p>
           <label> Caption </label>
              <input type = 'text' name ='caption' id = 'caption' />
           </p>
              </div>
 
              <div className="row jumbotron">
 
                <div>
                <textarea>
                   Hey there
                </textarea>
                </div>
                <div>
                {['creative writing', 'physics', 'theatre', 'movie'].map((item)=>(<>
              <div className="chip" contentEditable>
                {item}
              </div>
              </>))}
              </div>
              <div className="accordion">
                <div className="panel">
                  <div className="panel-header">
                  Self aware panel
                  </div>
                  <div className="panel-body">
                  <div class="flex-container">
                    
                    {imgArr.map((item)=>(
                       <div>
                               <img class ="myImg" id = "{{i}}" src = {`./Physics Video/${item}`} alt = "" style={{width: '100%', maxWidth: '150px', maxHeight: '100px'}} />  
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
   
      </>
       </>
    )
}