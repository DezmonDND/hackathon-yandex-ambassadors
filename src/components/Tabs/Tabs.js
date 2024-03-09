import { useState } from "react";
import "./Tabs.css";
import tabs from "../Popup/PopupContent/tabsData";

function Tabs() {
  const [currentTab, setCurrentTab] = useState('1');

  const handleTabClick = (evt) => {
    setCurrentTab(evt.target.id);
  }

  return (
    <div className="tabs__container">
      <div className="tabs__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            className="tabs__button"
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        currentTab === `${tab.id}` && (
          <div key={tab.id}>
            {tab.content}
          </div>
        )
      ))}
    </div>
  );
}
export default Tabs;
