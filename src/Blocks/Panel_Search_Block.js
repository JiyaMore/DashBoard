import React from 'react'
import Profile from '../Assets/avatar.svg'
import '../Styles/Panel.css'
import pen from '../Assets/pen.svg'
import { DatePicker, Space } from 'antd';

const Panel_Search_Block = ( {drawerTitle}) => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
  return (
    <>
    <section>
      <p>
      <span className='span_one_ser'>Updated By</span> 
      <span className='span_two_ser'><img className='img_two_ser' src={Profile}/> Fatma Gozde </span>
      <span className='span_three_ser'>23.01.2023 | 21:45:43</span>
      </p>

      <div className='Details2'>
      
      <div class="container">
  <div class="row">
    <div id='phase-dec' class="col-1">
      Phase Description:
    </div>
    <div class="col-2">
     
    </div>
    <div id='details-para' class="col">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    <img className='pen' src={pen}/>
    </div>

    <div className='status'>
    <h6 className='statustag'>Status/Date:</h6>
    <select id='statusselect' className='form-select form-select-sm' aria-label='Status Select'>
    <option defaultValue>Select Status</option>
    <option value="1">Completed</option>
    <option value="2">Not Started</option>
    <option value="3">InProgress</option>
    <option value="4">Uncertain</option>
    <option value="5">Unplanned</option>
    </select>
    <Space  direction='vertical'>
      <DatePicker className='Date' onChange={onChange} />
    </Space>
  </div>
     
    
  </div>
  
   <div   className= 'checklist'>
   <span id="checklist-name">CheckList:</span>
    <div  id='checklist_box'>
     <p id='checklist_box_text'>
     A konntrol Listesi
      </p>
    </div>
   </div>
  
   <div   className= 'Doctyp'>
   <span id="checklist-name">Doc type</span>
    <div  id='checklist_box'>
     <p id='checklist_box_text'>
     {drawerTitle}  Gizlilik Sozlesmesi
      </p>
    </div>
   </div>
  



</div>


      </div>
      </section>
    </>
  )
}

export default Panel_Search_Block
