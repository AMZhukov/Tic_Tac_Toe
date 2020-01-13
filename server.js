const io = require('socket.io')();
const port = 8000;
let numberSquare = null;
let currentStateSquare = null;

io.on('connection', (client) => {
    const id = (client.id).toString().substr(0,5);
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
    client.on('player made a move', ({numberSquare, currentStateSquare}) => {
        console.log(`player ID: '${id}' made a move '${currentStateSquare}' in cell #${numberSquare}`);
        client.emit('player made a move', {numberSquare, currentStateSquare});
    });
});

io.listen(port);
console.log('listening on port ', port);
