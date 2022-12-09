import React, {ChangeEvent, ChangeEventHandler, MouseEvent} from 'react';
import {log} from "util";

export const User = () => {

    const onNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('name changed')
    }

    const lostFocus = () => console.log('focus lost')

    const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed: ${e.currentTarget.value}`)
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.value)
    }

    return (
        <div>
            <textarea onBlur={lostFocus} onChange={onNameChange}>Oleg</textarea>
            <input type="number" onChange={onAgeChange}/>
            <button value={'delete'} onClick={onClick}>x</button>
            <button value={'save'} onClick={onClick}>x</button>
        </div>
    );
};
