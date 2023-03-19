import React, { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import './Section.css'

function Section() {
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        //fetch(`/api/getQuestion?time=${state.time}&en=${state.en}&cs=${state.cs}&`)
        fetch(
          "/api/getQuestion?" + new URLSearchParams(state)
        ).then((response) => console.log(response));
    }, [])

    return (
        <div>
            <Link to="/" className="close-section">Close</Link>
        </div>
    )
}

export default Section