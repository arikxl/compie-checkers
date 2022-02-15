import React from 'react';

import './controlPanel.css';
import { boardService } from '../../service/boardService';

const ControlPanel = ({ currBoard, setBoard, isBlackTurn, setIsBlackTurn }) => {

    const startGame = () => {
        setBoard(boardService.setPawnsToStartPositions())
        setIsBlackTurn(true)
    }

    const undoMove = () => {
        if (currBoard.length < 1) return
        setBoard(currBoard[0])
        setIsBlackTurn(!isBlackTurn)
    }

    const redoMove = () => {
        if (currBoard.length <= 1) return
        setBoard(currBoard[1])
        setIsBlackTurn(!isBlackTurn)
    }

    return (
        <div>
            <h1>Arik's Checkers for Compie</h1>
            <div className="btns-container">
                <button className="btn" onClick={undoMove}>Undo</button>
                <button className="start-btn btn" onClick={startGame}>
                    {currBoard.length < 1 ? 'Start Game' : 'Restart Game'}
                </button>
                <button className="btn" onClick={redoMove}>Redo</button>
            </div>
        </div>
    );
};

export default ControlPanel;