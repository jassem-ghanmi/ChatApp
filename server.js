const io = require('socket.io')(3000)

io.on('connection', socket =>{
    socket.emit('chat-message','Welcome To My PLatform')
    socket.on('send-chat-message', message =>{
        console.log(message)
    })
})