import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const initialBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]

export default function Game() {
  const navigate = useNavigate()
  const gotToHomePage=()=>{
      navigate("/");
    }
    const goToDecisionPage=()=>{
        navigate("/decision");
      }
    const [board, setBoard] = useState(initialBoard
      );

  async function addX(index: number) {
    const nextBoard = board.map((c, i) => {
        if (i === index) {
            return c + 1;
          } else {
            return c;
          }
    });
    await setBoard(nextBoard);
    checkVictory();
}

  async function cpuGoesFirst(index: number) {
    const nextBoard = board.map((c, i) => {
        if (i === index) {
            return c + 2;
          } else {
            return c;
          }
    });
    await setBoard(nextBoard);
}

async function cpuGoes() {
    for (let j = 0; j < board.length; j++) {
        if (board[j] === 0) {
            const nextBoard = board.map((c, i) => {
                if (i === j) {
                    return c + 2;
                } else {
                    return c;
                }
            });
            await setBoard(nextBoard);
            break;
        }
    }
    checkVictory();
}


async function playerGoesFirst(){
    let playerFirst = true;
    alert("Your Turn!");
}

   async function checkVictory(){
    if(board[0] === 1 && board[1] === 1 && board[2] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[3] === 1 && board[4] === 1 && board[5] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[6] === 1 && board[7] === 1 && board[8] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[0] === 1 && board[3] === 1 && board[6] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[1] === 1 && board[4] === 1 && board[7] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[2] === 1 && board[5] === 1 && board[8] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[0] === 1 && board[4] === 1 && board[8] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[2] === 1 && board[4] === 1 && board[6] === 1){
        alert("You Won!!!")
        goToDecisionPage()
    }
    if(board[0] === 2 && board[1] === 2 && board[2] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    if(board[3] === 2 && board[4] === 2 && board[5] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    if(board[6] === 2 && board[7] === 2 && board[8] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    if(board[0] === 2 && board[3] === 2 && board[6] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    if(board[1] === 2 && board[4] === 2 && board[7] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    if(board[2] === 2 && board[5] === 2 && board[8] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    if(board[0] === 2 && board[4] === 2 && board[8] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    if(board[2] === 2 && board[4] === 2 && board[6] === 2){
        alert("You Lost :(")
        goToDecisionPage()
    }
    }
    if(board[0] != 0 && board[1] != 0 && board[2] != 0 && board[3] != 0 && board[4] != 0 && board[5] != 0 && board[6] != 0 && board[7] != 0 && board[8] != 0) {
        alert("You Tied!")
        goToDecisionPage()
    }
   }

   function decideSymbol(value: number) {
    if (value === 1) return 'X';
    if (value === 2) return 'O';
    return '';
  }
  



  return (
    <div className="App">
      <h1>OIT Tic-Tac-Toe</h1>
      <h4>Can you beat the elusive 2nd floor AI?</h4>
      <img src="/itb.jpg"/>
      <br/>
      <br/>
      <br/>
      <button onClick={() => addX(0)} className="square"disabled={board[0] == 1 || board[0] == 2}>{decideSymbol(board[0])}</button>
      <button onClick={() => addX(1)} className="square"disabled={board[1] == 1 || board[1] == 2}>{decideSymbol(board[1])}</button>
      <button onClick={() => addX(2)} className="square"disabled={board[2] == 1 || board[2] == 2}>{decideSymbol(board[2])}</button>
      <br/>
      <button onClick={() => addX(3)} className="square" disabled={board[3] == 1 || board[3] == 2}>{decideSymbol(board[3])}</button>
      <button onClick={() => addX(4)} className="square" disabled={board[4] == 1 || board[4] == 2}>{decideSymbol(board[4])}</button>
      <button onClick={() => addX(5)} className="square" disabled={board[5] == 1 || board[5] == 2}>{decideSymbol(board[5])}</button>
      <br/>
      <button onClick={() => addX(6)} className="square" disabled={board[6] == 1 || board[6] == 2}>{decideSymbol(board[6])}</button>
      <button onClick={() => addX(7)} className="square" disabled={board[7] == 1 || board[7] == 2}>{decideSymbol(board[7])}</button>
      <button onClick={() => addX(8)} className="square" disabled={board[8] == 1 || board[8] == 2}>{decideSymbol(board[8])}</button>
      <br/>
      <button onClick={() => cpuGoesFirst(0)} disabled={board[0] === 2 || board[0] === 1}>Click here to let the CPU go first</button>
      <button onClick={() => playerGoesFirst()} disabled={board[0] === 2 || board[0] === 1 }>Click here to go first yourself</button>
      <br/>
      <br/>
      <button onClick={() => cpuGoes()}>Click here to generate CPU turn</button>
      <br/>
      <br />
      <button onClick={() => checkVictory()}>Submit your board!</button>
      <br/>
      <br/>
      <button onClick={() => gotToHomePage()} className="big-btn">Return Home</button>
    </div>
  );
}
