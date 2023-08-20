import React,{useState} from 'react'
import { InboxOutlined } from '@ant-design/icons';
import '../Styles/AddNew.css'
import cloud_arrow_up_2 from '../Assets/cloud-arrow-up-2.svg'
import { Input } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Button } from 'antd';
import Panel_Search_Block from './Panel_Search_Block'


const AddNew = () => {
  const [closetab, setClosetab] = useState(true);

    const handleclose=()=>{
      setClosetab(false);          // Set closetab to false to close the panel 

    };

  return (
    <>

   <div className='upload'>
   <div className='cloud_img'>
   <img id='img_c' src={cloud_arrow_up_2}/ >
   </div>
<br></br>
<div className='cloud_text'>
<p>
Drag and Drop the items you want to uploadto this area
or choose from your file
</p>
</div>
   </div> 

  <div>
   <div   id='radio-btnn' class="form-check form-check-inline">
   <input  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  value="option1"/>
   <label class="form-check-label" for="inlineRadio1"> <h6>Version </h6></label>
 </div>
 <div class="form-check form-check-inline">
   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
   <label class="form-check-label" for="inlineRadio2"><h6>Signed Copy </h6></label>
 </div>
</div>




<div className='form'>
<form action="/action_page.php"/>
  <label for="cars"><h6>Version Number</h6> </label>
  <br></br>

  <select name="cars" id="cars">
    <option value="volvo">0</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
 

</div>

<div className='form'>
<form action="/action_page.php"/>
  <label for="cars"><h6>From</h6> </label>
  <br></br>

  <select name="cars" id="cars">
    <option value="volvo">Choose</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
 

</div>

<div className='form'>
<form action="/action_page.php"/>
  <label for="cars"><h6>To</h6> </label>
  <br></br>

  <select name="cars" id="cars">
    <option value="volvo">Choose</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
 </div>

<br></br>

<div>
<label for="cars"><h6>Version Description</h6> </label>
<Input className='input_box' placeholder="Text" />
</div>


<div className='footer'>
<hr></hr>
<div style={{ textAlign: 'right' }}>
<Button onClick={handleclose} style={{ marginRight: 8 }}>
  Cancel
</Button>
<Button onClick={handleclose} type="primary">
  Save
</Button>
</div>
</div>





    
    
    </>
  )
}

export default AddNew
