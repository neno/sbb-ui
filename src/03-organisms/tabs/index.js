import React from 'react';
import TabList from '../../02-molecules/tab-list'

const Tabs = ({children, tabs}) => (
    <div 
      className='o-tabs'
      data-module="tabs"
      >
      <TabList tabs={tabs} />
      {children}
    </div>
  );

export default Tabs;