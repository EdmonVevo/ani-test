import React, { useState } from 'react';
import classNames from 'classnames';
import TabItem from 'components/TabItem';

const TabList = () => {

    const tabList = [
        {
            id: 'tab1',
            tabName: 'Tags',
            property: 'John Doe',
            address: '512 Adora Cir, Roseville, CA 95678, USA',
            amount: '$100 million',
            buyer: 'invesco'
        },
        {
            id: 'tab2',
            tabName: 'Structure',
            property: 'Adora Townhomes',
            address: '512 Adora Cir, Roseville, CA 95678, USA',
            amount: '$50.75 million',
            buyer: 'invesco'
        }
    ];
    const [currentTab, setCurrentTab] = useState(tabList.length !== 0 ? tabList[0].id : '');

    return (
        <>
            <nav className="tabs">
                {tabList.length !== 0 ?
                    tabList.map(tab => (
                        <a
                            href={`#${tab.id}`}
                            key={tab.id}
                            onClick={() => setCurrentTab(tab.id)}
                            className={classNames({
                                active: tab.id === currentTab,
                                tabData: tab.id !== currentTab
                            })}>
                            {tab.tabName}
                        </a>
                    ))
                    :
                    <div>No Data</div>
                }
                <div className="animation start"></div>
            </nav>
            <table className='tbl'>
                <thead>
                    <tr className='tblRow'>
                        <th className='tblHead'>Property</th>
                        <th className='tblHead'>Address</th>
                        <th className='tblHead'>Amount</th>
                        <th className='tblHead'>Buyer</th>
                    </tr>
                </thead>
                <TabItem tabList={tabList} currentTab={currentTab} />
            </table>
        </>
    )
}

export default TabList;
