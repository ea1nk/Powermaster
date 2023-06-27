const SerialPort = require("serialport");

class PowerMaster {
  constructor(serialPortPath, baudRate) {
    this.serialPort = new SerialPort(serialPortPath, { baudRate });
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
