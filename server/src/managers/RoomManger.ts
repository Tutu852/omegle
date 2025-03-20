import { User } from "./UserManager";

interface Room {
    user1 : User,
    user2 : User,
}


let GLOBAL_ROOM_ID =1;
export class RoomManager {
    // it keeps track of 
    private rooms: Map<string , Room>
    constructor(){
        this.rooms =new Map<string ,Room>();
    }
    createRoom(user1: User,user2 : User){
        // Create a new room with the two users
        // when a room created  a roomId will generate  
        const roomId = this.generate();
        this.rooms.set(roomId.toString(),{
            user1,
            user2,
            
        })
        user1.socket.emit("send-offer",{  
            roomId
        })
    }
    onOffer(roomId:string , sdp:string){
        const user2 =this.rooms.get(roomId)?.user2;
        user2?.socket.emit("offer",{
            sdp
        })
    }
    onAnswer(roomId:string , sdp:string){
        const user1 =this.rooms.get(roomId)?.user1;
        user1?.socket.emit("offer",{
            sdp
        })
    }
    generate(){
        return GLOBAL_ROOM_ID++;
    }

    // --- day2 --- 

}