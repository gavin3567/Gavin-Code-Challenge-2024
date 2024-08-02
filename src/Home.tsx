import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const gotToGamePage=()=>{
        navigate("/game");
      }

  return (
    <div className='App'>
      <h1>Welcome to Gavin's OIT Tic-Tac-Toe!</h1>
      <h4>Sponsored by Cosmo Cougar</h4>
      <img src="/cosmo-cougar.jpg" alt="image"/>
      <br/>
      <button onClick={() => gotToGamePage()} className="big-btn">Begin Game</button>
    </div>
  );
}
