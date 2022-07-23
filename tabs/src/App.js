import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs'

function App() {
  
  // Data
  const tabArray = [
    {tab: "Tab 1 Component is shown here"},
    {tab: "Tab 2 is super awesome"},
    {tab: "Tab 3 is even better"}, 
  ];

  // State
  const [tab, setTab] = useState(tabArray[0].tab);

  return (
    <div className="App">
      <h1 className="mt-5">Tabs</h1>
      <Tabs tab={tab} setTab={setTab} tabArray={tabArray}/>
    </div>
  );
}

export default App;
