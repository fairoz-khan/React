import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Button } from 'react-bootstrap';
import { IPropItems } from './App'


type IButtonProps = {
    name: string,
    pItems: IPropItems
}

export const CalButton = (props: IButtonProps) => {
    return (
        <button type="button" onClick={() => props.pItems.items.setString(props.name)} className={`col p-3 ${(isNaN(Number(props.name)) && props.name !== ".") ? "btn-secondary" : "btn btn-outline-primary"}`}>
            {props.name}
        </button>
    );
}
