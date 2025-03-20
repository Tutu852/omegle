for the web socket i went  to tsconfig.json there i change somthing to "outDir": "./dist",    and rootDir": "./src",  i did this

on the day1 on UserManger  
Class: UserManager
Properties:

users: User[]: Stores all users (each user has a socket and name).
queue: string[]: Stores socket IDs of users waiting for a match.
Methods:

addUser(name: string, socket: Socket)

Adds a user to the users list.
Adds the user's socket.id to the queue.
Calls clearQueue() to check if a match is possible.
removeUser(socketId: string)

Removes the user from users based on socket.id.
Removes the user from queue.
clearQueue()

If there are less than 2 users in the queue, it exits.
Otherwise, it pops two users from the queue and prepares them for pairing.
Issue: The method is incomplete (const is misspelled as cosnt and has no logic for handling the match).
2. RoomManager.ts
This file is responsible for managing rooms once users are matched.

Key Responsibilities:
Creates a room for a matched pair.
Keeps track of rooms using a Map<string, Room>.
Handles WebRTC offer exchange between matched users.


//what we create till now

i have written the code where we create web socket connection.multiple users will come and store in a useManager class when people comes then they are pushed on to queue and time to time we pull out them to room manager whose  work to  ask offer and send offer 