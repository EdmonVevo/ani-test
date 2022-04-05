import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import TabRow from 'components/tabRow/TabRow';
import './TabList.scss';

const initialTblHeaders = [
  { head: 'Property' },
  { head: 'Address' },
  { head: 'Amount' },
  { head: 'Buyer' }
];

const TabList = () => {

  const tabList = [
    {
      id: 'tab-0',
      tabName: 'Tags',
      property: 'John Doe',
      address: '512 Adora Cir, Roseville, CA 95678, USA',
      amount: '$100 million',
      buyer: 'invesco'
    },
    {
      id: 'tab-1',
      tabName: 'Structure',
      property: 'Adora Townhomes',
      address: '512 Adora Cir, Roseville, CA 95678, USA',
      amount: '$50.75 million',
      buyer: 'invesco'
    },
    {
      id: 'tab-2',
      tabName: 'New Tab',
      property: 'new',
      address: 'new',
      amount: '$new',
      buyer: 'new'
    },
    {
      id: 'tab-3',
      tabName: 'Custom Tabname for Testing',
      property: 'nor',
      address: 'nor',
      amount: '$nor',
      buyer: 'nor'
    }
  ];

  const [tblHead, setTblHead] = useState(initialTblHeaders);
  const [currentTab, setCurrentTab] = useState(tabList.length !== 0 ? tabList[0].id : '');
  const lineRef = useRef(null);
  const activeTabRef = useRef(null);

  const handleCalculateLinePosition = (element) => {
    lineRef.current.style.left = element.current.offsetLeft + 'px';
    lineRef.current.style.width = element.current.offsetWidth + 'px';
  }

  useEffect(() => {
    handleCalculateLinePosition(activeTabRef);
  }, [currentTab]);

  return (
    <>
      <div className="tabs">
        {tabList.length !== 0 ?
          tabList.map(tab => (
            <span
              key={tab.id}
              id={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={classNames({ 'tabData active': tab.id === currentTab, 'tabData': tab.id !== currentTab })}
              ref={tab.id === currentTab ? activeTabRef : null}
            >
              {tab.tabName}
            </span>
          ))
          :
          <div className='noData'>No Data</div>
        }
        <div className="underline" ref={lineRef}></div>
      </div>
      <table className='tbl'>
        <thead>
          <tr className='tblRow'>
            {tblHead.map((tbl, index) => (
              <th className='tblHead' key={index}>{tbl.head}</th>
            ))}
          </tr>
        </thead>
        <TabRow tabList={tabList} currentTab={currentTab} tblHead={tblHead} />
      </table>
    </>
  )
}

export default TabList;
