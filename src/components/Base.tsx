import React from 'react';
import { useNavigate } from "react-router-dom";

export const Base = () => {
    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url);
    }
  return (
    <div>
        <p> Micro base </p>
        <br />
        <button onClick={() => handleClick('/bmicro')}> ir Button micro </button>
        <button onClick={() => handleClick('/counter')}> ir Counter</button>
    </div>
  )
}
