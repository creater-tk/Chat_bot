import React, { useContext } from 'react'
import  './SideBar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'

const SideBar = ({sideBarHandler, extended}) => {

  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
      <div className={` ${extended?'sidebar ':'sidebar colapse'}`}>
        <div className="top">
          <img src={assets.menu_icon} alt="Menu"  onClick={sideBarHandler} className='menu'/>
          <div className="new-chat" onClick={newChat}>
            <img src={assets.plus_icon} alt="Plus" />
            <p>New Chat</p>
          </div>
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index)=>{
              return(
                <div className="recent-entry" onClick={()=>loadPrompt(item)}>
                  <img src={assets.message_icon} alt="message" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="Question" />
            <p>Help</p>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="History" />
            <p>Activity</p>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="Settings" />
            <p>Settings</p>
          </div>
        </div>
      </div>
  )
}

export {SideBar}