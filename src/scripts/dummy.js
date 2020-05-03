function device(name = "rpi", ip = "0.0.0.0") {
    this.name = name;
    this.ip = ip;
    this.turnOnGPIO = function (num) { 
        return num
    }
}

function user( name = "abdoulayus", email = "onlyforbaka@people.com", password = "yolo" ){
    this.name = name
    this.email = email
    this.password = password
}