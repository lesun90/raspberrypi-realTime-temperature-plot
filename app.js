var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var SerialPort = require('serialport');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

//setup Hardware
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
  delimiter: '\r\n'
});
var port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

port.pipe(parser);
port.on('open', () => console.log('Port open'));
///////////////////////

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(5000);
console.log("start server...")

serialdata = 0
sampleNumber = 0
recordData = []
btnStatus = 0;
io.sockets.on('connection', function (socket) {// WebSocket Connection
  //read button status
  pushButton.read(function (err, value) {
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    btnStatus = value
    socket.emit('btnStatus', btnStatus); //send button status to client
  });
  //serial event
  parser.on('data', function(data){
    // console.log(data)
    serialdata = data
    sampleNumber++
    socket.emit('senddata', {'data': serialdata, 'sampleNumber': sampleNumber});
    if (btnStatus == 1)
    {
      recordData.push(serialdata)
    }
  });

  //Watch for button change status

  pushButton.watch(function (err, value) {
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    btnStatus = value
    socket.emit('btnStatus', btnStatus); //send button status to client
    if (value == 0)
    {
      socket.emit('sendRecordData', recordData); //send button status to client
      recordData = []
    }
  });

});
