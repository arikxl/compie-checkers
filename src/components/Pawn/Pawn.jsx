import React, { useEffect, useState } from 'react';

import './pawn.css';

export function Pawn({pawnType}) {

    const [pawnClassName, setPawnClassName] = useState('');
    const [pawn, setPawn] = useState('');


    useEffect(() => {
        if (pawnType.includes('black')){
            setPawnClassName('pawn-black')
            setPawn('⛀')
        } 
        if (pawnType.includes('white')){
            setPawnClassName('pawn-white')
            setPawn('⛂')
        } 
        if (pawnType === 'blank'){
            setPawnClassName('')
            setPawn('')
        } 
        if (pawnType.includes('clue')) setPawnClassName('clue')
    }, [pawnType])

    return (
        <div className="pawn-container">
            <div className={pawnClassName}>{pawn}</div>
        </div>
    )
}