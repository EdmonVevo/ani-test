import React from 'react';
import './TabRow.scss';

const TabRow = ({ tabList, currentTab, tblHead }) => {
  const hasTabs = tabList?.length;

  if (!hasTabs)
    return tblHead.map(tbl => <td className='tblData'>no data</td>);

  return (
    tabList.map(tab => {
      if (tab.id === currentTab) {
        return (
          <tbody key={tab.id}>
            <tr className='tblRow'>
              <td className='tblData'>{tab.property}</td>
              <td className='tblData'>{tab.address}</td>
              <td className='tblData'>{tab.amount}</td>
              <td className='tblData'>{tab.buyer}</td>
            </tr>
          </tbody>
        )
      }
    })
  )
}

export default TabRow;
