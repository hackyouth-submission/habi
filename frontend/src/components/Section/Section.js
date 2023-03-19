import React, { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import './Section.css'

function Section() {
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        //fetch(`/api/getQuestion?time=${state.time}&en=${state.en}&cs=${state.cs}&`)
        fetch("http://localhost:5000/api/getQuestion?" + new URLSearchParams(state))
        .then(response => response.json())
        .then(data => console.log(data));
    }, [])

    return (
        <div>
            <Link to="/" className="close-section">&lt;</Link>
        </div>
    )
}

export default Section