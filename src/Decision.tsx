import React from "react";
import { useNavigate } from "react-router-dom";

export default function Decision() {
    const navigate = useNavigate()
    const gotToGamePage=()=>{
        navigate("/game");
      }
      const gotToHomePage=()=>{
        navigate("/");
      }

  return (
    <div className='App'>
      <h1>Congrats on finishing!</h1>
      <h4>Would you like to play again or return home?</h4>
      <img src="/cosmo-cougar-3.jpg" alt="image"/>
      <br/>
      <button onClick={() => gotToGamePage()} className="big-btn">Play Again</button>
      <button onClick={() => gotToHomePage()} className="big-btn">Go Home</button>
    </div>
  );
}
