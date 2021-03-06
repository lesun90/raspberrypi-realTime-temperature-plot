# Raspberry Pi Real-time Temperature Plot

The purpose of this project is to track and plot temperature in realtime using Arduino + Raspberry Pi + temperature sensor.

It creates a webserver on Raspberry Pi to collect data from Arduino (update per ms) and display on Html page.

A switch button connected to Raspberry Pi to capture data in a period of time.

## Getting Started
![webinterface](/pics/webinterface.png?raw=true "webinterface")
### Hardware Setup
- A temperature sensor is connected to arduindo.

- Arduino connected to Raspberry PI via cable.

- A switch button connected to Raspberry PI (pull down).

- A led is connected to indicate status of switch button (optional).

![schematic](/pics/schematic.jpg?raw=true "schematic")
### Prerequisites
```
//install nodejs
sudo apt-get update
sudo apt-get dist-upgrade
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

```

<!---//install socket and express
npm init
npm install socket.io express --save
//install serialport
npm install serialport
sudo npm install serialport --unsafe-perm --build-from-source
//install Raspberry module for nodejs
npm install onoff
-->

### Running
On the server sie (Raspberry Pi)

```
cd /path_to_project_folder
node app.js
```

On the client side (must connect to the same network of Raspberry), run the following
code to get the Raspberry IP address

```
//Look for pi ip address
nmap -sn 192.168.1.0/24
```

Open web browser, type in that address with the port number (port number defined in app.js), eg:
```
192.168.1.9:5000
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
