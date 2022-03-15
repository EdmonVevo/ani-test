import React, { useState } from 'react'
import TabItem from './TabItem';

const TabList = () => {

    const [currentTab, setCurrentTab] = useState('tab1');
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

    return (
        <>
            <div className="tabs">
                {
                    tabList.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentTab(tab.id)}
                            className={(tab.id === currentTab) ? 'active' : ''}>
                            {tab.tabName}
                        </div>
                    ))
                }
            </div>
            <TabItem tabList={tabList} currentTab={currentTab} />
        </>
    )
}

export default TabList;
