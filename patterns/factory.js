class Computer  {
    constructor(cpu,powersuply) {
            this.cpu = cpu;
            this.powersuply = powersuply;
    }

}
class ComputerFactory {
     createComputer(type) {
         switch(type) {
             case 'laptop':
                 return new Computer('i3','250w');
             case 'desktop':
                 return new Computer('i9', '650w');    
         }
    }
}
const factory = new ComputerFactory();
const laptop = factory.createComputer('laptop');
console.log(laptop);

