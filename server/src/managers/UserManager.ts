import { Socket } from "socket.io"
import { RoomManager } from "./RoomManger";

export interface User{
    name:string;
    socket:Socket;
}
export class UserManager {
    //User is store how many user will there
    //this will keep track of User and queue
    private users : User[];
    private queue : string[];
    private roomManager ;
    constructor(){
        this.users = [];
        this.queue = [];
        this.roomManager = new RoomManager();
    }
    addUser(name:string,socket:Socket){
        this.users.push({
            name,socket
        });
        this.queue.push(socket.id);
        //this clearQueue funciton send to both party u alredy match
        this.clearQueue();
        this.initHandler(socket);
    }
    removeUser(socketId:string){
        this.users = this.users.filter(x => x.socket.id === socketId);
        this.queue = this.queue.filter(x => x === socketId);
    }
    clearQueue(){
        //this function send to both party u alredy match
        if(this.queue.length < 2){
            return ;
        }
        const user1 =this.users.find(x => x.socket.id === this.queue.pop());
        const user2 =this.users.find(x => x.socket.id === this.queue.pop());

        // ----day 2---
        if(!user1 || !user2){
            return;
        }
        const room = this.roomManager.createRoom(user1 , user2)
        
    }
    initHandler(socket:Socket){
        socket.on("offer" ,({sdp ,roomId}: {sdp:string,roomId:string})=>{
            this.roomManager.onOffer(roomId,sdp);
        })
        socket.on("offer" ,({sdp ,roomId}:{sdp:string,roomId:string})=>{
            this.roomManager.onAnswer(roomId,sdp);
        })
    }
  
}
    