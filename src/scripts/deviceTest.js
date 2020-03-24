function device(name = "rpi", ip = "0.0.0.0") {
    this.name = name;
    this.ip = ip;
    this.turnOnGPIO = function (num) { 
        return num
    }
}