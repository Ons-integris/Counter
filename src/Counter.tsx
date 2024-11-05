import React from 'react';
import { useCounter } from './CounterContext';

const Counter: React.FC = () => {
    const { state, dispatch } = useCounter();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="counter-value" style={{fontSize: '3em'}}>Counter: {state.count}</h1>
            <div style={{display: 'flex', gap: '20px', marginTop: '20px' }}>
                <button
                    onClick={() => dispatch({ type: 'increment' })}
                    style={{
                        backgroundColor: 'var(--button-color)',
                        color: 'var(--text-color)',
                        fontSize: '2em',
                        padding: '20px',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-hover-color)')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-color)')}
                >
                    ➕
                </button>
                <button
                    onClick={() => dispatch({ type: 'decrement' })}
                    style={{
                        backgroundColor: 'var(--button-color)',
                        color: 'var(--text-color)',
                        fontSize: '2em',
                        padding: '20px',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-hover-color)')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-color)')}
                >
                    ➖
                </button>
            </div>
        </div>
    );
};

export default Counter;
