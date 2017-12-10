# raspberrypi-realTime-temperature-plot
//Look for PI ip address
nmap -sn 192.168.1.0/24
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
