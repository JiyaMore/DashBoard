import React ,{useState} from 'react'
import '../Styles/PanelVersion.css'
import word_blue from '../Assets/word-blue.svg'
import ellipsis from '../Assets/ellipsis.svg'
import note_sticky_3 from '../Assets/note-sticky-3.svg'
import avatar from '../Assets/avatar.svg'
import AddNew from './AddNew'



const Panel_Version_Block = () => {
  const [showAddNew, setShowAddNew] = useState(false); // State variable to control the display
   
 
  return (
    <div>
    
    <div class="container">
  <div  id='row-one'  class="row">
    <div id='kyatt' class="col">
       4 kyatt
    </div>
    <div class="col">
     
    </div>
    <div class="col">
    <button onClick={() => setShowAddNew(true)} id='AddNewbutton' type="button" class="btn btn-primary">Add New</button>
    </div>
  </div>
</div>

{showAddNew ? (
  
    <AddNew  />

) : (


<>

<div id='container1' class="container">
  <div    class="row">
    <div  class="col-1">
    <img id='version-row-icon' src={word_blue}/>
    </div>
    <div class="col">
      <div id='version'>V.1.4 <span id='current_version'>(Current Version)</span></div>
     
      <div id='name'> Fatma Gozde Kardes</div>
      <div> Son Guncelleyen:fgkardes</div>
      <div>Son Guncellem tarhi : 02.07.2022/23:40</div>
    </div>

    <div class="col-2">
    <img className='font' src={ellipsis} />
    </div>
    
  </div>

  <div  id='row2'  class="row">
    <div  class="col-1">
    <img id='version-row-icon' src={note_sticky_3}/>
    </div>
    <div class="col">
      <div> <span className='not'>Not:</span></div>
      <div> loaded while loading document</div>
      
    </div>

   
    
  </div>


</div>


<div id='container2' class="container">
  <div class="row">
    <div class="col-1">
    <img id='version-row-icon' src={avatar}/>
    </div>
    <div class="col">
      <div id='version'>V.1.3 <span id='current_version'>(Current Version)</span></div>
     
      <div id='name'> Fatma Gozde Kardes</div>
      <div> Son Guncelleyen:fgkardes</div>
      <div>Son Guncellem tarhi : 02.07.2022/23:40</div>
    </div>

    <div class="col-2">
    <img id='version-row-icon2' src={word_blue}/>
    <img className='font' src={ellipsis} />
    </div>
    
  </div>

  <div  id='row2'  class="row">
    <div  class="col-1">
    <img id='version-row-icon' src={note_sticky_3}/>
    </div>
    <div class="col">
      <div> <span className='not'>Not:</span></div>
      <div> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime</div>
      
    </div>

   
    
  </div>
  

</div>


 <hr></hr>


 <div id='container2' class="container">
 <div class="row">
   <div class="col-1">
   <img id='version-row-icon' src={avatar}/>
   </div>
   <div class="col">
     <div id='version'>V.1.2 <span id='current_version'>(Current Version)</span></div>
    
     <div id='name'> Ali Sefa Turkmen</div>
     <div> Son Guncelleyen:fgkardes</div>
     <div>Son Guncellem tarhi : 02.07.2022/23:40</div>
   </div>

   <div class="col-2">
   <img id='version-row-icon2' src={word_blue}/>
   <img className='font' src={ellipsis} />
   </div>
   
 </div>

 <div  id='row2'  class="row">
   <div  class="col-1">
   <img id='version-row-icon' src={note_sticky_3}/>
   </div>
   <div class="col">
     <div> <span className='not'>Not:</span></div>
     <div> loaded while loading document</div>
     
   </div>

  
   
 </div>
 

</div>

<hr></hr>

<div id='container2' class="container">
 <div class="row">
   <div class="col-1">
   <img id='version-row-icon' src={avatar}/>
   </div>
   <div class="col">
     <div id='version'>V.1.1 <span id='current_version'>(Current Version)</span></div>
    
     <div id='name'>Yigit Aksoy</div>
     <div> Son Guncelleyen:fgkardes</div>
     <div>Son Guncellem tarhi : 02.07.2022/23:40</div>
     </div>

      <div class="col-2">
      <img id='version-row-icon2' src={word_blue}/>
      <img className='font' src={ellipsis} />
      </div>
   
    </div>

        <div  id='row2'  class="row">
        <div  class="col-1">
       <img id='version-row-icon' src={note_sticky_3}/>
       </div>
       <div class="col">
       <div> <span className='not'>Not:</span></div>
        <div> --- </div>
     
         </div>
        </div>

  
 

   </div>
   </>
    )}


    
 </div>
  )
}

export default Panel_Version_Block
