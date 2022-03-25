import React from 'react';
import 'components/tabRow/TabRow.scss';

const TabRow = ({ tabList, currentTab, tblHead }) => {
    return (
        tabList.length !== 0 ? tabList.map(tab => {
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
            :
            tblHead.map(tbl => (
                <td className='tblData'>no data</td>
            ))

    )
}

export default TabRow;
