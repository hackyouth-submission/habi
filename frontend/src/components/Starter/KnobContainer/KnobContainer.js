import React, { useState, useEffect } from 'react'
import PopupWindow from '../../PopupWindow/PopupWindow';
import Knob from './Knob/Knob';
import { useNavigate } from 'react-router-dom'

import './KnobContainer.css'

export default function KnobContainer() {
    const [time, setTime] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);
    const [ableListen, setAbleListen] = useState(false);
    const [ableSpeak, setAbleSpeak] = useState(false);
    const [ableNote, setAbleNote] = useState(false);
    const [enChoice, setEnChoice] = useState(true);
    const [csChoice, setCsChoice] = useState(true);
    
    const navigate = useNavigate();

    const convertTime = (min) => `${Math.floor(min / 60)}h${(min % 60 < 10 ? "0" : "") + min % 60}m`;

    const onRelease = (min) => {
        if (min === 0) return;
        setAbleListen(false);
        setAbleSpeak(false);
        setAbleNote(false);
        setOpenPopup(true);
    }

    const startSection = () => {
      navigate("/section", {
        state: {
          time: time,
          en: +enChoice,
          cs: +csChoice,
          listen: +ableListen,
          speak: +ableSpeak,
          note: +ableNote
        }
      })
    }

    return (
      <>
        <div className="KnobContainer">
          <div id="cycle-num">{Math.floor(time / 60)}</div>
          <div className="number number0">0</div>
          <div className="number number5">5</div>
          <div className="number number10">10</div>
          <div className="number number15">15</div>
          <div className="number number20">20</div>
          <div className="number number30">30</div>
          <div className="number number40">40</div>
          <div className="number number50">50</div>
          <Knob timeTrack={(min) => setTime(min)} onRelease={onRelease} />
          <div className="preview-time">{convertTime(time)}</div>
        </div>
        <PopupWindow trigger={openPopup}>
          <button className={"listen" + (ableListen ? " active" : "")} onClick={() => setAbleListen(prev => !prev)}>Listen</button>
          <button className={"speak" + (ableSpeak ? " active" : "")} onClick={() => setAbleSpeak(prev => !prev)}>Speak</button>
          <button className={"note" + (ableNote ? " active" : "")} onClick={() => setAbleNote(prev => !prev)}>Note</button>
          <button className="start" onClick={startSection}>Start</button>
          <button className="close" onClick={() => {setOpenPopup(false); setTime(0)}}>Close</button>
        </PopupWindow>
      </>
    );
}
