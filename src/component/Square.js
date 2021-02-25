const Square = ({index, gameState, executor}) => {

    const drawGrid = index => {
        let borderString = "";
        if(index===1){
            borderString="bsb bb"
        }
        else if(index===0 || index===2){
            borderString="bb"
        }
        else if(index===6 || index===8){
            borderString="bt"
        }
        else if(index===7){
            borderString="bsb bt"
        }
        else if(index===4){
            borderString="bsb"
        }
        
        return borderString;
    }

    return(
        <div className={` x10 text-center square  ${drawGrid(index)}`} onClick={ e => executor(index)}>
            {gameState[index].value}
        </div>
    )
}

export default Square;