import React from 'react';
import './Line.css'

const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1.2,
        }}
    />
);

export { Line };