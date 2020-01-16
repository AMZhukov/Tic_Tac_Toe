import React from 'react';
import  subscribeToTimer from '../api';

import Board from './Board'

import TransitionsModal from './helloModal'

import calculateWinner from './calculateWinner';

import Modal from './Modal'

import '../index.css';
import 'animate.css';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));
    }

/*     state = {
        timestamp: 'no timestamp yet'
    }; */

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Перейти к ходу #' + move :
                'К началу игры';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    <p className="App-intro">
                        This is the timer value: {this.state.timestamp}
                    </p>
                </li>
            );
        });


        let status;
        if (winner) {
            status = <Modal name = {winner} open/>; /* 'Выиграл ' + winne */
            
        } else {
            status = 'Сейчас ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (

            <div className="game">
                <TransitionsModal />
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    {/* <ol>{moves}</ol> */}
                    <button onClick={()=>{window.location.reload();}}>Заново</button>
                </div>
            </div>
        );
    }
}

export default Game;