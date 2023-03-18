import React, { useState, useEffect } from 'react'
import Knob from './Knob/Knob';

import './KnobContainer.css'

export default function KnobContainer() {
    const [time, setTime] = useState(0);

    const onRelease = (min) => {
        if (min == 0) return;
        console.log(min);
    }

    return (
      <div className="KnobContainer">
        <div id="cycle-num">
          {Math.floor(time / 60)}
        </div>
        <div className="number number0">0</div>
        <div className="number number5">5</div>
        <div className="number number10">10</div>
        <div className="number number15">15</div>
        <div className="number number20">20</div>
        <div className="number number30">30</div>
        <div className="number number40">40</div>
        <div className="number number50">50</div>
        <Knob timeTrack={(min) => setTime(min)} onRelease={onRelease} />
        <div className="preview-time">{`${Math.floor(time / 60)}h${(time % 60 < 10 ? "0" : "") + time % 60}m`}</div>
      </div>
    );
}
