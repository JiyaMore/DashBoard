import React,{useState} from 'react'
import search from '../Assets/search.svg'
import { Tabs } from 'antd';
import xmark from '../Assets/xmark.svg'
import versions from '../Assets/versions.svg'
import Panel_Search from '../Blocks/Panel_Search_Block'
import Panel_Version from '../Blocks/Panel_Version_Block'

const { TabPane } = Tabs;

const Panel = () => {
  const [activeTab, setActiveTab] = useState('1'); // State to track active tab

  const onChange = (key) => {
    setActiveTab(key); // Update the active tab when tab is changed
  };

  let activeTabContent;

  if (activeTab === '1') {
    activeTabContent = <Panel_Search />;
  } else if (activeTab === '2') {
    activeTabContent = <Panel_Version/>;
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane
          tab={
            <h6 className='tab-n-style'>
              <span>
                <img src={search} alt="Search Icon" />
                <span className='tab-name-style'>Details</span>
              </span>
            </h6>
          }
          key="1"
        ></TabPane>
        <TabPane
          tab={
            <h6>
              <span>
                <img src={versions} alt="Versions Icon" />
                <span className='tab-name-style'>Versions</span>
              </span>
            </h6>
          }
          key="2"
        ></TabPane>
      </Tabs>

      
      {activeTabContent}             {/* Display the content of the active tab */}
    </div>
  );
};

export default Panel;