import React, { useState, useEffect } from 'react'

import './Knob.css'

export default function Knob() {
    const [chosenMinute, setChosenMinute] = useState(0);

    useEffect(() => {
        const knob = document.getElementById("Knob");
        let initialAngle, rotationAngle = 0;

        const pointerdown = (e) => {

            let knobBound = knob.getBoundingClientRect();
            let centerX = knobBound.left + knobBound.width / 2;
            let centerY = knobBound.top + knobBound.height / 2;

            initialAngle = Math.atan2(e.x - centerX, e.y - centerY);
        };
        knob.addEventListener("pointerdown", pointerdown);
        
        const pointerup = () => {
            let fraction = rotationAngle / 360;  
            let whole = Math.floor(fraction);
            let minute;
            let dec = fraction % 1;
            if (dec < 0.125) {
                minute = 0;
            } else if (dec < 0.25) {
                minute = 5;
            } else if (dec < 0.375) {
                minute = 10;
            } else if (dec < 0.5) {
                minute = 15;
            } else if (dec < 0.625) {
                minute = 20;
            } else if (dec < 0.75) {
                minute = 30;
            } else if (dec < 0.875) {
                minute = 40;
            } else {
                minute = 50;
            }
            setChosenMinute(whole * 60 + minute);
            rotationAngle = 0;
            knob.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;

        };
        knob.addEventListener("pointerup", pointerup);
        
        const pointermove = (e) => {
            let mouseX = e.x;
            let mouseY = e.y;
            
            let knobBound = knob.getBoundingClientRect();
            let centerX = knobBound.left + knobBound.width / 2;
            let centerY = knobBound.top + knobBound.height / 2;

            let newAngle = Math.atan2(mouseX - centerX, mouseY - centerY);
            while (initialAngle - newAngle < -Math.PI) newAngle -= 2 * Math.PI;
            while (initialAngle - newAngle > Math.PI) newAngle += 2 * Math.PI;
            rotationAngle += ((initialAngle - newAngle) * 180) / Math.PI;

            rotationAngle = Math.max(rotationAngle, 0);

            knob.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
            
            initialAngle = newAngle;
            
        }
        knob.addEventListener("pointermove", pointermove);

        return () => {
          knob.removeEventListener("pointerdown", pointerdown);
          knob.removeEventListener("pointerup", pointerup);
          knob.removeEventListener("pointermove", pointermove);
        }
    }, [])

    return (
        <div className="Knob" id="Knob">
            <div className="dot">

            </div>
        </div>
    );
}
