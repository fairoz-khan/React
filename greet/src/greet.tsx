import React from 'react';
import { Button, Stack } from 'react-bootstrap';

type TGreet = {
    name: string,
    msgCount: number
}

export const Greet = (props: TGreet) => {
    return (
        <div className='App'>
            <h1>Hello {props.name} You have recieved {props.msgCount} mails</h1>
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </div>
    )
} 