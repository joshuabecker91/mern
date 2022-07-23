import React from 'react';

const Tabs = (props) => {

    const {tab, setTab, tabArray} = props;

    return(
        <div>
            <h2 className="mt-4">Choose a tab</h2>
            <div>
                <button className="btn btn-primary m-2" onClick={() => setTab(tabArray[0].tab)} >Tab 1</button>
                <button className="btn btn-primary m-2" onClick={() => setTab(tabArray[1].tab)} >Tab 2</button>
                <button className="btn btn-primary m-2" onClick={() => setTab(tabArray[2].tab)} >Tab 3</button>
            </div>
            <p className="mt-2">{tab}</p>
        </div>
    );
}

export default Tabs;

// arrow function syntax
// <button onClick={() => this.handleClick(id)} />