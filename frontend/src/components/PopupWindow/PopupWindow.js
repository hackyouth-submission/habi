import React from 'react'

import './PopupWindow.css'

export default function PopupWindow(props) {
    return props.trigger ? (
        <div className="PopupWindow">
            <div className="popup-background">
                <div className="window">
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}