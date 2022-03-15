import React from 'react'

const TabItem = ({ tabList, currentTab }) => {
    return (
        <div>
            <table className='tbl'>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Address</th>
                        <th>Amount</th>
                        <th>Buyer</th>
                    </tr>
                </thead>
                {
                    tabList.map((tab, index) => {
                        if (tab.id === currentTab) {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>{tab.property}</td>
                                        <td>{tab.address}</td>
                                        <td>{tab.amount}</td>
                                        <td>{tab.buyer}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    })
                }
            </table>
        </div>
    )
}

export default TabItem;
