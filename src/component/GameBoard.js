import { useState } from "react";
import Square from "./Square"

const GameBoard = () => {

    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameState, setGameState] = useState([
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null }
    ]);
    const [count, setCount] = useState(1);
    const executeMove = index => {
        console.log(index);
        let newGameState = gameState;
        if (newGameState[index].value === null) {
            newGameState[index].value = currentPlayer;
            setGameState(newGameState);
            let nextPlayer = currentPlayer === "X" ? "O" : "X";
            setCurrentPlayer(nextPlayer);
            let c = count+1;
            setCount(c);
            console.log("count = "+ count);
            
            if(checkWinOrDraw()){
                alert(currentPlayer+" is a winner 🎉 🎊");
            }else if(count===9){
                alert("Match Draw Guys ❗")
            }
        }
        
        console.table(gameState);
    }

    const checkWinOrDraw = () => {
        let win = false;
        if(gameState[0].value === gameState[1].value && gameState[2].value === gameState[1].value && gameState[0].value!=null && gameState[1].value!=null && gameState[2].value!=null ){
            win = true;
        }
        if(gameState[3].value === gameState[4].value && gameState[4].value === gameState[5].value && gameState[3].value != null && gameState[4].value != null && gameState[5].value != null){
            win = true;
        }
        if(gameState[6].value === gameState[7].value && gameState[7].value === gameState[8].value && gameState[6].value != null && gameState[7].value != null && gameState[8].value != null){
            win = true;
        }
        if(gameState[0].value === gameState[3].value && gameState[3].value === gameState[6].value && gameState[0].value != null && gameState[3].value != null && gameState[6].value != null){
            win = true;
        }
        if(gameState[4].value === gameState[1].value && gameState[4].value === gameState[7].value && gameState[4].value != null && gameState[1].value != null && gameState[7].value != null){
            win = true;
        }
        if(gameState[8].value === gameState[5].value && gameState[2].value === gameState[5].value && gameState[5].value != null && gameState[8].value != null && gameState[2].value != null){
            win = true;
        }
        if(gameState[0].value === gameState[4].value && gameState[4].value === gameState[8].value && gameState[0].value != null && gameState[4].value != null && gameState[8].value != null){
            win=true;
        }
        if(gameState[6].value === gameState[4].value && gameState[2].value === gameState[4].value && gameState[4].value != null && gameState[6].value != null && gameState[2].value != null){
            win = true;
        }
        return win;
    }
    return (
        <>
            <div className="col-md-12 col-12 text-center">
                <h3>Current Player: {currentPlayer}</h3>
            </div>
            <div className=" col-md-6 offset-md-3 shadow-sm gameboard row p-4">
                {gameState.map((square, key) => {
                    return (
                        <Square key={key} gameState={gameState} index={key} executor={executeMove} />
                    )
                })}
            </div>
        </>
    );
}

export default GameBoard;