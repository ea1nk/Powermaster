# Powermaster NodeJS class
2023 SCQ Devices - EA1NK

### Description:

Simple javascript class to remote control the Array Solution PowerMaster VSWR Meter from a NodeJS app.

### Usage:
```
const PowerMaster = require("./powermaster.js")
const powerMaster = new PowerMaster("/dev/ttyUSB0", 9600);
powerMaster.sendCommand("A?");
```
