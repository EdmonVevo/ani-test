import React, { useState } from 'react';
import classNames from 'classnames';
import TabRow from 'components/tabRow/TabRow';
import 'components/tabList/TabList.scss';

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
            tabName: 'New Tab',
            property: 'nor',
            address: 'nor',
            amount: '$nor',
            buyer: 'nor'
        }
    ];
    const [tblHead, setTblHead] = useState([
        { head: 'Property' },
        { head: 'Address' },
        { head: 'Amount' },
        { head: 'Buyer' }
    ])
    const [currentTab, setCurrentTab] = useState(tabList.length !== 0 ? tabList[0].id : '');

    return (
        <>
            <div className="tabs">
                {tabList.length !== 0 ?
                    tabList.map(tab => (
                        <span
                            key={tab.id}
                            id={tab.id}
                            onClick={() => setCurrentTab(tab.id)}
                            className=
                            {classNames({ active: tab.id === currentTab, tabData: tab.id !== currentTab })}
                        >
                            {tab.tabName}
                        </span>
                    ))
                    :
                    <div className='noData'>No Data</div>
                }
                <div className="underline"></div>
            </div>
            <table className='tbl'>
                <thead>
                    <tr className='tblRow'>
                        {tblHead.map(tbl => (
                            <th className='tblHead'>{tbl.head}</th>
                        ))}
                    </tr>
                </thead>
                <TabRow tabList={tabList} currentTab={currentTab} tblHead={tblHead} />
            </table>
        </>
    )
}

export default TabList;
