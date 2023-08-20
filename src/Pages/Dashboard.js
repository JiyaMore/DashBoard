import React ,{useState}from 'react'
import '../Styles/Dashboard.css'
import Home from '../Assets/house-solid.svg'
import Arrow from '../Assets/chevron-right.svg'
import Home_Line from '../Assets/house.svg'
import Filter from '../Assets/list-line-align-right.svg'
import List from '../Assets/tasks.svg'
import Timer from '../Assets/clock-circle.svg'
import Notepad from '../Assets/clipboard-pen.svg'
import Bookmark from '../Assets/bookmark.svg'
import Cube from '../Assets/analysis.svg'
import Calender from '../Assets/calender.svg'
import Anlaysis from '../Assets/reports.svg'
import ThreeDot from '../Assets/ellipsis.svg'
import FilterDown from '../Assets/filter-bars.svg'
import leftarrow from '../Assets/arrow-left.svg'
import SearchIcon from '../Assets/search.svg'
import Microphone from '../Assets/microphone.svg'
import ellipsis from '../Assets/ellipsis.svg'
import caretright from '../Assets/caretright.svg'
import folder from '../Assets/folder-4.svg'
import info_circle_solid from '../Assets/info_circle_solid.svg'
import caret_down  from '../Assets/caret-down.svg'
import caret_right from '../Assets/caretright.svg'
import word from '../Assets/word.svg'
import word_blue from '../Assets/word-blue.svg'
import {Drawer, Row} from 'antd';
import Panel from './Panel'
import xmark from '../Assets/xmark.svg'
import Download from '../Assets/arrow-down-to-line.svg'
import filterNew from '../Assets/filter.svg'


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [subPhaseContent, setSubPhaseContent] = useState('');
  

  const showDrawer = (event) => {                                         //drwawer tilte and 
    
    setOpen(true);
    const spanContent = event.currentTarget.querySelector('.col-3 span').textContent;
    const subPhaseText = event.currentTarget.querySelector('.sub-phase').textContent;
    setDrawerTitle(spanContent);
    setSubPhaseContent(subPhaseText);

  };

  const onClose = () => {
    setOpen(false);
  };




  return (
    <>
      <div className="container-fluid">
      <div className="row">
        <div className="col" id='section-align-with-sidebar'>


        <div className="Profile-name-section" >
        <div className="row">
          <div className="col-9">
          <h1 className='name'>Muamele Munderecati</h1>
          </div>
          <div className="col">
            <img src={leftarrow}/>
          </div>
          
        </div>


        <div class="row" id='count-section'>
          <div class="col">
            <h6 className='count-section-head'>12</h6>
            <p className='count-section-para'>Asama</p>
          </div>
          <div class="col">
          <h6 className='count-section-head'>23</h6>
            <p className='count-section-para'>Alt Klasor</p>
          </div>
          <div class="col">
          <h6 className='count-section-head'>1235</h6>
            <p className='count-section-para'>Dokuman</p>
          </div>
          <div class="col">
            <img src={FilterDown} className='filter-bars'/>
          </div>
        </div>

        

<hr></hr>

        <div className="row">
          <div className="col-9">
          <h1 className='placeholder-name'>Filter by Client/Matter name</h1>
          </div>
          <div className="col">
            <img src={FilterDown} className='filter-down-fade'/>
          </div>
          
        </div>
        <hr></hr>
          <div className='filter-list'>
          <div class="row">
            <div class="col-1" >
            <img src={caretright}/>
            </div>
          <div class="col-1" >
            <img src={folder}/>
          </div>
          <div class="col" >
           <span className='filter-name'>Asana1</span>
          </div>
          <div class="col" id='info-icon' >
             <img src={info_circle_solid}/>
          </div>
        </div>

          <hr class="solid"></hr>

          <div class="row">
            <div class="col-1" >
            <img src={caretright}/>
            </div>
          <div class="col-1" >
            <img src={folder}/>
          </div>
          <div class="col" >
           <span className='filter-name'>Asana2</span>
          </div>
          <div class="col" id='info-icon' >
             <img src={info_circle_solid}/>
          </div>
        </div>

        <hr class="solid"></hr>

        <div class="row">
        <div class="col-1" >
        <img src={caretright}/>
        </div>
      <div class="col-1" >
        <img src={folder}/>
      </div>
      <div class="col" >
       <span className='filter-name'>Asana3</span>
      </div>
      <div class="col" id='info-icon' >
         <img src={info_circle_solid}/>
      </div>
    </div>

    <hr class="solid"></hr>
    
    <div class="row">
    <div class="col-1" >
    <img src={caretright}/>
    </div>
  <div class="col-1" >
    <img src={folder}/>
  </div>
  <div class="col" >
   <span className='filter-name'>Asana4</span>
  </div>
  <div class="col" id='info-icon' >
     <img src={info_circle_solid}/>
  </div>
</div>

<hr class="solid"></hr>

<div class="row">
<div class="col-1" >
<img src={caretright}/>
</div>
<div class="col-1" >
<img src={folder}/>
</div>
<div class="col" >
<span className='filter-name'>Asana5</span>
</div>
<div class="col" id='info-icon' >
 <img src={info_circle_solid}/>
</div>
</div>

<hr class="solid"></hr>

<div class="row">
<div class="col-1" >
<img src={caretright}/>
</div>
<div class="col-1" >
<img src={folder}/>
</div>
<div class="col" >
<span className='filter-name'>Asana6</span>
</div>
<div class="col" id='info-icon' >
 <img src={info_circle_solid}/>
</div>
</div>

<hr class="solid"></hr>

<div class="row">
<div class="col-1" >
<img src={caretright}/>
</div>
<div class="col-1" >
<img src={folder}/>
</div>
<div class="col" >
<span className='filter-name'>Asana7</span>
</div>
<div class="col" id='info-icon' >
 <img src={info_circle_solid}/>
</div>
</div>

<hr class="solid"></hr>

<div class="row">
<div class="col-1" >
<img src={caretright}/>
</div>
<div class="col-1" >
<img src={folder}/>
</div>
<div class="col" >
<span className='filter-name'>Asana8</span>
</div>
<div class="col" id='info-icon' >
 <img src={info_circle_solid}/>
</div>
</div>

<hr class="solid"></hr>
<div class="row">
<div class="col-1" >
<img src={caretright}/>
</div>
<div class="col-1" >
<img src={folder}/>
</div>
<div class="col" >
<span className='filter-name'>Asana9</span>
</div>
<div class="col" id='info-icon' >
 <img src={info_circle_solid}/>
</div>
</div>

<hr class="solid"></hr>

 


        
          
          </div>
          
          

      </div>


          
        </div>



        <div className="col">

          <div className="section-two-topbar">

          <div class="row" id="section-row">
              <div class="col-1">
                <center><img src={Home}/><img src={Arrow}/></center>
              </div>
              <div class="col-1">
              <center><p>CLIENT <img src={Arrow}/></p></center>
              </div>
              <div class="col-1">
              <center><p>MATTER <img src={Arrow}/></p></center>
              </div>
              <div class="col-2">
              <center><p>MUYAMELE DETAY SAYFASI <img src={Arrow}/></p></center>
              </div>
              <div class="col-2">
              <center><p>MUYAMELE MUNDARCATI</p></center>
              </div>
            </div>

            <br></br>





            <div class="row">
              <div class="col-11">
              <div class="container">
                <div class="row">

                  <div class="col-7" id='drop-input-sec-top'>

                      <div className='drop-input-sec'>


                      <div class="row">

                      <div class="col">
                      <div class="dropdown" id='dropdown-sec-one'>
                      <button class="dropdown-toggle" id='dropdown-sec-btn' type="button" data-toggle="dropdown"><img src={folder}/><span>All(Selected Folder)</span>
                      <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                      </div>
                      <div class="col-8">


                      <div class="row">
                          <div class="col-10">
                          <img src={SearchIcon}/><input type="text" id="fname" placeholder='Search within folders and content'name="fname"/>
                          </div>
                          <div class="col">
                          <img src={Microphone}/>
                          </div>
                      </div>


                       
                      </div>
                    
                    </div>

                  </div>


                  

                  </div>


                  <div class="col-3" id='drop-input-sec-top'>

                  <div className='drop-input-sec'>
                  
                  <div class="dropdown" id='dropdown-sec-one'>
                  <button class="dropdown-toggle" id='dropdown-sec-btn-two' type="button" data-toggle="dropdown"><span>All Status</span>
                  <span class="caret"></span></button>
                  <ul class="dropdown-menu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                  </ul>
                </div>
                  </div>

                  
                  </div>


                  <div class="col-1">
                    <div className='white-box'>
                      <img src={Download}/>
                    </div>
                  </div>

                  <div class="col-1">
                  <div className='white-box'>
                  <img src={filterNew}/>
                </div>
                  </div>


                </div>


                 <div className='Table' >
               
                <div   class="container">
                <div class="row">
                <div class="col-1">
                <b>#</b>
                  </div>

                   <div class="col-3">
                    <b> Phase   </b>
                    <img src={caret_down}/>
                  </div>
                  <div class="col-2">
                    <b>status</b>
                    <img src={caret_down}/>
                  </div>
                  <div class="col-1">
                  <b>Doc</b>
                  <img src={caret_down}/>
                  </div>
                  <div class="col-3">
                  <b >Responsible Party</b>
                  <img src={caret_down}/>
                  </div>
                  <div class="col-2">
                  <b>Updated Date</b>
                  <img src={caret_down}/>
                  </div>
                </div>
              </div>
              </div>

            


              <div   onClick={showDrawer} >               
               
                <div  id='main-row'  class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>1</b>
                 </div>

                   <div  class="col-3">
                   <span >ISLEM DOSYALARI/TRANSACTION</span>
                   <div className='sub-phase'>4 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-warning">Devam Etmekte</button>
                  </div>
                  <div class="col-1">
                  <img src={word}/>
                  <span className='doc_version'>V6</span>
                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  11-12-2013
                  </div>
                </div>
              </div>
              </div>
              

              <div  onClick={showDrawer}>
               
                <div id='main-row'  class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>2</b>
                 </div>

                   <div class="col-3">
                   <span>Asama/Phase</span>
                   <div className='sub-phase'>2 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-success">Devam Etmekte</button>
                  </div>
                  <div class="col-1">
                  <img src={word}/>
                  <span className='doc_version'>V6</span>
                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  11-12-2013
                  </div>
                </div>
              </div>
              </div>
             

              <div onClick={showDrawer}>
               
                <div id='main-row'  class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>3</b>
                 </div>

                   <div class="col-3">
                   <span>Asama/Phase</span>
                   <div className='sub-phase'>5 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-danger">Devam Etmekte</button>
                  </div>
                  <div class="col-1">

                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  11-12-2013
                  </div>
                </div>
              </div>
              </div>
             

              <div  onClick={showDrawer}>
               
                <div  id='main-row' class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>4</b>
                 </div>

                   <div class="col-3">
                   <span>Asama/Phase</span>
                   <div className='sub-phase'>5 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-warning">Devam Etmekte</button>
                  </div>
                  <div class="col-1">
                  <img src={word}/>
                  <span className='doc_version'>V6</span>
                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  19-10-2022
                  </div>
                </div>
              </div>
              </div>
              

              <div onClick={showDrawer}>
               
                <div id='main-row'  class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>5</b>
                 </div>

                   <div class="col-3">
                   <span>Asama/Phase</span>
                   <div className='sub-phase'>4 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-success">Devam Etmekte</button>
                  </div>
                  <div class="col-1">
                  
                  
                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  20-12-2023
                  </div>
                </div>
              </div>
              </div>
           

              <div onClick={showDrawer} >
               
                <div id='main-row'  class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>6</b>
                 </div>

                   <div class="col-3">
                   <span>Asama/Phase</span>
                   <div className='sub-phase'>2 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-danger">Devam Etmekte</button>
                  </div>
                  <div class="col-1">
                  <img src={word}/>
                  <span className='doc_version'>V6</span>
                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  22-12-2013
                  </div>
                </div>
              </div>
              </div>
             

              <div  onClick={showDrawer}>
               
                <div id='main-row'  class="container">
                <div class="row">
                <div class="col-1">
                <img src={caret_right}/>
                <b>7</b>
                 </div>

                   <div class="col-3">
                   <span>Asana/Phase</span>
                   <div className='sub-phase'>4 sub Phase</div>
                  </div>
                  <div class="col-2">
                  <button type="button" class="btn btn-warning">Devam Etmekte</button>
                  </div>
                  <div class="col-1">
                  <img src={word}/>
                  <span className='doc_version'>V6</span>
                  </div>
                  <div class="col-3">
                  <div className='table-respon'>
                  Gokusu Safi Iask Avukathk 
                  </div>
                  </div>
                  <div class="col">
                  11-12-2013
                  </div>
                </div>
              </div>
              </div>
              





              </div>
            
              </div>
 
              <Drawer  title= <div className="drawer-title">

              <div>  <img  className="word_blue" src={word_blue}/>  {drawerTitle}
              <img className='cross_sign' src={xmark}/>
              <img className='ellipsis' src={ellipsis}/>
             
                </div>
              <div id='sub-phase-content'>{subPhaseContent}
             
              </div>
              
               </div>
               placement="right" 
               width={570}
              onClose={onClose}
               visible={open}
               closable={false}
             
                >
             
              <Panel  setOpen={setOpen} drawerTitle={drawerTitle}/>
              
             </Drawer>
              




              <div class="col" id='left-side-nav-div'>
                <div className='left-side-nav'>
                
                  <div>
                  <center>
                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Home_Line}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>

                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Filter}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>

                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={List}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Timer}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Notepad}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Bookmark}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Cube}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Calender}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>

                  <hr></hr>

                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Anlaysis}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={ThreeDot}/>
                        
                    </div>

                    


                  </center>
                  </div>
                  
                </div>
              </div>
              
            </div>

          </div>


        


        </div>
        
      </div>
    </div>
    </>
  )
}

export default Dashboard