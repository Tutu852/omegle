import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app); 

const io = new Server(server);

io.on('connection', (socket: Socket) => {
    console.log('A user connected');
});

server.listen(3000, () => {
    console.log('Listening on *:3000');
});
