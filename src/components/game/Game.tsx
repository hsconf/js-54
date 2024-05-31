import React, { useState } from 'react';
import Box from "../box/Box.tsx";

const Game = () => {
    interface Mine {
        hasItem: boolean;
        clicked: boolean;
    }

    const styleContainer: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '30px auto',
        width: '350px',
        height: '300px'
    }

    const initialMines: Mine[] = Array.from({ length: 36 }, () => ({ hasItem: false, clicked: false }));
    const randomRingIndex = Math.floor(Math.random() * 36);

    const [mines, setMines] = useState<Mine[]>(initialMines);
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [ringIndex] = useState(randomRingIndex);

    const handleClick = (index: number) => {
        if (!gameOver && !mines[index].clicked) {
            setAttempts(attempts + 1);
            setMines(mines.map((mine, i) => i === index ? { ...mine, clicked: true } : mine));
            if (index === ringIndex) {
                setGameOver(true);
            }
        }
    };

    const handleReset = () => {
        setAttempts(0);
        setGameOver(false);
        setMines(initialMines.map((mine, i) => ({
            ...mine,
            clicked: false,
            hasItem: i === ringIndex
        })));
    };

    return (
        <div style={styleContainer}>
            {mines.map((mine, i) => (
                <Box
                    key={i}
                    mine={mine.hasItem ? 'O' : ''}
                    onClick={() => handleClick(i)}
                    color={mine.clicked ? 'grey' : 'black'}
                />
            ))}
            <div>Попытки: {attempts}</div>
            {gameOver && <div>Кольцо найдено!</div>}
            <button onClick={handleReset}>Сброс</button>
        </div>
    );
};

export default Game;
