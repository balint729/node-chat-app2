const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('New user connected');

  

   socket.on('join', (params, callback) =>{
       if(!isRealString(params.name) || !isRealString(params.room)){
            callback('Name and room name are required');

       }else{
           socket.join(params.room);

           //socket.leave(params.room);

           /*
            io.emit -> io.to(room).emit()
            socket.broadcast.emit -> socket.broadcast.to(room).emit()
            socket.emit -> Same, not room specific, user specific
           */
            socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));
            socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin', `${params.name} has joined.`));
            callback();
       } 

   });
   
   socket.on("createMessage", (message, callback) =>{
    console.log("message created", message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();

   /*  socket.broadcast.emit('newMessage', {
        to:'asd',
        from:'asd'
    }); */
   });

    socket.on('createLocationMessage', (coords) =>{
        // io.emit('newMessage', generateMessage('Admin', `${coords.latitude} : ${coords.longitude}`))
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });

    socket.on('disconnect', () =>{
        console.log('User disconnected');
    });
});



// app.get('/', (req,res) =>{
//     require(publicPath+'/index.html');

// });

server.listen(port, () =>{
    console.log(`Started on port ${port}`);
})