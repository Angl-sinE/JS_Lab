class PcFactory {
    createPc(type) {
         switch(type) {
             case 'laptop':
                 return new Computer('i5','250w');
             case 'desktop':
                 return new Computer('i9', '650w');    
         }
    }
}

class Server  {
    constructor(cpu,powersuply) {
            this.cpu = cpu;
            this.powersuply = powersuply;
    }

}
class ServerFactory {
     createServer(type) {
         switch(type) {
             case 'linux':
                 return new Computer('i3','250w');
             case 'amazon':
                 return new Computer('i9', '650w');    
         }
    }
}


const PersonalComputerFactory = new PcFactory();
const serverFactory = new ServerFactory();

const computerManufacturer = (type, model) => {
    switch(type) {
        case 'pc':
            return PersonalComputerFactory.createPc(model);
        case 'server':
            return ServerFactory.createServer(model);    
    }
}

const alienware = computerManufacturer('pc','laptop');
console.log(alienware);

