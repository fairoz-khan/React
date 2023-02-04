import react from 'react';
import { CalButton } from './Buttons'
import { IPropItems } from './App'

export const Rows = (props: IPropItems) => {
    return (
        <div className="row mb-2">
            {
                props.items.labels.map((label) => {
                    return <CalButton name={label} pItems={props} />
                })
            }
        </div>
    );
}