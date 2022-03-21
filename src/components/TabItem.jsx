import React from 'react'

const TabItem = ({ tabList, currentTab }) => {
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
            <tbody>
                <tr className='tblRow'>
                    <td className='tblData'>no data</td>
                    <td className='tblData'>no data</td>
                    <td className='tblData'>no data</td>
                    <td className='tblData'>no data</td>
                </tr>
            </tbody>
    )
}

export default TabItem;
