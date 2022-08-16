import React, { useEffect } from 'react'
import { io } from 'socket.io-client';

const Test = () => {

    const socket = io("http://localhost:5001");

    socket.on("connect", () => {
    });

    socket.on('chatMessage', (val) => {
        console.log(val);
    });
    socket.emit('chatMessage', {});

    return (
        <div>
            ayhagaaaaaaaaa
        </div>
    )
}

export default Test
