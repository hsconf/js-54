import React from 'react';

interface Props {
    mine: string;
    color: string;
    onClick: () => void;
}

const Box: React.FC<Props> = ({ mine, color, onClick }) => {
    const styleContainer = {
        width: `50px`,
        height: `50px`,
        background: color,
        border: '1px solid #fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    };

    return (
        <div className="box" style={styleContainer} onClick={onClick}> {}
            <span>{mine}</span>
        </div>
    );
};

export default Box;
