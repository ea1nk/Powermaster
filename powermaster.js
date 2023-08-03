const {SerialPort} = require("serialport");
const { ReadlineParser } = require('@serialport/parser-readline');

class PowerMaster {
  constructor(serialPortPath, baudRate) {
    this.serialPort = new SerialPort(serialPortPath, { baudRate });
    this.parser = this.serialPort.pipe(new ReadlineParser({ delimiter: '\r' }));
    this.serialPort.on("data", this.handleReceivedData.bind(this));
  }

  sendCommand(command) {
    this.serialPort.write(command);
  }

  handleReceivedData(data) {
    const response = this.processCommand(data.toString().trim());
    this.sendResponse(response);
  }

  sendResponse(response) {
    this.serialPort.write(response);
  }

  processCommand(command) {
    // Todo: Process the command and generate appropriate response
    // ...
  }
}
