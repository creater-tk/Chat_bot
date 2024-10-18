import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context }from '../../context/context'

const Main = ({sideBarHandler, extended}) => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='Main'>
      <div className="nav">
        <div className='header'>
          <img src={assets.menu_icon} alt="Menu"  onClick={sideBarHandler} className={extended ?'sideBarExtender Hide':'sideBarExtender'}/>
          <p>Gemini</p>
        </div>
        <img src={assets.user_icon} alt="User" className='profile'/>
      </div>
      <div className="main-container">

      {!showResult
      ?<>
        <div className="greet">
          <p><span>Hello, Tharun.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggestt a beautiful places to see on an upcomming trip.</p>
            <img src={assets.compass_icon} alt="compass" />
          </div>
          <div className="card">
            <p>Create a Beautiful image for Me.</p>
            <img src={assets.bulb_icon} alt="compass" />
          </div>
          <div className="card">
            <p>Upcomming AI.</p>
            <img src={assets.message_icon} alt="compass" />
          </div>
          <div className="card">
            <p>Trending software courses.</p>
            <img src={assets.code_icon} alt="compass" />
          </div>
        </div>
      </>
      :<div className='result'>
        <div className="result-title">
          <img src={assets.user_icon} alt="User" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={assets.gemini_icon} alt="AI" />
          {loading
          ?<div className='loader'>
              <hr />
              <hr />
              <hr />
          </div>:
          <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
        }
        </div>
      </div>}
        <div className="main-bottom">
          <div className="search-box">

            <input onChange={(e)=>{setInput(e.target.value); }} onKeyDown={(e) => {e.key === "Enter"?onSent():'' }} value={input} type="text" placeholder='Message Gemini' />
            
            <div className='icon'>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img onClick={onSent} src={assets.send_icon} alt="send" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double check it's right
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main