import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.component {
    render(i) {
        return (
            {/* ToDo */}
        );
    }
}

class Board extends React.component {
    renderSquare(i) {
        return (
            <Square />
        );
    }
    render() {
        return (
            <div>
                <div className="status"></div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/* ToDo */}
                </div>
                <div className="game-info">
                    {/* status */}
                    {/* ToDo */}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


// <parts />:
// square - <button>
// status - <div>
// board-row - <div>
// board-row - <div>
// board-row - <div>
// game - <div>
// game-board - <div>
// game-info - <div>

