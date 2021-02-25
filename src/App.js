import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import GameBoard from './component/GameBoard';

const App = () => {
return(
    <div>
        <Header/>
        <GameBoard/>
    </div>
)
}

export default App;





























// const App= () => {

//   const [player1, setPlayer1] = useState([""]);
//   const [player2, setPlayer2] = useState([""]);
//   const [clickedCell, setClickedCell] = useState([""]);
//   const [game, setGame] = useState(true);
//   const [turn, setTurn] = useState(0);
//   const [winner, setWinner] = useState("");

//   let winningSequence = [
//     ["", "1", "2", "3"],
//     ["", "4", "5", "6"],
//     ["", "7", "8", "9"],
//     ["", "1", "4", "7"],
//     ["", "2", "5", "8"],
//     ["", '3', "6", "9"],
//     ["", "1", "5", "9"],
//     ["", "3", "5", "7"]
//   ];

//   let clicked = (e) => {
//     let ele = e.target.id;
//     console.log(e.target.id);
//     if(!clickedCell.includes(ele) && game){
//       setClickedCell([...clickedCell, ele]);
//       console.log(clickedCell);
//       let id = ele;
//       if(turn%2==0){
//         document.getElementById(id).innerHTML="x";
//         setPlayer1([...player1, id]);
//         if(player1.length>2){
//           for (let i = 0; i < winningSequence.length; i++) {
//             let count = 0;
//             for (let j = 0; j < winningSequence[i].length; j++) {
//               if (player1.includes(winningSequence[i][j])) {
//                 count++;
//               }
//               if (count > 2) {
//                 setWinner("player 1")
//               }
//             }
//           }
//         }
//       }else {
//         document.getElementById(id).innerHTML = "0";
//         setPlayer2([...player2, id]);
//         if (player2.length > 2) {
//           for (let i = 0; i < winningSequence.length; i++) {
//             let count = 0;

//             for (let j = 0; j < winningSequence[i].length; j++) {
//               if (player2.includes(winningSequence[i][j])) {
//                 count++;
//                 console.log("count = "+count);
//               }
//               if (count > 2) {
//                 setWinner("player 2");
//               }
//             }
//           }
//         }
//       }
//       if(clickedCell.length == 9){
//         setWinner("Draw match");
//       }
//       setTurn(turn+1);
//     }
//   }

//   return (
//     <>
//     <h1>{setWinner}</h1>
//       <div className="g">
//       <div className="grid" onClick={clicked}>
//         <div className="row" id="row1">
//           <div className="cell" id="1"></div>
//           <div className="cell" id="2"></div>
//           <div className="cell" id="3"></div>
//         </div>
//         <div className="row" id="row2">
//           <div className="cell" id="4"></div>
//           <div className="cell" id="5"></div>
//           <div className="cell" id="6"></div>
//         </div>
//         <div className="row" id="row3">
//           <div className="cell" id="7"></div>
//           <div className="cell" id="8"></div>
//           <div className="cell" id="9"></div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }