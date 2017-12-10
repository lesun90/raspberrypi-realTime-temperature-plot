# Raspberry Pi Real-time Temperature Plot

Project to track and plot temperature using Arduino + Raspberry Pi + temperature sensor.
It makes a webserver on Raspberry Pi to collect data from Arduino (update per ms) and display on Html page

## Getting Started

### Hardware Setup


### Prerequisites

```
//install nodejs
sudo apt-get update
sudo apt-get dist-upgrade
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
//install socket and express
npm init
npm install socket.io express --save
//install serialport
npm install serialport
sudo npm install serialport --unsafe-perm --build-from-source
//install Raspberry module for nodejs
npm install onoff
```

### Running

```
node app.js
```

On the server side (must connect to the same network of Raspberry), run the following
code to get the Raspberry IP address

```
//Look for pi ip address
nmap -sn 192.168.1.0/24
```

Open web browser, type in that address with the port number
```
192.168.1.9:5000
```
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
