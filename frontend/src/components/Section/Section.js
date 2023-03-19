import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import './Section.css'

function Section() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [statement, setStatement] = useState("");

    useEffect(() => {
        //fetch(`/api/getQuestion?time=${state.time}&en=${state.en}&cs=${state.cs}&`)
        if (state.review) {
            fetch("http://localhost:5000/api/getQuestion?" + new URLSearchParams(state))
            .then(response => response.json())
            .then(data => {
                setStatement(data.statement);
            });
        } else {setStatement(
          "Who: đại từ chỉ người, thường đóng vai trò làm chủ ngữ hoặc tân ngữ cho câu. Whom: đại từ chỉ người, được dùng để thay thế vị trí tân ngữ. "
        );
            
        }
    }, [])

    return (
        <div>
            <Link to="/" className="close-section">&lt;</Link>
            <h1>{statement}</h1>
        </div>
    )
}

export default Section