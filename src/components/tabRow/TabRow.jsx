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
              {tblHead.map((tbl, index) => (
                <td className='tblData' key={index}>{tab[(tbl.head).toLowerCase()]}</td>
              ))}
            </tr>
          </tbody>
        )
      }
    })
  )
}

export default TabRow;
