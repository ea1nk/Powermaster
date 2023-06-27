# Powermaster NodeJS class

2023 SCQ Devices - EA1NK

### Basic NodeJS class to remote control a PowerMaster VSWR Meter via web interface

Usage:
```
const PowerMaster = require("./powermaster.js")
const powerMaster = new PowerMaster("/dev/ttyUSB0", 9600);
powerMaster.sendCommand("A?");
```
