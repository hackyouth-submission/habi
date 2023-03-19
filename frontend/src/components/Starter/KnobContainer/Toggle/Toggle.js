import React, { useEffect, useState } from 'react'

import './Toggle.css'

export default function Toggle(props) {
    const [review, setReview] = useState(true);

    const onClick = () => {
        setReview((prev)=> {
            props.onClick(!prev);
            return !prev;
        });
    }

    return (
        <div className="Toggle">
            <p>Review</p>
            <div className={"toggle-button" + (review ? "" : " active")} onClick={onClick}>
                <div className="pad" />
            </div>
            <p>New knowledge</p>
        </div>
    );
}